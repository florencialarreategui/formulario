const img = document.querySelector('.silueta');
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

const randomColor = (opacity) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function updateShadow() {
    const color1 = randomColor(0.6);
    const color2 = randomColor(0.4);
    const color3 = randomColor(0.2);

    img.style.filter = `
    drop-shadow(0 -10px 10px ${color1})
    drop-shadow(0 -15px 20px ${color2})
    drop-shadow(0 -25px 40px ${color3})
  `;
}