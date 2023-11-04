document.addEventListener("DOMContentLoaded", function () {
    const peopleCards = document.getElementById("people-cards");

    // Здесь вы можете заменить URL на ваш JSON файл
    const jsonUrl = "../data/cards.json";

    // Отправить GET-запрос для получения JSON данных
    fetch(jsonUrl)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((person) => {
                const card = document.createElement("div");
                card.classList.add("card");

                const name = document.createElement("h3");
                name.textContent = person.name;
                card.appendChild(name);

                const age = document.createElement("p");
                age.textContent = `Возраст: ${person.age}`;
                card.appendChild(age);

                const email = document.createElement("p");
                email.textContent = `Email: ${person.email}`;
                card.appendChild(email);

                peopleCards.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Произошла ошибка при загрузке данных:", error);
        });
});