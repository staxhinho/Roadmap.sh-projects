const tabs = document.querySelectorAll('.tab');
const buttons = document.querySelectorAll('.tab-btn');

console.log("I loaded");

tabs.forEach((tab, index) => {
    tab.style.display = index === 0 ? 'block' : 'none';
});

function switchTab(index) {
    tabs.forEach((tab, i) => {
        tab.style.display = i === index ? 'block' : 'none';
    });
}

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => switchTab(index));
});