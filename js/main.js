document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('formMessage');

    if (!email.includes('@')) {
        message.textContent = 'Введите корректный email';
        message.style.color = 'red';
    } else {
        message.textContent = 'Сообщение успешно отправлено';
        message.style.color = 'green';
        this.reset();
    }
});
