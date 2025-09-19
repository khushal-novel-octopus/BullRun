document.addEventListener('DOMContentLoaded', function() {
    const jobHeaders = document.querySelectorAll('.job-header');
    if (jobHeaders.length > 0) {
        jobHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const jobBody = header.nextElementSibling;
                jobBody.classList.toggle('active');
            });
        });
    }
});

const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});