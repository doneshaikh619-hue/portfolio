
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .1,
    y: 20,
    duration: 1,
    ease: Expo,
    opacity: 0,
  


})

Shery.textAnimate("#header1 h1" , {

    style: 2,
    y: 10,
    delay: 2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
  });

  gsap.from("#imgplant", {
    y: 20,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1.5,
  });


