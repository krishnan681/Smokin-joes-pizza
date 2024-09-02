const slider = document.querySelector('.slider');
const left = document.querySelector('.left');

const lt = new TimelineMax();


lt.fromTo(
  left, //class name
  1, //secconds
  { height: "0%" }, //animation starting + Y
  { height: "80%", ease: Power2.easeInOut } //animation ending + Y
)

.fromTo(
  slider,
  1.2,
  {x: "-100%"},
  {x: "0%" , ease: Power2.easeInout}, "-=0.5"
);



function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  
  }
  
  init()
  
  var tl = gsap.timeline({
    // duration:1,
    scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top 20%",
      end:"top 0%",
      scrub:2
    }
  })
  
  
  tl.to(".page1 img ",{
    x:-100,
    
  },"anim")
  
  
  tl.to(".page1 h1 ",{
    x:100,
    
  },"anim")
  
  
  tl.to(".page1 p",{
    x:100,
    
  },"anim")
  
  
  tl.to(".heroright button",{
    x:100,
    
  },"anim")
  
  
  tl.to(".page1 video",{
    width:"90%"
  },"anim")
  


  
  var tl2 = gsap.timeline({
    // duration:1,
    scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -100%",
      end:"top -100%",
      scrub:2
    }
  })

  
  tl2.to(".main",{
    backgroundColor:"#0F0D0D"
    // backgroundColor:"white"
  })



  var tl3 = gsap.timeline({
    // duration:1,
    scrollTrigger:{
      trigger:".text-center img",
      scroller:".main",
      // markers:true,
      start:"top -100%",
      end:"top -0%",
      scrub:2
    }
  })

  
  tl3.to(".main",{
    // backgroundColor:"#0F0D0D"
    backgroundColor:"white"
  })
  




  // var tl3 = gsap.timeline({
  //   // duration:1,
  //   scrollTrigger:{
  //     trigger:".page2 text-center img",
  //     scroller:".main",
  //     markers:true,
  //     start:"top -100%",
  //     end:"top -10%",
  //     scrub:4
  //   }
  // })


  // tl3.to(".main",{
  //   // backgroundColor:"red"
  //   // backgroundColor:"white"
  // })

  
  
  