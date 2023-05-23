$(document).ready(function() {
    var carouselWidth = $('#carousel-container').width();
    var currentSlide = 0;
    var totalSlides = $('.carousel-img').length;
    var slideInterval;
    var audioElements = []; 
  
    //define sonidos

    //DISCLAIMER: la parte del sonido la hicimos a traves de chatgpt; el resto del codigo (carrousel) lo hicimos por propia cuenta
    var soundFilePaths = [
      './sounds/ballin.mp3',
      './sounds/vineboom.mp3',
      './sounds/god.mp3'
    ];
  
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 3000);
    }
  
    function nextSlide() {
      var previousSlide = currentSlide;
      currentSlide = (currentSlide + 1) % totalSlides;
      var slidePosition = currentSlide * -carouselWidth;
      $('#carousel-images').css('transform', 'translateX(' + slidePosition + 'px)');
  
      // detiene sonido de imagen
      if (previousSlide !== currentSlide) {
        stopSound(previousSlide);
      }
  
      // reproduce sonido de la imagen actual
      playSound(currentSlide);
    }
  
    function prevSlide() {
      var previousSlide = currentSlide;
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      var slidePosition = currentSlide * -carouselWidth;
      $('#carousel-images').css('transform', 'translateX(' + slidePosition + 'px)');
  
      // --
      if (previousSlide !== currentSlide) {
        stopSound(previousSlide);
      }
  
      // --
      playSound(currentSlide);
    }
  
    // --
    function playSound(slideIndex) {
      var audio = new Audio(soundFilePaths[slideIndex]);
      audio.play();
      audioElements[slideIndex] = audio;
    }
  
    // --
    function stopSound(slideIndex) {
      if (audioElements[slideIndex]) {
        audioElements[slideIndex].pause();
        audioElements[slideIndex].currentTime = 0;
      }
    }
  
    $('#prev-btn').click(function() {
      clearInterval(slideInterval);
      prevSlide();
      startSlideInterval();
    });
  
    $('#next-btn').click(function() {
      clearInterval(slideInterval);
      nextSlide();
      startSlideInterval();
    });
  
    startSlideInterval();
  });
  