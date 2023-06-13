$(document).ready(function() {
    var carouselWidth = $('#carousel-container').width();
    var currentSlide = 0;
    var totalSlides = $('.carousel-img').length;
    var slideInterval;
    var audioElements = []; // array que almacena los audios
  
    // audios
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
  
      // detiene audio de la imagen previa
      if (previousSlide !== currentSlide) {
        stopSound(previousSlide);
      }
  
      // audio de la imagen actual
      playSound(currentSlide);
  
      // animacion 
      $('.carousel-img')
        .eq(previousSlide)
        .fadeOut(500, function() {
          $('.carousel-img')
            .eq(currentSlide)
            .fadeIn(500);
        });
    }
  
    function prevSlide() {
      var previousSlide = currentSlide;
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  

      if (previousSlide !== currentSlide) {
        stopSound(previousSlide);
      }
  

      playSound(currentSlide);
  

      $('.carousel-img')
        .eq(previousSlide)
        .fadeOut(500, function() {
          $('.carousel-img')
            .eq(currentSlide)
            .fadeIn(500);
        });
    }
  

    function playSound(slideIndex) {
      var audio = new Audio(soundFilePaths[slideIndex]);
      audio.play();
      audioElements[slideIndex] = audio;
    }
  

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
  