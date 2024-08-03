
let selectedRegions = [];
let selectedBudgets = [];

function validateStep1() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (name && phone) {
        nextStep(2);
    } else {
        alert('يرجى إدخال اسمك ورقم هاتفك.');
    }
}

function selectOption(button, value, isRegion) {
    if (isRegion) {
        const index = selectedRegions.indexOf(value);
        if (index > -1) {
            selectedRegions.splice(index, 1);
            button.classList.remove('selected');
        } else {
            selectedRegions.push(value);
            button.classList.add('selected');
        }
        document.getElementById('regions').value = selectedRegions.join(', ');
        document.getElementById('continueStep2').style.display = selectedRegions.length > 0 ? 'block' : 'none';
    } else {
        const index = selectedBudgets.indexOf(value);
        if (index > -1) {
            selectedBudgets.splice(index, 1);
            button.classList.remove('selected');
        } else {
            selectedBudgets.push(value);
            button.classList.add('selected');
        }
        document.getElementById('budgets').value = selectedBudgets.join(', ');
        document.getElementById('continueStep3').style.display = selectedBudgets.length > 0 ? 'block' : 'none';
    }
}

function validateStep2() {
    if (selectedRegions.length > 0) {
        nextStep(3);
    } else {
        alert('يرجى اختيار منطقة.');
    }
}

function validateStep3() {
    if (selectedBudgets.length > 0) {
        nextStep(4);
        document.getElementById('submitForm').click();
    } else {
        alert('يرجى اختيار ميزانية.');
    }
}

function nextStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
}