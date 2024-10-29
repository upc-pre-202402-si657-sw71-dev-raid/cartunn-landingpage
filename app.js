document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const labelToggle = document.getElementById("label_toggle");
    const body = document.body;

    // Inicializa el estado inicial (modo claro y toggle desactivado)
    body.classList.remove("dark");
    toggle.checked = false;

    // Evento para cambiar entre modo oscuro y claro
    toggle.addEventListener("change", () => {
        const isDarkMode = toggle.checked;
        body.classList.toggle("dark", isDarkMode);
        labelToggle.innerHTML = isDarkMode 
            ? '<i class="fa-solid fa-moon"></i>' 
            : '<i class="fa-solid fa-sun"></i>';
    });
});