document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Закрытие меню при клике на пункт меню
    window.closeMenu = function() {
      mobileMenu.classList.remove('active');
    };
  }
  
  // Слайдеры сравнения
  const comparisonSliders = document.querySelectorAll('.comparison-slider');
  
  comparisonSliders.forEach(slider => {
    const beforeContainer = slider.querySelector('.comparison-before-container');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;
    
    // Обработчик начала перетаскивания
    const startDrag = (e) => {
      isDragging = true;
      e.preventDefault();
    };
    
    // Обработчик окончания перетаскивания
    const endDrag = () => {
      isDragging = false;
    };
    
    // Обработчик перемещения
    const drag = (e) => {
      if (!isDragging) return;
      
      let clientX;
      
      // Обработка тачскринов
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      
      // Получаем координаты слайдера
      const rect = slider.getBoundingClientRect();
      
      // Вычисляем положение в процентах
      let position = (clientX - rect.left) / rect.width;
      
      // Ограничиваем положение от 0 до 1
      position = Math.max(0, Math.min(1, position));
      
      // Устанавливаем положение
      const percent = position * 100;
      beforeContainer.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
    };
    
    // Добавляем обработчики событий для мыши
    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', drag);
    
    // Добавляем обработчики событий для тачскринов
    handle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', endDrag);
    window.addEventListener('touchmove', drag);
  });
  
  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Учитываем высоту навбара
          behavior: 'smooth'
        });
        
        // Закрываем мобильное меню
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Форма контактов
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // В реальном проекте здесь будет отправка данных формы
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
      
      // Очищаем форму
      contactForm.reset();
    });
  }
  
  // Анимация при прокрутке
  function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .process-step, .gallery-item, .pricing-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Если элемент в пределах видимой области
      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('animate-in');
      }
    });
  }
  
  // Добавляем класс для CSS-анимации
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    .service-card, .process-step, .gallery-item, .pricing-card, .testimonial-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `, styleSheet.cssRules.length);
  
  // Запускаем анимацию при загрузке и прокрутке
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Фиксированная навигационная панель с изменением фона при прокрутке
  function handleNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(18, 18, 18, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'var(--background-dark)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  }
  
  window.addEventListener('scroll', handleNavbarBackground);
  handleNavbarBackground(); // Инициализация
});