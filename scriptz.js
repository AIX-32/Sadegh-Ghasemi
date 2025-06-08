function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showContact() {
    window.open('https://t.me/', '_blank');
}

function showMore() {
    window.open('more.html', '_blank');
}


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectName = this.querySelector('.project-name').textContent;
        alert(`${projectName}\n\nClick to learn more about this project!`);
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});