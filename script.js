// Изчакаме целият документ да се зареди
document.addEventListener('DOMContentLoaded', function () {
    // Вземаме всички елементи със клас "section"
    const sections = document.querySelectorAll('.section');

    // Функция за проверка дали елементът е в видимата част на прозореца
    function checkVisibility() {
        sections.forEach(function (section) {
            const rect = section.getBoundingClientRect(); // Получаваме координатите на елемента
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('visible'); // Добавяме клас visible, ако е в прозореца
            }
        });
    }

    // Първоначално извикваме checkVisibility при зареждане на страницата
    checkVisibility();

    // Добавяме слушател за скролиране
    window.addEventListener('scroll', checkVisibility);
    
    // Анимация за плавно показване на елементите
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('mouseenter', () => {
            mainContent.style.transition = "transform 0.3s ease-in-out";
            mainContent.style.transform = "scale(1.05)"; // Леко увеличаване
        });
        mainContent.addEventListener('mouseleave', () => {
            mainContent.style.transition = "transform 0.3s ease-in-out";
            mainContent.style.transform = "scale(1)"; // Възстановяване на нормален размер
        });
    }
});
