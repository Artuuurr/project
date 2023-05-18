document.getElementById("editButton").addEventListener("click", function() {
    var nameInput = prompt("Введите новое имя:");
    var contactInput = prompt("Введите новый контактный номер:");
    var emailInput = prompt("Введите новую электронную почту:");

    document.getElementById("clientName").textContent = nameInput;
    document.getElementById("clientContact").textContent = contactInput;
    document.getElementById("clientEmail").textContent = emailInput;
});