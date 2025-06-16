let savedCharacters = [];
let currentCharacter = null;

function showCustomAlert(message, title = 'Notice') {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="custom-alert">
            <h3>${title}</h3>
            <p>${message}</p>
            <div class="custom-alert-buttons">
                <button class="custom-alert-btn" onclick="closeCustomAlert(this)">OK</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function showCustomConfirm(message, title = 'Confirm', onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="custom-alert">
            <h3>${title}</h3>
            <p>${message}</p>
            <div class="custom-alert-buttons">
                <button class="custom-alert-btn" onclick="closeCustomAlert(this)">Cancel</button>
                <button class="custom-alert-btn danger" onclick="confirmCustomAlert(this, '${onConfirm.name}')">Confirm</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Store the callback function globally
    window.tempConfirmCallback = onConfirm;
}

function closeCustomAlert(button) {
    const modal = button.closest('.custom-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        document.body.removeChild(modal);
        if (window.tempConfirmCallback) {
            delete window.tempConfirmCallback;
        }
    }, 300);
}

function confirmCustomAlert(button, callbackName) {
    if (window.tempConfirmCallback) {
        window.tempConfirmCallback();
    }
    closeCustomAlert(button);
}

function updateUnitDisplay(character) {
    currentCharacter = character;
    
    const unitResult = document.getElementById('unitResult');
    const unitName = document.getElementById('unitNameText');
    const unitGender = document.getElementById('unitGender');
    const unitJob = document.getElementById('unitJob');
    const unitZodiac = document.getElementById('unitZodiac');
    const unitRightHand = document.getElementById('unitRightHand');
    const unitLeftHand = document.getElementById('unitLeftHand');
    const unitArmor = document.getElementById('unitArmor');
    const unitAccessory = document.getElementById('unitAccessory');
    const abilitiesList = document.getElementById('abilitiesList');

    const name = generateRandomName(character.gender);

    let jobImageName;
    if (character.job === 'Dancer') {
        jobImageName = 'dancer.jpg';
    } else if (character.job === 'Bard') {
        jobImageName = 'bard.jpg';
    } else {
        const prefix = character.gender === 'male' ? 'm' : 'f';
        const jobName = character.job.replace(' ', '');
        jobImageName = `${prefix}${jobName}.jpg`;
    }

    unitName.innerHTML = `<img src="images/${jobImageName}" style="height: 40px; width: auto; margin-right: 8px; vertical-align: middle; border: 1px solid #6d402c; border-radius: 2px;"> ${name}`;
    unitGender.textContent = character.gender.charAt(0).toUpperCase() + character.gender.slice(1);
    unitJob.textContent = character.job;
    unitZodiac.innerHTML = `<img src="images/${character.zodiacSign}_Symbol.jpg" style="width: 32px; height: 32px; object-fit: contain; background-color: white; margin-right: 4px; vertical-align: middle; border: 1px solid #6d402c; border-radius: 2px;"> ${character.zodiacSign}`;

    const hasMartialArts = character.abilities.support === 'Martial Arts';
    unitRightHand.textContent = character.equipment.rightHand ? character.equipment.rightHand.name : (hasMartialArts ? 'Unarmed' : 'None');
    unitLeftHand.textContent = character.equipment.leftHand ? 
        (character.equipment.leftHand.name || character.equipment.leftHand) : 'None';
    unitArmor.textContent = character.equipment.body || 'None';
    unitAccessory.textContent = character.equipment.accessory || 'None';

    character.displayName = name;

    abilitiesList.innerHTML = '';
    
    if (character.abilities.action) {
        const primaryRow = document.createElement('div');
        primaryRow.className = 'ability-row';
        
        const primaryLabel = document.createElement('span');
        primaryLabel.className = 'ability-label';
        primaryLabel.textContent = 'Primary Ability:';
        
        const primaryName = document.createElement('span');
        primaryName.className = 'ability-name';
        primaryName.textContent = character.abilities.action;
        
        primaryRow.appendChild(primaryLabel);
        primaryRow.appendChild(primaryName);
        abilitiesList.appendChild(primaryRow);
    }

    if (character.abilities.secondary) {
        const secondaryRow = document.createElement('div');
        secondaryRow.className = 'ability-row';
        
        const secondaryLabel = document.createElement('span');
        secondaryLabel.className = 'ability-label';
        secondaryLabel.textContent = 'Secondary Ability:';
        
        const secondaryName = document.createElement('span');
        secondaryName.className = 'ability-name';
        secondaryName.textContent = character.abilities.secondary;
        
        secondaryRow.appendChild(secondaryLabel);
        secondaryRow.appendChild(secondaryName);
        abilitiesList.appendChild(secondaryRow);
    }

    if (character.abilities.reaction) {
        const reactionRow = document.createElement('div');
        reactionRow.className = 'ability-row';
        
        const reactionLabel = document.createElement('span');
        reactionLabel.className = 'ability-label';
        reactionLabel.textContent = 'Reaction Ability:';
        
        const reactionName = document.createElement('span');
        reactionName.className = 'ability-name';
        reactionName.textContent = character.abilities.reaction;
        
        reactionRow.appendChild(reactionLabel);
        reactionRow.appendChild(reactionName);
        abilitiesList.appendChild(reactionRow);
    }

    if (character.abilities.support) {
        const supportRow = document.createElement('div');
        supportRow.className = 'ability-row';
        
        const supportLabel = document.createElement('span');
        supportLabel.className = 'ability-label';
        supportLabel.textContent = 'Support Ability:';
        
        const supportName = document.createElement('span');
        supportName.className = 'ability-name';
        supportName.textContent = character.abilities.support;
        
        supportRow.appendChild(supportLabel);
        supportRow.appendChild(supportName);
        abilitiesList.appendChild(supportRow);
    }

    if (character.abilities.movement) {
        const movementRow = document.createElement('div');
        movementRow.className = 'ability-row';
        
        const movementLabel = document.createElement('span');
        movementLabel.className = 'ability-label';
        movementLabel.textContent = 'Movement Ability:';
        
        const movementName = document.createElement('span');
        movementName.className = 'ability-name';
        movementName.textContent = character.abilities.movement;
        
        movementRow.appendChild(movementLabel);
        movementRow.appendChild(movementName);
        abilitiesList.appendChild(movementRow);
    }

    unitResult.classList.remove('hidden');
    updateSaveButton();
}

