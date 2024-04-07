// const bgVideo = document.querySelector("#bgVideo");
// var v = document.getElementById("bgVideo")

// console.log(v.duration)
// v.addEventListener("loadeddata",function(ev){
//   console.log(ev)
//   console.log(v)
//   console.log(v.duration+'s')
//   // document.getElementById("tiempototal").innerHTML = v.duration;		
// },true);

// bgVideo.currentTime = 0;
// var frame_count  = 100,
//     offset_value = 100;

// // console.log(-offset_value * frame_count * 2)

// gsap.to("#bgVideo", {
//     // ease: "steps(" + frame_count + ")",
//     backgroundPosition: -10000 + "px 50%",
//     currentTime: 40,
//     scrollTrigger: {
//       star: 'top top',
//       end: "+=" + (30000),
//       trigger: "#bgVideo",
//       markers: true,
//       scrub: true,
//       pin: true
//     }
// });

gsap.registerPluging(scrollTrigger)
ScrollTrigger.create({
  trigger: "#id",
  start: "top top",
  endTrigger: "#otherID",
  end: "bottom 50%+=100px",
  markers: true,
  // onToggle: self => console.log("toggled, isActive:", self.isActive),
  // onUpdate: self => {
  //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  // }
});

gsap.to('#1', {
  star: 'top top',
  end: "+=" + (30000),
  trigger: "#1",
  markers: true,
  scrub: true,
  pin: true
})
























