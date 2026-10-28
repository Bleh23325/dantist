document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const btnPrev = document.querySelector('.services__nav--prev');
  const btnNext = document.querySelector('.services__nav--next');
  const scrollStep = 408; 

  if (btnPrev && btnNext && carousel) {
    btnPrev.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
  }

  const phoneInput = document.getElementById('phone-input');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let input = e.target.value.replace(/\D/g, ''); 
      
      if (input.startsWith('7') || input.startsWith('8')) {
        input = input.substring(1);
      }
      
      let formatted = '';
      if (input.length > 0) {
        formatted += '+7 (';
        if (input.length > 3) {
          formatted += input.substring(0, 3) + ') ' + input.substring(3);
        } else {
          formatted += input;
        }
      }
      
      if (input.length > 6) {
        formatted = formatted.substring(0, 13) + '-' + formatted.substring(13);
      }
      if (input.length > 8) {
        formatted = formatted.substring(0, 16) + '-' + formatted.substring(16);
      }

      e.target.value = formatted;
    });

    // Обработка удаления (backspace), чтобы курсор не застревал
    phoneInput.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace' && (e.target.value === '+7 (' || e.target.value === '+7')) {
        e.target.value = '';
      }
    });
  }
});