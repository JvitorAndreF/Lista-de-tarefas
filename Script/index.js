const app = new App();


const $Theme = document.getElementById('Theme');
const body = document.body;

$Theme.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    
    if(isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});