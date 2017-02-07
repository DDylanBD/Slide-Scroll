function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
            };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
        };
}


const images = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // console.log(window.scrollY);
  images.forEach(image => {
    const slideImage = (window.scrollY + window.innerHeight) - image.height / 2 ;
    // console.log(slideImage);
    const imagesBottom = image.offsetTop + image.height;
    const isHalfShown = slideImage > image.offsetTop;
    const isNotScroll = window.scrollY < imagesBottom;

    if(isHalfShown && isNotScroll) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }

  })
}
window.addEventListener('scroll',debounce(checkSlide));
