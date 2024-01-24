var gallery = document.querySelector(".gallery");
      var images = gallery.querySelectorAll("img");
      var prevBtn = document.querySelector("#prevBtn");
      var nextBtn = document.querySelector("#nextBtn");
      var stopBtn = document.querySelector("#stopBtn");
      var slideshowBtn = document.querySelector("#slideshowBtn");
      var lastimagemsg = document.querySelector("#last-image-warning");
      var firstimagemsg = document.querySelector("#first-image-warning");
      var currentIndex = 0;
      var slideshowInterval;

      function showImage(index) {
        images.forEach((image, i) => {
          if (i === index) {
            image.style.display = "block";
          } else {
            image.style.display = "none";
          }
        });
      }

      function nextImage() {
        if (currentIndex < images.length - 1) {
          currentIndex++;
          lastimagemsg.style.display = "none";
          firstimagemsg.style.display = "none";
        } else {
          lastimagemsg.style.display = "block";
          firstimagemsg.style.display = "none";
        }
        showImage(currentIndex);
      }

      function prevImage() {
        if (currentIndex > 0) {
          currentIndex--;
          lastimagemsg.style.display = "none";
          firstimagemsg.style.display = "none";
        } else {
          firstimagemsg.style.display = "block";
          lastimagemsg.style.display = "none";
        }
        showImage(currentIndex);
      }

      function startSlideshow() {
        slideshowInterval = setInterval(function () {
          nextImage();
        }, 1200);
      }

      function stopSlideshow() {
        clearInterval(slideshowInterval);
      }
      showImage(currentIndex);