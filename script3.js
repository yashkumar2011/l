// Change the background color of the body when a button is clicked
document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.getElementById('body');
    const button = document.createElement('button');
    button.innerText = 'Change Background Color to your liking my friend';
    button.style.display = 'block';
    button.style.margin = '30px auto';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    body.appendChild(button);

    button.addEventListener('click', () => {
        const colors = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
        const currentColor = body.style.backgroundColor;
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while (newColor === currentColor) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        body.style.backgroundColor = newColor;
    });
});