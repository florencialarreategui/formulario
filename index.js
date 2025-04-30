document.getElementById('pedidoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const articulo = document.getElementById('productos').value;
    const tamaño = document.querySelector('input[name="tamaño"]:checked').value;
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(cb => cb.value);
    const comentarios = document.getElementById('comentarios').value;
    const cantidad= document.getElementById('cantidad').value;

    let mensaje = `¡Gracias, ${nombre}! Has pedido presupuesto por ${cantidad} ${articulo} tamaño ${tamaño}.`;
    if (extras.length > 0) {
        mensaje += ` con ${extras.join(' y ')}.`;
    }
    if (comentarios.trim() !== "") {
        mensaje += ` Comentarios: "${comentarios}".`;
    }


    localStorage.setItem('mensajePedido', mensaje);
   
    window.location.href = 'pedidos.html';
});

