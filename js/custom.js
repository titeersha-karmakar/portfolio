// toggle navbtn //
$(document).ready(function(){
$(".nav-btn").click(function(){
    $(".main-menu").toggleClass("open");
  });
  $(".nav-btn").click(function(){
    $(".nav-btn").toggleClass("open");
  });
  $(".nav-btn").click(function(){
    $("body").toggleClass("menu-open");
  });
});
// toggle navbtn //

// aos //
$(document).ready(function(){
AOS.init({
  startEvent: 'load',
	duration: 500,
	once: true,
	throttleDelay: 99,
    debounceDelay: 50,
	offset: 20,
    disable: window.innerWidth < 1200,
});
});
// aos //





//pointer animation//
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  const trailCount = 5; 
  const trails = [];

  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    trails.push(trail);
  }

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

    trails.forEach((trail, index) => {
      setTimeout(() => {
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.opacity = 1;

        setTimeout(() => {
          trail.style.opacity = 0;
        }, 400);
      }, index * 50); 
    });
  });

  document.addEventListener('click', () => {
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 80);
  });
});
//pointer animation//

