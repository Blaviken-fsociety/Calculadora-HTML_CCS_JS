const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let operacionActual = ""; // Variable para almacenar la operación actual

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        // Reiniciar la pantalla si se presiona 'C'
        if (boton.id === "c") {
            pantalla.innerHTML = "0"; // Usamos innerHTML para manejar el salto de línea
            operacionActual = ""; // Resetear operación
            return;
        }

        // Borrar el último carácter si se presiona 'Borrar'
        if (boton.id === "borrar") {
            pantalla.textContent = (pantalla.textContent.length === 1 || pantalla.textContent === "Error!")
                ? "0"
                : pantalla.textContent.slice(0, -1);
            operacionActual = pantalla.textContent; // Actualizar la operación actual
            return;
        }

        // Calcular el resultado si se presiona '='
        if (boton.id === "igual") {
            try {
                const resultado = eval(operacionActual); // Calcular el resultado
                pantalla.innerHTML = `<span class="operacion">${operacionActual}</span> <br> ${resultado}`; // Mostrar operación con estilo
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Si se está mostrando "0" o "Error!", se reemplaza con el nuevo valor
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado; // Añadir el botón apretado a la pantalla
        }

        // Actualizar la operación actual
        operacionActual = pantalla.textContent;
    });
});