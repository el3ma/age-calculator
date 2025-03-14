// Inicializar Flatpickr en el input
flatpickr("#birthday", {
  dateFormat: "d/m/Y", // Formato de fecha
  maxDate: "today", // No permitir fechas futuras
  locale: "es", // Idioma español
  defaultDate: "01/01/2000", // Fecha por defecto
  onChange: function (selectedDates, dateStr, instance) {
    console.log("Fecha seleccionada:", dateStr);
  },
});

// Manejar el envío del formulario
document
  .getElementById("birthdayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedDate = document.getElementById("birthday").value;

    // Usar Luxon para calcular la edad
    const DateTime = luxon.DateTime;
    const birthDate = DateTime.fromFormat(selectedDate, "dd/MM/yyyy"); // Parsear la fecha
    const now = DateTime.now(); // Fecha actual
    const diff = now.diff(birthDate, ["years", "months"]); // Calcular la diferencia en años y meses

    // Mostrar la edad
    document.getElementById("ageResult").innerText = `Tienes ${Math.floor(
      diff.years
    )} años y ${Math.floor(diff.months)} ${
      Math.floor(diff.months) === 1 ? "mes" : "meses"
    } de edad`;
  });