function saveCharacter() {
    if (!currentCharacter || savedCharacters.length >= 5) return;
    
    savedCharacters.push({...currentCharacter});
    updateSavedCharactersList();
    updateSaveButton();
    updateSidebarButtons();
}

function updateSavedCharactersList() {
    const savedCharactersList = document.getElementById('savedCharactersList');
    const characterCount = document.getElementById('characterCount');
    
    savedCharactersList.innerHTML = '';
    characterCount.textContent = savedCharacters.length;
    
    savedCharacters.forEach((character, index) => {
        const item = document.createElement('div');
        item.className = 'saved-character-item';
        item.onclick = () => toggleCharacterDetails(index);
        
        const summary = document.createElement('div');
        summary.className = 'saved-character-summary';
        summary.innerHTML = `<img src="images/${getJobImageName(character)}" style="width: 20px; height: auto; margin-right: 4px;"> ${character.displayName} - ${character.gender} ${character.job}, ${character.zodiacSign}`;
        
        const details = document.createElement('div');
        details.className = 'saved-character-details';
        details.id = `character-details-${index}`;
        
        const rightHand = character.equipment.rightHand ? character.equipment.rightHand.name : (character.abilities.support === 'Martial Arts' ? 'Unarmed' : 'None');
        const leftHand = character.equipment.leftHand ? (character.equipment.leftHand.name || character.equipment.leftHand) : 'None';
        
        details.innerHTML = `
            R hand: ${rightHand}<br>
            L hand: ${leftHand}<br>
            Head: ${character.equipment.head || 'None'}<br>
            Body: ${character.equipment.body || 'None'}<br>
            Accessory: ${character.equipment.accessory || 'None'}<br><br>
            Abilities:<br>
            Secondary: ${character.abilities.secondary}<br>
            Reaction: ${character.abilities.reaction}<br>
            Support: ${character.abilities.support}<br>
            Movement: ${character.abilities.movement}
        `;
        
        item.appendChild(summary);
        item.appendChild(details);
        savedCharactersList.appendChild(item);
    });
}

function toggleCharacterDetails(index) {
    const details = document.getElementById(`character-details-${index}`);
    details.classList.toggle('expanded');
}

