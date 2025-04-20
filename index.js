document.getElementById('pedidoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const articulo = document.getElementById('productos').value;
    const tamaño = document.querySelector('input[name="tamaño"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(cb => cb.value);
    const comentarios = document.getElementById('comentarios').value;

    let mensaje = `¡Gracias, ${nombre}! Has pedido una ${articulo} tamaño ${tamaño}.`;
    if (extras.length > 0) {
        mensaje += ` Extras: ${extras.join(', ')}.`;
    }
    if (comentarios.trim() !== "") {
        mensaje += ` Comentarios: "${comentarios}".`;
    }

    document.getElementById('resultado').textContent = mensaje;
});