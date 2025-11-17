// Get elements
const modal = document.getElementById('recordModal');
const openBtn = document.querySelector('button.bg-color-orange');
const closeBtn = modal.querySelector('.modal-close');

// Function to open modal
function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.start-recording').focus(); // focus first button
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    openBtn.focus(); // return focus to trigger button
}

// Open on click
openBtn.addEventListener('click', openModal);

// Open on keyboard Enter (while button focused)
openBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
    }
});

// Close on close button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
