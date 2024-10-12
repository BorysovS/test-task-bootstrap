// Масив кольорів райдуги
const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
];

// Отримання посилання на елементи
const sortableContainer = document.getElementById("sortable-container");
const colorBoxes = document.querySelectorAll(".bg-primary");
const callToActionButton = document.querySelector(".btn.btn-primary.btn-lg");
const heroTitle = document.querySelector(".display-5");
const subTitle = document.querySelector(".fs-4");
//================================================================

// Створення Drag and drop контейнера
Sortable.create(sortableContainer, {
    animation: 150,

    onEnd: function (evt) {
        colorBoxes.forEach(function (colorBox) {
            colorBox.style.setProperty(
                "background-color",
                getRandomHexColor(),
                "important"
            );
        });
    },
});
//================================================================

// Призначення слухача на кнопку по івенту кліку
callToActionButton.addEventListener("click", handleClick);

// Функція генерування рендомного кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// =================================================================

// Функція генерування одного з кольорів райдуги
function getRandomRainbowColor() {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}
// =================================================================

// Асинхронна функція для кліку по кнопці в якій ми змінюємо тайтл та анімовано приховуємо параграф з текстом
async function handleClick() {
    const randomColor = getRandomRainbowColor(); // Вибираємо випадковий колір
    callToActionButton.style.backgroundColor = randomColor;

    const title = await fetchData(); // Чекаємо на завершення fetchData
    heroTitle.textContent = title.fact;

    subTitle.classList.add("hidden");
}
// =================================================================

// Функція запиту до апі за текстом
async function fetchData() {
    try {
        const resp = await fetch("https://catfact.ninja/fact");
        if (!resp.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await resp.json(); // Чекаємо на перетворення у JSON
        return data; // Повертаємо результат
    } catch (err) {
        alert("Oops, there is no country with that name");
    }
}
// =================================================================
