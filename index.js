document.getElementById('pedidoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comida = document.getElementById('comida').value;
    const bebida = document.querySelector('input[name="bebida"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(cb => cb.value);
    const comentarios = document.getElementById('comentarios').value;

    let mensaje = `¡Gracias, ${nombre}! Has pedido ${comida} con ${bebida}.`;
    if (extras.length > 0) {
        mensaje += ` Extras: ${extras.join(', ')}.`;
    }
    if (comentarios.trim() !== "") {
        mensaje += ` Comentarios: "${comentarios}".`;
    }

    document.getElementById('resultado').textContent = mensaje;
});