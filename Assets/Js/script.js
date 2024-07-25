document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
  
      // Añadir clase para el efecto
      this.classList.add('btn-clicked');
  
      // Elimina la clase después de 500ms para que se pueda volver a aplicar
      setTimeout(() => {
        this.classList.remove('btn-clicked');
      }, 500);
    });
  });