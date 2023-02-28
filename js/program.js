
document.getElementById('menunav').onclick = function() {
    console.log ("Estas dando click")
    var desplegar= document.getElementsByClassName('menu-nav');
    for (var i = 0 ; i< desplegar.length; i++) {
        desplegar[i].classList.toggle('desaparecer');
    }
}

window.onload = function() {
    const loader = document.getElementById('puntoscarga');
    setTimeout(function() {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1500);
    }, 3000);
  }

const elementosdesvanece = document.querySelectorAll('.scroll');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
}

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, options);

elementosdesvanece.forEach(element => {
  observer.observe(element);
});

function girarImagen() {
  var imgContainer = document.querySelector(".fotogiro");
  imgContainer.classList.toggle("active");
}
  
