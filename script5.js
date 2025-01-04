// Get all checkbox elements
const checkboxes = document.querySelectorAll('.task-checkbox');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

// Function to update progress
function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    // Calculate progress percentage
    const progress = Math.round((completedTasks / totalTasks) * 100);

    // Update progress bar and text
    progressText.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;

    // Update task styles
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.task').classList.add('done');
        } else {
            checkbox.closest('.task').classList.remove('done');
        }
    });
}

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});
// Function to show popup
function showPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerText = '🎉 Congrats! You have completed all your tasks! 🎉';

    // Style the popup
    Object.assign(popup.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#76c7c0',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '1000',
    });

    document.body.appendChild(popup);

    // Remove popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Update progress function will call showPopup when all tasks are completed
function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    // Calculate progress percentage
    const progress = Math.round((completedTasks / totalTasks) * 100);

    // Update progress bar and text
    progressText.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;

    // Update task styles
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.task').classList.add('done');
        } else {
            checkbox.closest('.task').classList.remove('done');
        }
    });

    // Show "Congrats!" popup when all tasks are complete
    if (completedTasks === totalTasks) {
        showPopup();
    }
}
