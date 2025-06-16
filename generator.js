class FFTCharacterGenerator {
    constructor() {
        if (typeof jobData === 'undefined') {
            throw new Error('gameData.js must be loaded before generator.js');
        }
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateBasicAttributes() {
        const gender = Math.random() < 0.5 ? 'male' : 'female';
        const zodiacSign = this.getRandomElement(zodiacSigns);
        
        return {
            gender,
            zodiacSign
        };
    }

    generateName(gender) {
        return this.getRandomElement(characterNames[gender]);
    }

    getAvailableJobs(gender) {
        return Object.values(jobData).filter(job => {
            if (job.genderRestriction && job.genderRestriction !== gender) {
                return false;
            }
            return true;
        });
    }

    selectRandomJob(gender) {
        const availableJobs = this.getAvailableJobs(gender);
        return this.getRandomElement(availableJobs);
    }

    getValidSupportAbilities(job) {
        return supportAbilities.filter(ability => {
            if (job.allowedWeapons.length === 0) {
                const weaponAbilities = ['Equip Sword', 'Equip Knife', 'Equip Axe', 'Equip Spear', 'Equip Crossbow', 'Equip Gun', 'Two Hands', 'Two Swords'];
                if (weaponAbilities.includes(ability)) {
                    return false;
                }
            }
            return true;
        });
    }

    generateSecondaryAbility(currentJob, gender) {
        const availableJobs = this.getAvailableJobs(gender).filter(job => job.name !== currentJob.name);
        const randomJob = this.getRandomElement(availableJobs);
        return randomJob.skillGroup;
    }

    generateAbilities(job, gender) {
        const validSupportAbilities = this.getValidSupportAbilities(job);
        
        const abilities = {
            action: job.skillGroup,
            secondary: this.generateSecondaryAbility(job, gender),
            reaction: this.getRandomElement(reactionAbilities),
            support: this.getRandomElement(validSupportAbilities),
            movement: this.getRandomElement(movementAbilities)
        };

        abilities.additionalSkills = [...job.additionalSkills];

        return abilities;
    }

    getWeaponsForJob(job, gender, supportAbilities) {
        const availableWeapons = [];
        let allowedWeaponTypes = [...job.allowedWeapons];

        supportAbilities.forEach(ability => {
            if (ability === 'Equip Sword') allowedWeaponTypes.push('Sword');
            if (ability === 'Equip Knife') allowedWeaponTypes.push('Knife');
            if (ability === 'Equip Axe') allowedWeaponTypes.push('Axe');
            if (ability === 'Equip Spear') allowedWeaponTypes.push('Spear');
            if (ability === 'Equip Crossbow') allowedWeaponTypes.push('Crossbow');
            if (ability === 'Equip Gun') allowedWeaponTypes.push('Gun');
        });

        allowedWeaponTypes.forEach(weaponType => {
            if (gender === 'male' && genderRestrictions.maleCannotUse.includes(weaponType)) {
                return;
            }
            if (gender === 'female' && genderRestrictions.femaleCannotUse.includes(weaponType)) {
                return;
            }

            if (weaponTypes.twoHanded[weaponType]) {
                availableWeapons.push(...weaponTypes.twoHanded[weaponType].map(weapon => ({
                    name: weapon,
                    type: weaponType,
                    category: 'twoHanded'
                })));
            }
            if (weaponTypes.oneHanded[weaponType]) {
                availableWeapons.push(...weaponTypes.oneHanded[weaponType].map(weapon => ({
                    name: weapon,
                    type: weaponType,
                    category: 'oneHanded'
                })));
            }
        });

        return availableWeapons;
    }

    generateWeaponLoadout(job, gender, abilities) {
        if (abilities.support.includes('Martial Arts')) {
            return { rightHand: null, leftHand: null };
        }

        const supportAbilitiesArray = [abilities.support, ...abilities.additionalSkills];
        const availableWeapons = this.getWeaponsForJob(job, gender, supportAbilitiesArray);
        
        if (availableWeapons.length === 0) {
            return { rightHand: null, leftHand: null };
        }

        const hasTwoSwords = supportAbilitiesArray.includes('Two Swords');
        const hasTwoHands = supportAbilitiesArray.includes('Two Hands');

        if (hasTwoSwords) {
            const oneHandedWeapons = availableWeapons.filter(w => w.category === 'oneHanded');
            if (oneHandedWeapons.length >= 2) {
                const primaryWeapon = this.getRandomElement(oneHandedWeapons);
                const secondaryWeapons = oneHandedWeapons.filter(w => w.name !== primaryWeapon.name);
                const secondaryWeapon = this.getRandomElement(secondaryWeapons);
                return {
                    rightHand: primaryWeapon,
                    leftHand: secondaryWeapon
                };
            } else if (oneHandedWeapons.length === 1) {
                return {
                    rightHand: oneHandedWeapons[0],
                    leftHand: null
                };
            }
        }

        if (hasTwoHands) {
            const twoHandsCompatibleWeapons = availableWeapons.filter(weapon => 
                !noTwoHandsAbility.includes(weapon.type)
            );
            if (twoHandsCompatibleWeapons.length > 0) {
                return {
                    rightHand: this.getRandomElement(twoHandsCompatibleWeapons),
                    leftHand: null
                };
            }
        }

        const primaryWeapon = this.getRandomElement(availableWeapons);
        let secondaryWeapon = null;

        const isPrimaryTwoHanded = primaryWeapon.category === 'twoHanded';
        const isSpecialTwoHanded = primaryWeapon.name === 'Hammer' && weaponSpecialRules['Hammer']?.specificWeaponTwoHanded;

        if (!isPrimaryTwoHanded && !isSpecialTwoHanded && !hasTwoHands) {
            const canDualWield = supportAbilitiesArray.includes('Two Swords');
            
            if (canDualWield) {
                const dualWieldWeapons = availableWeapons.filter(w => 
                    w.category === 'oneHanded' && w.name !== primaryWeapon.name
                );
                if (dualWieldWeapons.length > 0) {
                    secondaryWeapon = this.getRandomElement(dualWieldWeapons);
                }
            }
        }

        return {
            rightHand: primaryWeapon,
            leftHand: secondaryWeapon
        };
    }

    canUseShield(job, weaponLoadout, abilities) {
        const supportAbilitiesArray = [abilities.support, ...abilities.additionalSkills];
        
        if (supportAbilitiesArray.includes('Two Hands')) return false;
        if (!job.canUseShield && !abilities.support.includes('Equip Shield')) return false;
        if (weaponLoadout.leftHand) return false;

        const rightWeapon = weaponLoadout.rightHand;
        if (!rightWeapon) return true;

        const isPrimaryTwoHanded = rightWeapon.category === 'twoHanded';
        const canUseShieldWithTwoHanded = weaponSpecialRules[rightWeapon.type]?.canUseShield;

        return !isPrimaryTwoHanded || canUseShieldWithTwoHanded;
    }

    generateShield(job, weaponLoadout, abilities) {
        if (!this.canUseShield(job, weaponLoadout, abilities)) {
            return null;
        }

        return this.getRandomElement(shields);
    }

    generateArmor(job, gender) {
        let headGear = null;
        let bodyArmor = null;

        if (job.allowedHeadGear.length > 0) {
            const availableHeadTypes = job.allowedHeadGear;
            const headType = this.getRandomElement(availableHeadTypes);
            const availableHeadGear = armorByType[headType].filter(item => {
                if (equipmentGenderRestrictions.femaleOnly.includes(item) && gender !== 'female') {
                    return false;
                }
                if (equipmentGenderRestrictions.maleOnly.includes(item) && gender !== 'male') {
                    return false;
                }
                return true;
            });
            
            if (availableHeadGear.length > 0) {
                headGear = this.getRandomElement(availableHeadGear);
            }
        }

        if (job.allowedArmor.length > 0) {
            const availableArmorTypes = job.allowedArmor;
            const armorType = this.getRandomElement(availableArmorTypes);
            const availableBodyArmor = armorByType[armorType].filter(item => {
                if (equipmentGenderRestrictions.femaleOnly.includes(item) && gender !== 'female') {
                    return false;
                }
                if (equipmentGenderRestrictions.maleOnly.includes(item) && gender !== 'male') {
                    return false;
                }
                return true;
            });
            
            if (availableBodyArmor.length > 0) {
                bodyArmor = this.getRandomElement(availableBodyArmor);
            }
        }

        const availableAccessories = accessories.filter(item => {
            if (equipmentGenderRestrictions.femaleOnly.includes(item) && gender !== 'female') {
                return false;
            }
            if (equipmentGenderRestrictions.maleOnly.includes(item) && gender !== 'male') {
                return false;
            }
            return true;
        });

        return {
            head: headGear,
            body: bodyArmor,
            accessory: this.getRandomElement(availableAccessories)
        };
    }

    generateCharacter() {
        try {
            const basicAttributes = this.generateBasicAttributes();
            const job = this.selectRandomJob(basicAttributes.gender);
            const abilities = this.generateAbilities(job, basicAttributes.gender);
            const weaponLoadout = this.generateWeaponLoadout(job, basicAttributes.gender, abilities);
            const shield = this.generateShield(job, weaponLoadout, abilities);
            const armor = this.generateArmor(job, basicAttributes.gender);
            
            const leftHand = weaponLoadout.leftHand || shield;
            
            const character = {
                ...basicAttributes,
                job: job.name,
                equipment: {
                    rightHand: weaponLoadout.rightHand,
                    leftHand: leftHand,
                    head: armor.head,
                    body: armor.body,
                    accessory: armor.accessory
                },
                abilities: abilities,
                generatedAt: new Date().toISOString()
            };

            return character;
            
        } catch (error) {
            console.error('Error generating character:', error);
            throw error;
        }
    }
}

const fftGenerator = new FFTCharacterGenerator();

function generateRandomCharacter() {
    return fftGenerator.generateCharacter();
}

function generateRandomName(gender) {
    return fftGenerator.generateName(gender);
}