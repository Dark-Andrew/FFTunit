const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const jobData = {
    Squire: {
        name: 'Squire',
        skillGroup: 'Basic Skills',
        additionalSkills: [],
        allowedWeapons: ['Knife', 'Sword', 'Axe', 'Hammer'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: null
    },
    Chemist: {
        name: 'Chemist',
        skillGroup: 'Item',
        additionalSkills: ['Throw Item'],
        allowedWeapons: ['Knife', 'Gun'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: null
    },
    Knight: {
        name: 'Knight',
        skillGroup: 'Battle Skill',
        additionalSkills: [],
        allowedWeapons: ['Sword', 'Knight Sword'],
        allowedHeadGear: ['Helmet'],
        allowedArmor: ['Armor', 'Robe'],
        canUseShield: true,
        genderRestriction: null
    },
    Archer: {
        name: 'Archer',
        skillGroup: 'Charge',
        additionalSkills: [],
        allowedWeapons: ['Bow', 'Crossbow'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: true,
        genderRestriction: null
    },
    Priest: {
        name: 'Priest',
        skillGroup: 'White Magic',
        additionalSkills: [],
        allowedWeapons: ['Staff'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Wizard: {
        name: 'Wizard',
        skillGroup: 'Black Magic',
        additionalSkills: [],
        allowedWeapons: ['Rod'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Monk: {
        name: 'Monk',
        skillGroup: 'Punch Art',
        additionalSkills: [],
        allowedWeapons: [],
        allowedHeadGear: [],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: null
    },
    Thief: {
        name: 'Thief',
        skillGroup: 'Steal',
        additionalSkills: [],
        allowedWeapons: ['Knife'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: null
    },
    Oracle: {
        name: 'Oracle',
        skillGroup: 'Yin Yang Magic',
        additionalSkills: [],
        allowedWeapons: ['Stick', 'Rod', 'Staff', 'Dictionary'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    'Time Mage': {
        name: 'Time Mage',
        skillGroup: 'Time Magic',
        additionalSkills: [],
        allowedWeapons: ['Staff'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Geomancer: {
        name: 'Geomancer',
        skillGroup: 'Elemental',
        additionalSkills: [],
        allowedWeapons: ['Sword', 'Axe'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: true,
        genderRestriction: null
    },
    Lancer: {
        name: 'Lancer',
        skillGroup: 'Jump',
        additionalSkills: [],
        allowedWeapons: ['Spear'],
        allowedHeadGear: ['Helmet'],
        allowedArmor: ['Armor', 'Robe'],
        canUseShield: true,
        genderRestriction: null
    },
    Mediator: {
        name: 'Mediator',
        skillGroup: 'Talk Skill',
        additionalSkills: [],
        allowedWeapons: ['Gun', 'Knife'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Summoner: {
        name: 'Summoner',
        skillGroup: 'Summon Magic',
        additionalSkills: [],
        allowedWeapons: ['Rod', 'Staff'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Samurai: {
        name: 'Samurai',
        skillGroup: 'Draw Out',
        additionalSkills: [],
        allowedWeapons: ['Katana'],
        allowedHeadGear: ['Helmet'],
        allowedArmor: ['Armor', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Ninja: {
        name: 'Ninja',
        skillGroup: 'Throw',
        additionalSkills: ['Two Swords'],
        allowedWeapons: ['Knife', 'Ninja Sword', 'Hammer'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: null
    },
    Calculator: {
        name: 'Calculator',
        skillGroup: 'Math Skill',
        additionalSkills: [],
        allowedWeapons: ['Stick', 'Dictionary'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes', 'Robe'],
        canUseShield: false,
        genderRestriction: null
    },
    Dancer: {
        name: 'Dancer',
        skillGroup: 'Dance',
        additionalSkills: [],
        allowedWeapons: ['Knife', 'Fabric'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: 'female'
    },
    Bard: {
        name: 'Bard',
        skillGroup: 'Sing',
        additionalSkills: [],
        allowedWeapons: ['Musical Instrument'],
        allowedHeadGear: ['Hat'],
        allowedArmor: ['Clothes'],
        canUseShield: false,
        genderRestriction: 'male'
    },
    Mime: {
        name: 'Mime',
        skillGroup: 'Mimic',
        additionalSkills: [],
        allowedWeapons: [],
        allowedHeadGear: [],
        allowedArmor: [],
        canUseShield: false,
        genderRestriction: null
    }
};

const reactionAbilities = [
    'Counter Tackle', 'Auto Potion', 'Weapon Guard', 'Speed Save', 'Arrow Guard',
    'HP Restore', 'Counter', 'Hamedo', 'Regenerator', 'Counter Magic',
    'Critical Quick', 'MP Switch', 'MP Restore', 'Caution', 'Gilgame Heart',
    'Catch', 'Finger Guard', 'Absorb Used MP', 'Counter Flood', 'Dragon Spirit',
    'Meatbone Slash', 'Blade Grasp', 'Sunken State', 'Abandon', 'Distribute',
    'Damage Split', 'A Save', 'Brave Up', 'MA Save', 'Faith up'
];

const supportAbilities = [
    'Equip Axe', 'Monster Skill', 'Defend', 'Throw Item',
    'Maintenance', 'Equip Shield', 'Equip Sword',
    'Equip Crossbow', 'Concentrate', 'Martial Arts', 'Magic Defend Up', 'Short Charge',
    'Half of MP', 'Secret Hunt', 'Equip Gun', 'Train', 'Monster Talk',
    'Defense Up', 'Attack Up', 'Equip Spear', 'Equip Knife', 'Two Hands',
    'Two Swords'
];

const movementAbilities = [
    'Move +1', 'Move +2', 'Move +3', 'Move - Find Item', 'Jump +1', 'Jump +2',
    'Jump +3', 'Move - HP Up', 'Teleport', 'Float', 'Any Weather', 'Move - MP Up',
    'Any Ground', 'Move on Lava', 'Ignore Height', 'Walk on water', 'Move in water', 'Fly'
];

const weaponTypes = {
    twoHanded: {
        Axe: [
            "Battle Axe", "Giant Axe", "Slasher"
        ],
        Bag: [
            "C bag", "FS Bag", "P Bag", "H Bag"
        ],
        Dictionary: [
            "Battle Dictionary", "Monster Dictionary", "Papyrus Plate", "Madlemgen"
        ],
        Bow: [
            "Long Bow", "Silver Bow", "Ice Bow", "Lightning Bow", "Windslash Bow", 
            "Mythril Bow", "Ultimus Bow", "Yoichi Bow", "Perseus Bow"
        ],
        Fabric: [
            "Persia", "Cashmere", "Ryozan Silk"
        ],
        Crossbow: [
            "Bow Gun", "Night Killer", "Crossbow", "Poison Bow", "Hunting Bow", "Gastrafitis"
        ],
        Gun: [
            "Romanda Gun", "Mythril Gun", "Stone Gun", "Blaze Gun", "Glacier Gun", "Blast Gun"
        ],
        'Musical Instrument': [
            "Ramia Harp", "Bloody Strings", "Fairy Harp"
        ],
        Stick: [
            "Cypress Rod", "Battle Bamboo", "Musk Rod", "Iron Fan", "Gokuu Rod", "Ivory Rod", "Octogon Rod", "Whale Whisker"
        ],
        Spear: [
            "Javelin", "Spear", "Mythril Spear", "Partisan", "Oberisk", "Holy Lance", "Dragon Whisker"
        ]
    },
    oneHanded: {
        Sword: [
            "Broad Sword", "Long Sword", "Iron Sword", "Mythril Sword", "Blood Sword",
            "Coral Sword", "Ancient Sword", "Sleep Sword", "Diamond Sword", "Platinum Sword",
            "Ice Brand", "Rune Blade", "Nagra Rock"
        ],
        'Knight Sword': [
            "Defender", "Save the Queen", "Excalibur", "Ragnarok", "Chaos Blade"
        ],
        Knife: [
            "Dagger", "Mythril Knife", "Blind Knife", "Mage Masher", "Platina Dagger", 
            "Main Gauche", "Orichalcum", "Assassin Dagger", "Air Knife", "Zorlin Shape"
        ],
        Katana: [
            "Asura Knife", "Koutetsu Knife", "Bizen Boat", "Murasame", "Heaven's Cloud", 
            "Kiyomori", "Muramasa", "Kikuichimoji", "Masamune", "Chirijiraden"
        ],
        'Ninja Sword': [
            "Hidden Knife", "Ninja Knife", "Short Edge", "Ninja Edge", "Spell Edge", 
            "Sasuke Knife", "Iga Knife", "Kogo Knife"
        ],
        Rod: [
            "Rod", "Thunder Rod", "Flame Rod", "Ice rod", "Poison Rod", "Wizard Rod", "Dragon Rod", "Faith Rod"
        ],
        Staff: [
            "Oak staff", "White staff", "Healing staff", "Rainbow staff", "Wizard staff", 
            "Gold staff", "Mace of Zeus", "Sage Staff"
        ],
        Hammer: [
            "Hammer", "Flame Whip", "Morning Star", "Scorpion Tail"
        ]
    }
};

const weaponSpecialRules = {
    'Hammer': { specificWeaponTwoHanded: true },
    'Gun': { canUseShield: true },
    'Spear': { canUseShield: true }
};

const noTwoHandsAbility = [
    'Bag', 'Dictionary', 'Bow', 'Fabric', 'Crossbow', 'Gun', 
    'Musical Instrument', 'Stick', 'Knife', 'Rod'
];

const genderRestrictions = {
    maleCannotUse: ['Bag', 'Fabric'],
    femaleCannotUse: ['Musical Instrument']
};

const equipmentGenderRestrictions = {
    femaleOnly: ['Cachusha', 'Barette', 'Ribbon', 'Chantage', 'Cherche', 'Setiemson', 'Salty Rage'],
    maleOnly: []
};

const shields = [
    "Escutcheon", "Buckler", "Bronze Shield", "Round Shield", "Mythril Shield", "Gold Shield", 
    "Ice Shield", "Flame Shield", "Aegis Shield", "Diamond Shield", "Platina Shield", 
    "Crystal Shield", "Genji Shield", "Kaiser Plate", "Venetian Shield"
];

const armorByType = {
    Helmet: [
        "Leather Helmet", "Bronze Helmet", "Iron Helmet", "Barbuta", "Mythril Helmet", 
        "Gold Helmet", "Cross Helmet", "Diamond Helmet", "Platina Helmet", "Circlet", 
        "Crystal Helmet", "Genji Helmet", "Grand Helmet"
    ],
    Hat: [
        "Leather Hat", "Feather Hat", "Red Hood", "Headgear", "Triangle hat", "Green Beret", 
        "Twist Headband", "Holy Miter", "Black Hood", "Golden Hairpin", "Flash Hat", "Thief Hat",
        "Cachusha", "Barette", "Ribbon"
    ],
    Armor: [
        "Leather Armor", "Linen Cuirass", "Bronze Armor", "Chain Mail", "Mythril Armor", 
        "Plate Mail", "Gold Armor", "Diamond Armor", "Platina Armor", "Carabini Mail", 
        "Crystal Mail", "Genji Armor", "Reflect Mail", "Maximillian"
    ],
    Robe: [
        "Linen Robe", "Silk Robe", "Wizard Robe", "Chameleon Robe", "White Robe", 
        "Black Robe", "Light Robe", "Robe of Lords"
    ],
    Clothes: [
        "Clothes", "Leather Outfit", "Leather Vest", "Chain Vest", "Mythril Vest", 
        "Adaman Vest", "Wizard Outfit", "Brigandine", "Judo Outfit", "Power Sleeve", 
        "Earth CLothes", "Secret Clothes", "Black Costume", "Rubber Conscious"
    ]
};

const accessories = [
    "Power Wrist", "Genji Gauntlet", "Magic Gauntlet", "Bracer",
    "Battle Boots", "Spike Shoes", "Germinas Boots", "Rubber Shoes", "Feather Boots", 
    "Sprint Shoes", "Red Shoes",
    "Reflect Ring", "Defense Ring", "Magic Ring", "Cursed Ring", "Angel Ring",
    "Diamond Armlet", "Jade Armlet", "108 Gems", "N-Kai Armlet", "Defense Armlet",
    "Small Mantle", "Leather Mantle", "Wizard Mantle", "Elf Mantle", "Dracula Mantle", 
    "Feather Mantle", "Vanish Mantle",
    "Chantage", "Cherche", "Setiemson", "Salty Rage"
];

const characterNames = {
    male: [
        'Abel', 'Abelard', 'Abraham', 'Addison', 'Akintunde', 'Alaire', 'Albin', 'Aldebrand', 'Aldous', 'Aleyn',
        'Alistair', 'Ancelot', 'Anselm', 'Aran', 'Arnald', 'Arnott', 'Arthur', 'Augustine', 'Aylmer', 'Baderon',
        'Baldric', 'Bardolf', 'Bartholomu', 'Bayard', 'Belmont', 'Benedict', 'Beneger', 'Bernard', 'Berndan', 'Bertram',
        'Bertrand', 'Blackburn', 'Blavier', 'Bouchard', 'Boyle', 'Bran', 'Brice', 'Brien', 'Bruce', 'Bryce',
        'Cain', 'Cameron', 'Caplan', 'Carmine', 'Caspar', 'Chamberlain', 'Charlys', 'Chartain', 'Claudien',
        'Clifton', 'Clive', 'Cole', 'Colson', 'Conphas', 'Cornell', 'Coster', 'Cutbert', 'Cuthbert', 'Cyriac',
        'Daimbert', 'Dalmas', 'Danyell', 'Dauid', 'Davyd', 'Dawson', 'Deitrich', 'Denston', 'Derwin', 'Deryk',
        'Donner', 'Drake', 'Drew', 'Drystan', 'Eadbert', 'Ealdwine', 'Edmund', 'Edwyn', 'Eldred', 'Eleazar',
        'Emanuel', 'Emerick', 'Erasmus', 'Erik', 'Esmond', 'Esmour', 'Esperaunce', 'Etgar', 'Ethelbert', 'Ethelred',
        'Eustace', 'Fawkes', 'Fiebras', 'Flambard', 'Flansburgh', 'Folke', 'Foxe', 'Francis', 'Frederick', 'Frederyk',
        'Fulke', 'Galfrid', 'Ganelon', 'Gared', 'Gauwyn', 'Gembert', 'Geoffrey', 'Gerald', 'Gerbold', 'Gerhardt',
        'Gerland', 'Goddard', 'Godebert', 'Godfrey', 'Gregory', 'Grimbald', 'Gryffen', 'Guston', 'Gwayne', 'Gylbart',
        'Gyles', 'Habreham', 'Hadrian', 'Haimirich', 'Halstein', 'Hamon', 'Heinlein', 'Hewrey', 'Humphrey', 'Ingham',
        'Ingram', 'Isleton', 'Ivan', 'Jakys', 'Jeger', 'Jenlyns', 'Johannes', 'Jonathas', 'Joseph', 'Josias',
        'Joyce', 'Junk', 'Kain', 'Kennard', 'Kenrick', 'Kerrich', 'Khellus', 'Kimball', 'Kinnison', 'Kurtz',
        'Ladislas', 'Lambert', 'Lars', 'Laurence', 'Laurentius', 'Leavold', 'Lefwyne', 'Lennard', 'Leopold', 'Littlejohn',
        'Lloyd', 'Lodwicke', 'Lowell', 'Madison', 'Mainfroi', 'Mansel', 'Mathye', 'Morgant', 'Morys', 'Myles',
        'Nathaniel', 'Navarre', 'Neale', 'Noes', 'Norman', 'Olyver', 'Orrick', 'Orwen', 'Osric', 'Oswyn',
        'Owyne', 'Parnell', 'Patrick', 'Paul', 'Percival', 'Peter', 'Philippe', 'Piers', 'Powle', 'Radcliffe',
        'Radolf', 'Raffe', 'Randall', 'Randwulf', 'Rauffe', 'Raulin', 'Redwald', 'Reeve', 'Reginald', 'Reinholdt',
        'Reynard', 'Reyner', 'Reynfred', 'Ricard', 'Richarde', 'Rickeman', 'Ridel', 'Robert', 'Robyn', 'Roger',
        'Rolfe', 'Ronald', 'Roundelph', 'Rowland', 'Samson', 'Sandre', 'Sevrin', 'Sighard', 'Sigurdh', 'Simond',
        'Singleton', 'Solyeuse', 'Spenser', 'Stewart', 'Swift', 'Symon', 'Symond', 'Taran', 'Taylor', 'Templeton',
        'Tensberger', 'Theodore', 'Thomas', 'Thrydwulf', 'Timothy', 'Tristan', 'Turstin', 'Ulric', 'Valentyne', 'Vannes',
        'Vector', 'Victor', 'Voyce', 'Vyncent', 'Wadard', 'Walter', 'Warin', 'Wauter', 'Werner', 'Wilfrid',
        'Wilham', 'Willielmus', 'Wineburg', 'Wolfstan', 'Wyatt', 'Wymon', 'Wymond', 'Wystan', 'Ywain', 'Zacheus',
        'Zell', 'Zerig'
    ],
    female: [
        'Adela', 'Adelaide', 'Admiranda', 'Aeditha', 'Aelina', 'Agnys', 'Alainne', 'Alianore', 'Alison', 'Alyne',
        'Alys', 'Amelia', 'Amice', 'Amphelice', 'Angelet', 'Anna', 'Annabel', 'Anne', 'Anthoinette', 'Anys',
        'Arabella', 'Arlette', 'Atilda', 'Aubrey', 'Audrye', 'Ava', 'Avelin', 'Avelyn', 'Averil', 'Ayleth',
        'Baterich', 'Bathsua', 'Beatrix', 'Bellinda', 'Bertana', 'Berte', 'Bess', 'Brangwine', 'Braya', 'Brunhild',
        'Bryde', 'Caesaria', 'Carmen', 'Casandra', 'Cecilia', 'Cecily', 'Celeste', 'Celestine', 'Celestria', 'Cenota',
        'Charmaine', 'Chloe', 'Christabel', 'Cicely', 'Clarimond', 'Claudia', 'Clemence', 'Collys', 'Comet', 'Concessa',
        'Constance', 'Cornelia', 'Crestian', 'Cristiana',, 'Cyndra', 'Cynewyn', 'Damaris', 'Dametta', 'Decima',
        'Deloys', 'Denys', 'Diamanda', 'Dionisia', 'Dominy', 'Dorcas', 'Dorothe', 'Durilda', 'Dyana', 'Edelinne',
        'Edithe', 'Eilonwy', 'Elaisse', 'Ele', 'Eleanor', 'Elewys', 'Ellerete', 'Ellie', 'Elsebee', 'Elyn',
        'Elynor', 'Elyzabeth', 'Emblyn', 'Emeline', 'Emeny', 'Emeria', 'Emery', 'Emilie', 'Emlinie', 'Emmet',
        'Eschina', 'Eschiva', 'Esdeline', 'Esmenet', 'Estienne', 'Estrild', 'Ethelia', 'Eugenia', 'Eustacia', 'Eva',
        'Evelyn', 'Felice', 'Florens', 'Frances', 'Francisca', 'Frideswide', 'Fridgia', 'Gaynor', 'Germainne', 'Gethrude',
        'Gillian', 'Giselle', 'Glenda', 'Gloriana', 'Guinevere', 'Gylda', 'Helena', 'Helenor', 'Helvynya', 'Hester',
        'Hilda', 'Hildegard', 'Hilith', 'Imedia', 'Isabella', 'Isemeine', 'Ismay', 'Ismenia', 'Isolde', 'Jaane',
        'Jacquette', 'Jeanne', 'Jellion', 'Jemime', 'Jenet', 'Jenyfer', 'Jessamine', 'Jillian', 'Jocea', 'Jocelyn',
        'Joleicia', 'Jolline', 'Josephine', 'Josian', 'Josiane', 'Joyse', 'Judithe', 'Judye', 'Juliana', 'Julyan',
        'June', 'Justina', 'Katelyn', 'Kath', 'Katherine', 'Katrine', 'Kinborow', 'Latisha', 'Lauda', 'Leofwen',
        'Leofwynn', 'Letita', 'Lettice', 'Linette', 'Linyeve', 'Lora', 'Maddeline', 'Maerwynn', 'Maisenta', 'Malin',
        'Margarete', 'Margeria', 'Margry', 'Maria', 'Maronne', 'Marsilia', 'Martine', 'Mathild', 'Melodie', 'Melusine',
        'Meredithe', 'Merewyn', 'Merilda', 'Meryell', 'Millicent', 'Minerva', 'Mirabelle', 'Morgayne', 'Muriel', 'Murienne',
        'Mydrede', 'Nesta', 'Nicholina', 'Nicia', 'Nicolaa', 'Olyffe', 'Ophellia', 'Ottilia', 'Paige', 'Parnella',
        'Pelinne', 'Penelope', 'Petronilla', 'Placencia', 'Prudence', 'Pulmia', 'Purnell', 'Rebeccah', 'Rianna', 'Richenda',
        'Rosa', 'Rosalind', 'Rosamund', 'Rose', 'Roysia', 'Rychyld', 'Samantha', 'Sanche', 'Sarra', 'Scarlet',
        'Selphina', 'Sence', 'Serendipity', 'Somerhild', 'Sreda', 'Sybell', 'Sylphie', 'Syndony', 'Sysley',
        'Tansa', 'Temperance', 'Theda', 'Theresa', 'Thomasine', 'Thomasyn', 'Thora', 'Tiphina', 'Tristana', 'Ursula',
        'Vrsela', 'Wenyld', 'Willmott', 'Wulfhilda', 'Wynefreede', 'Yedythe', 'Ysabel', 'Ysmeina'
    ]
};