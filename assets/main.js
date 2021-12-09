$(document).ready(function() {
	
});

$(window).scroll(function() {

    if ($(this).scrollTop()>-0)
     {
        $('.floater').fadeOut(5);
     }
    else
     {
      $('.floater').fadeIn(5);
     }
 });

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));