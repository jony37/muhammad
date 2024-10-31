
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.style.backgroundColor === 'green') {
            button.style.backgroundColor = ''; 
            button.textContent = 'Add'; 
        } else {
            button.style.backgroundColor = 'green';
            button.textContent = 'Added'; 
        }
    });
});

