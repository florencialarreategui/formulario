const mensaje = localStorage.getItem('mensajePedido');
if (mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}

const volver = () => {
    window.location.href = 'index.html';
}
