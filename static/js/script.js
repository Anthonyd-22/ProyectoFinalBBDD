document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom is fully loaded');
    const menuContainer = document.getElementById('menu-container');
    fetch('/show_menu')
    .then(response => response.text())
    .then(html => {
        menuContainer.innerHTML = html;
        console.log('Menu cargado correctamente');
    })
    .catch(error => {
        console.error('Error al cargar el archivo HTML:', error);
    });
});