function getJobImageName(character) {
    if (character.job === 'Dancer') {
        return 'dancer.jpg';
    } else if (character.job === 'Bard') {
        return 'bard.jpg';
    } else {
        const prefix = character.gender === 'male' ? 'm' : 'f';
        const jobName = character.job.replace(' ', '');
        return `${prefix}${jobName}.jpg`;
    }
}

function updateSaveButton() {
    const saveBtn = document.getElementById('saveCharacterBtn');
    if (saveBtn) {
        saveBtn.disabled = !currentCharacter || savedCharacters.length >= 5;
    }
}

function updateSidebarButtons() {
    const copyBtn = document.getElementById('copyAllBtn');
    const clearBtn = document.getElementById('clearAllBtn');
    
    if (copyBtn) copyBtn.disabled = savedCharacters.length === 0;
    if (clearBtn) clearBtn.disabled = savedCharacters.length === 0;
}

function copyAllCharacters() {
    if (savedCharacters.length === 0) return;
    
    let text = '=== FFT Character Generator - Saved Characters ===\n\n';
    
    savedCharacters.forEach((character, index) => {
        const rightHand = character.equipment.rightHand ? character.equipment.rightHand.name : (character.abilities.support === 'Martial Arts' ? 'Unarmed' : 'None');
        const leftHand = character.equipment.leftHand ? (character.equipment.leftHand.name || character.equipment.leftHand) : 'None';
        
        text += `${character.displayName} - ${character.gender} ${character.job}, ${character.zodiacSign}\n`;
        text += `R hand: ${rightHand}\n`;
        text += `L hand: ${leftHand}\n`;
        text += `Head: ${character.equipment.head || 'None'}\n`;
        text += `Body: ${character.equipment.body || 'None'}\n`;
        text += `Accessory: ${character.equipment.accessory || 'None'}\n\n`;
        text += `Abilities:\n`;
        text += `Secondary: ${character.abilities.secondary}\n`;
        text += `Reaction: ${character.abilities.reaction}\n`;
        text += `Support: ${character.abilities.support}\n`;
        text += `Movement: ${character.abilities.movement}\n\n`;
        
        if (index < savedCharacters.length - 1) {
            text += '---\n\n';
        }
    });
    
    navigator.clipboard.writeText(text).then(() => {
        showCustomAlert('Characters copied to clipboard!', 'Success');
    }).catch(() => {
        showCustomAlert('Could not copy to clipboard. Please try again.', 'Error');
    });
}

function clearAllCharacters() {
    showCustomConfirm(
        'Are you sure you want to clear all saved characters?',
        'Clear Characters',
        function() {
            savedCharacters = [];
            updateSavedCharactersList();
            updateSidebarButtons();
        }
    );
}

function handleGenerateUnit() {
    try {
        const character = generateRandomCharacter();
        updateUnitDisplay(character);
    } catch (error) {
        console.error('Failed to generate character:', error);
        showCustomAlert('Error generating character. Please check the console for details.', 'Error');
    }
}

function handleGenerateMaleName() {
    try {
        const name = generateRandomName('male');
        updateNameDisplay(name);
    } catch (error) {
        console.error('Failed to generate male name:', error);
        showCustomAlert('Error generating male name. Please check the console for details.', 'Error');
    }
}

function handleGenerateFemaleName() {
    try {
        const name = generateRandomName('female');
        updateNameDisplay(name);
    } catch (error) {
        console.error('Failed to generate female name:', error);
        showCustomAlert('Error generating female name. Please check the console for details.', 'Error');
    }
}

function initializeEventListeners() {
    const generateUnitBtn = document.getElementById('generateUnitBtn');
    const generateMaleNameBtn = document.getElementById('generateMaleNameBtn');
    const generateFemaleNameBtn = document.getElementById('generateFemaleNameBtn');
    const saveCharacterBtn = document.getElementById('saveCharacterBtn');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    
    if (generateUnitBtn) {
        generateUnitBtn.addEventListener('click', handleGenerateUnit);
    }
    
    if (generateMaleNameBtn) {
        generateMaleNameBtn.addEventListener('click', handleGenerateMaleName);
    }
    
    if (generateFemaleNameBtn) {
        generateFemaleNameBtn.addEventListener('click', handleGenerateFemaleName);
    }
    
    if (saveCharacterBtn) {
        saveCharacterBtn.addEventListener('click', saveCharacter);
    }
    
    if (copyAllBtn) {
        copyAllBtn.addEventListener('click', copyAllCharacters);
    }
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', clearAllCharacters);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateSidebarButtons();
});