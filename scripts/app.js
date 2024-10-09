// Получаем кнопку, счётчик и место для отображения слов
const tapButton = document.getElementById('tap-button'); // Кнопка, по которой кликаем
const tapCounter = document.getElementById('tap-counter'); // Счётчик нажатий

// Начальное значение счётчика
let counter = 0; // Переменная для хранения количества нажатий

// Обработчик клика по кнопке
tapButton.addEventListener('click', () => {
    // Увеличиваем счётчик нажатий
    counter++; // Увеличиваем счётчик на 1
    tapCounter.textContent = counter; // Обновляем отображение счётчика

    // Получаем случайное слово из массива слов
    const randomWord = words[Math.floor(Math.random() * words.length)]; // Выбираем случайное слово

    // Создаем новый элемент для слова
    const wordElement = document.createElement('div');
    wordElement.textContent = randomWord; // Устанавливаем текст слова
    wordElement.className = 'flying-word'; // Присваиваем класс для стилей

    // Определяем смещение в зависимости от направления
    const direction = Math.floor(Math.random() * 3); // Генерируем случайное направление
    let offsetX = 0; // Горизонтальное смещение
    let offsetY = -50; // Вертикальное смещение (сдвигаем вверх на 50px)

    // Устанавливаем смещение в зависимости от направления
    switch (direction) {
        case 0: // Вверх
            offsetX = 0;  // Никакого горизонтального смещения
            break;
        case 1: // Влево
            offsetX = -30; // Сдвиг влево на 30px
            break;
        case 2: // Вправо
            offsetX = 30;  // Сдвиг вправо на 30px
            break;
    }

    // Устанавливаем стили для нового слова
    wordElement.style.position = 'absolute'; // Позиционирование абсолютное
    wordElement.style.left = '50%'; // Центрируем по горизонтали
    wordElement.style.top = '50%'; // Центрируем по вертикали
    wordElement.style.opacity = '1'; // Делаем слово видимым

    // Добавляем новое слово в body
    document.body.appendChild(wordElement); // Добавляем слово в body

    // Используем тайм-аут для анимации
    setTimeout(() => {
        // Слово вылетает в нужном направлении
        wordElement.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(1.2)`; // Сдвигаем текст в нужном направлении
    }, 100); // Небольшая задержка перед анимацией

    // Убираем слово после анимации
    setTimeout(() => {
        wordElement.style.opacity = '0'; // Скрываем слово
    }, 800); // Задержка перед скрытием слова

    // Удаляем элемент из DOM через 1.6 секунды, чтобы избежать перегрузки
    setTimeout(() => {
        wordElement.remove(); // Удаляем элемент
    }, 1600); // Удаляем элемент через 1.6 секунды
});
