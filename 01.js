document.addEventListener("DOMContentLoaded", function () {
  const propiedades = document.querySelectorAll("#Nombre_Propiedades div");
  const propiedadesDesc = document.querySelectorAll(".propiedad_desc");

  function ocultarPropiedadesDesc() {
    propiedadesDesc.forEach((desc) => {
      desc.classList.remove("mostrar");
    });
  }

  function manejarClicPropiedad(index) {
    ocultarPropiedadesDesc();
    propiedadesDesc[index].classList.add("mostrar");

    // Verificar si la pantalla es pequeña
    if (window.innerWidth <= 500) {
      const propiedadDesc = propiedadesDesc[index].innerHTML;

      const popupContainer = document.createElement("div");
      popupContainer.classList.add("popup-container");

      const popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
      popupContent.innerHTML = propiedadDesc;

      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "x";
      closeButton.addEventListener("click", function () {
        popupContainer.remove();
      });

      popupContainer.appendChild(closeButton);
      popupContainer.appendChild(popupContent);

      document.body.appendChild(popupContainer);
    }
  }

  propiedades.forEach((propiedad, index) => {
    propiedad.addEventListener("click", function () {
      manejarClicPropiedad(index);
    });
  });
});
