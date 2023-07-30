let tl1 = gsap.timeline();
tl1
  .to(".cloud1", {
    scale: 1.5,
    opacity: 0,
    xPercent: 200,
  })
  .to(
    ".cloud2",
    {
      scale: 2,
      opacity: 0,
      xPercent: -100,
    },
    "<"
  )
  .to(".sun", {
    scale: 1.2,
    opacity: 0.5,
    xPercent: -600,
    yPercent: 300,
  });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".section1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  //   markers: true,
  pin: true,
  end: "+=5000",
});

let tl2 = gsap.timeline();
tl2.from(".sectiond2 div", {
  ScrollTrigger: {
    animation: tl2,
    trigger: ".section2",
    start: "top top",
    end: "bottom 100%",
    end: "+=3000",
    scrub: 2,
    pin: true,
    markers: true,
  },
  rotate: 720,
  opacity: 0,
  scale: 0,
});
