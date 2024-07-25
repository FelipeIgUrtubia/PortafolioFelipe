document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
  
    
      this.classList.add('btn-clicked');
  
    
      setTimeout(() => {
        this.classList.remove('btn-clicked');
      }, 500);
    });
  });