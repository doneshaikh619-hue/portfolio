const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function firstpage(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1 ,
        ease: Expo.easeInOut
    })

    tl.to(".elem", {
        y: '0',
        opacity: 1,
        duration: 1.5 ,
        ease: Expo.easeInOut
        
    })

    tl.from(".elem2", {
        y: '-8',
        opacity: 0,
        duration: 0.9 ,
        ease: Expo.easeInOut
    })
    
}



var curure = document.querySelector("#corure")

function circlemovehoja(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#corure")
       corure.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
    };
circlemovehoja();
firstpage();



document.querySelectorAll(".papadiv").forEach(function(papadiv){
    var rotate = 0;
    var diff = 0;

    papadiv.addEventListener("mousemove",function(dets){
        diff = dets.clientX - rotate;
        rotate = dets.clientX;
        
        var dif = (dets.clientY-150) - papadiv.getBoundingClientRect().top ;

        gsap.to(papadiv.querySelector("img"),{
        opacity:1,
        ease: Power3, 
        top: dif,
        left: (dets.clientX -200), 
        rotate: gsap.utils.clamp( -20,20 ,diff)
        });
    });
});
document.querySelectorAll(".papadiv").forEach(function(papadiv){
    papadiv.addEventListener("mouseleave",function(dets){
        gsap.to(papadiv.querySelector("img"),{
        opacity:0,
        ease: Power3, 
        duration:0.3,

 
        });
    });
});

