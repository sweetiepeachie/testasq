// Переключение темы
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Проверяем сохраненную тему
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

// Переключатель темы
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        
        // Анимация перехода
        const demonTitles = document.querySelectorAll('.title-demon, .demon-side h2, .demon-card h3');
        demonTitles.forEach(el => {
            el.style.transform = 'scale(1.05)';
            setTimeout(() => el.style.transform = 'scale(1)', 300);
        });
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        
        // Анимация для ангельских элементов
        const angelTitles = document.querySelectorAll('.title-angel, .angel-side h2, .angel-card h3');
        angelTitles.forEach(el => {
            el.style.transform = 'scale(1.05)';
            setTimeout(() => el.style.transform = 'scale(1)', 300);
        });
    }
});

// Плавный скролл
document.querySelector('.scroll-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#teams').scrollIntoView({
        behavior: 'smooth'
    });
});

// Анимация карточек при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем к карточкам
document.querySelectorAll('.player-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Случайное мерцание статусов
function randomFlicker() {
    const statuses = document.querySelectorAll('.player-status');
    statuses.forEach(status => {
        if (Math.random() > 0.7) {
            status.style.opacity = '0.7';
            setTimeout(() => {
                status.style.opacity = '1';
            }, 200);
        }
    });
}

setInterval(randomFlicker, 3000);

// Эффект параллакса для герой-секции
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Добавляем звуковые эффекты при наведении (опционально)
document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (card.classList.contains('angel-card')) {
            // Можно добавить звук хора или колокольчика
        } else {
            // Можно добавить звук огня или рыка
        }
    });
});