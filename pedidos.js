const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const contenedor = document.getElementById("root");
contenedor.innerHTML = `
  <div class="card">
      <h3>${searchParams.get("nombre")} ${searchParams.get("edad")} años</h3>
      <p><strong>Email:</strong> ${searchParams.get("email")}</p>
      <p><strong>Género:</strong> ${searchParams.get("genero")}</p>
      <p><strong>País:</strong> ${searchParams.get("pais")}</p>
      <p><strong>Color favorito:</strong> 
          <span style="color:${searchParams.get("color")}">■</span>
      </p>
      <p><strong>Comentarios:</strong> ${searchParams.get("comentarios") || 'Ninguno'}</p>
      <p><strong>Suscripción:</strong> ${searchParams.get("suscripcion")}</p>
      <p><strong>Fecha de nacimiento:</strong> ${searchParams.get("fecha")}</p>
  </div>
  `;