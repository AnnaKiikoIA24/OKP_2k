// Діалог з користувачем
function dialogUser() {
    let user = {
        name: "",
        age: 18
    };

    // Цикл do... while
    do {
        user.name = prompt("Введіть Ваше ім'я", "");
    } while (user.name.trim() === '');

    user.age = prompt(`${user.name}, введіть Ваш вік`, 18);

    if (user.age < 18)
        alert("\tУвага!\nФункція бронювання номерів доступна лише для осіб, що досягли 18 років.");

    return user;
}

// Стрілочна функція даних про розробника
getDeveoper = (lastName, firstName, post = "Junior") => 
    `© Розробник: <b>${lastName} ${firstName}</b> Посада: <b>${post}</b>`;

// Функція порівняння двох рядків
function strCompare(str1, str2) {
    if (!str1 || !str2) 
        alert(`Один з рядків містить значення null. Порівняння не можливе!`);
    else if (str1 > str2) 
        alert(`Більший рядок: '${str1}'`);
    else if (str2 > str1)
        alert(`Більший рядок: '${str2}'`);
    else 
        alert(`Рядки '${str1}' і '${str2}' однакові`);
}

