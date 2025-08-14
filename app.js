 // Inicialización del Swiper
    const swiper = new Swiper('.servicios-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },


      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

    // Efecto de aparición para las tarjetas
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Efectos de partículas (logo)
    const canvas = document.getElementById('particulasCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 220;
    canvas.height = 220;

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 60,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.8 + 0.5,
        opacity: Math.random() * 0.4 + 0.3
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    // Efectos de partículas (global)
    const canvasGlobal = document.getElementById('escarchaGlobal');
    const ctxGlobal = canvasGlobal.getContext('2d');
    canvasGlobal.width = window.innerWidth;
    canvasGlobal.height = window.innerHeight;

    const particlesGlobal = [];
    for (let i = 0; i < 80; i++) {
      particlesGlobal.push({
        x: Math.random() * canvasGlobal.width,
        y: Math.random() * canvasGlobal.height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 0.6 + 0.2,
        opacity: Math.random() * 0.4 + 0.2
      });
    }

    function drawGlobal() {
      ctxGlobal.clearRect(0, 0, canvasGlobal.width, canvasGlobal.height);
      particlesGlobal.forEach(p => {
        p.y -= p.speedY;
        if (p.y < -10) {
          p.y = canvasGlobal.height + 10;
          p.x = Math.random() * canvasGlobal.width;
        }
        ctxGlobal.beginPath();
        ctxGlobal.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctxGlobal.fillStyle = `rgba(212,175,55,${p.opacity})`;
        ctxGlobal.fill();
      });
      requestAnimationFrame(drawGlobal);
    }
    drawGlobal();

    window.addEventListener("resize", () => {
      canvasGlobal.width = window.innerWidth;
      canvasGlobal.height = window.innerHeight;
    });