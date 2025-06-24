document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
  
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${current * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');
  }

  function nextSlide() {
    console.log("Next clicked");
    current = (current + 1) % slides.length;
    updateSlider();
  }
  function prevSlide() {
    console.log("Prev clicked");
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function currentSlide(index) {
    current = index;
    updateSlider();
  }

  updateSlider();

  let currentPage = 1; // halaman saat ini
  const pages = {
    1: "website.html",
    2: "halberita2.html",
    3: "halberita3.html"
  };

  const totalPages = Object.keys(pages).length;

  function goToPage(page) {
    if (page === 'prev') {
      currentPage = currentPage - 1 < 1 ? totalPages : currentPage - 1;
    } else if (page === 'next') {
      currentPage = currentPage + 1 > totalPages ? 1 : currentPage + 1;
    } else {
      currentPage = page;
    }

    window.location.href = pages[currentPage];
  
  }
