const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            pantalla.textContent = (pantalla.textContent.length === 1 || pantalla.textContent === "Error!")
                ? "0"
                : pantalla.textContent.slice(0, -1);
            return;
        }

        if (boton.id === "igual") {
            pantalla.textContent = (() => {
                try {
                    return eval(pantalla.textContent);
                } catch {
                    return "Error!";
                }
            })();
            return;
        }

        pantalla.textContent = (pantalla.textContent === "0" || pantalla.textContent === "Error!")
            ? botonApretado
            : pantalla.textContent + botonApretado;
    });
});