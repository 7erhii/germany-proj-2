$(document).ready(function () {
  // Загружаем немецкую локализацию
  $.datepicker.setDefaults($.datepicker.regional["de"]);

  // Инициализируем DatePicker с настройками
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0", // для установки диапазона лет
  });

  const input = document.querySelector(".custom-input");
  const genderMenu = document.querySelector(".gender-menu");

  input.addEventListener("click", function () {
    genderMenu.classList.toggle("visible");
  });

  document.querySelectorAll(".gender-option").forEach(function (button) {
    button.addEventListener("click", function () {
      input.value = button.getAttribute("data-gender");
      genderMenu.classList.remove("visible");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function updateNumbers() {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    document.querySelector(".number1").textContent = number1;
    document.querySelector(".number2").textContent = number2;

    return number1 + number2;
  }

  let correctSum = updateNumbers();

  document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const userSum = parseInt(document.querySelector('input[name="number"]').value, 10);

    console.log(userSum === correctSum ? true : false);

    correctSum = updateNumbers();
  })
});
