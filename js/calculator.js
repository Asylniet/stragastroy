const tabs = document.querySelectorAll('.tab');
let locked = false;

tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
        changeTab(tab.dataset.id - 1);
    });
});

const tabWrapper = document.querySelector('.tab-page-wrapper');
const tabMove = document.querySelector('.tab-page-move');
const tabPages = document.querySelectorAll('.tab-page');
tabPages.forEach((page, index) => {
    page.style.left = `${index * 100}%`;
});

const changeTab = (tabId) => {
    if(!locked) {
        document.querySelector('.tab-page.active').classList.remove('active');
        document.querySelector(`.tab-page[data-id="${tabId + 1}"]`).classList.add('active');
        tabPages.forEach((page, index) => {
            page.style.left = `${(index - tabId) * 100}%`;
        });
        tabWrapper.style.height = `${tabPages[tabId].offsetHeight}px`;
        const tab = document.querySelector(`.tab[data-id="${tabId + 1}"`);
    
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
    }
    if(tabId === 5) {
        console.log(communication);
        communicationPlaceholder = document.getElementById('communication');
        if(communication.length > 0) {
            communicationPlaceholder.innerText = communication.join(', ');
        } else {
            communicationPlaceholder.innerText = '-';
        }
    }
}

const areaInput = document.getElementById('area');
const button1 = document.querySelector('button[data-id="1"]');
const areaPlaceholder = document.getElementById('areaPlaceholder');
areaInput.addEventListener('input', function () {
    if (areaInput.value.length > 0) {
        locked = false; 
        button1.removeAttribute('disabled');
    } else {
        locked = true;
        button1.setAttribute('disabled', 'true');
    }
    areaPlaceholder.innerText = areaInput.value;
});

let communication = [];

function selector(select, del = true) {
    const formControls = document.querySelectorAll(`.${select}`);
    formControls.forEach((control) => {
        control.addEventListener('click', function() {
            if(del) {
                document.querySelector(`.${select}.active`).classList.remove('active');
                control.classList.add('active');
            } else {
                const checkbox = control.querySelector('input');
                if(checkbox.checked) {
                    control.classList.add('active');
                    communication.push(control.innerText)
                } else {
                    control.classList.remove('active');
                    communication = communication.filter((text) => text != control.innerText)
                }
            }
        });
    });
}

selector('foundation');
selector('wall');
selector('communication', false);
selector('roof');

const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach((radio) => {
    radio.addEventListener('click', function() {
        const name = radio.getAttribute('name');
        const value = radio.dataset.value;
        const placeholder = document.getElementById(name);
        placeholder.innerText = value;
    });
});

changeTab(0);
locked = true;
