function centerCardOnResize() {
    const slider = document.querySelector(".plans-container--slider");
    const centerCard = document.querySelector(".center-card");
  
    // Calcula la posición de desplazamiento para centrar el card del centro
    const sliderWidth = slider.clientWidth;
    const cardOffset = centerCard.offsetLeft + centerCard.offsetWidth / 2;
    const scrollOffset = cardOffset - sliderWidth / 2;
  
    // Centra el slider en la posición calculada
    slider.scrollLeft = scrollOffset;
  }
  
  // Llama a la función cuando se cargue la página y en cada cambio de tamaño
  window.addEventListener("load", centerCardOnResize);
  window.addEventListener("resize", centerCardOnResize);
  
  
  