// Cursor Animation

const cursor=document.getElementById("cursor");

window.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX+'px';
    cursor.style.top=e.pageY+'px';
})

// Scrollbar Animation

const scrollbar=document.getElementById("scrollbar__thumb");
const totalHeight=document.body.scrollHeight-window.innerHeight;
window.addEventListener('scroll',()=>{
    const progressHeight=(window.pageYOffset/totalHeight)*100;
    scrollbar.style.top=progressHeight+"%";
})


// Hamburger Animation 

const hamburger=document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    if(hamburger.classList.contains("create__cross")){
        hamburger.classList.remove("create__cross");
    }
    else{
        hamburger.classList.add("create__cross");
    }
})


/*Gsap animation Library*/

// Animation at about section
const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      start:'top top',
      trigger: container,
      pin: true,
      pinSpacing: false,
      scrub: true,
      
    }
  });

  tl.to(container, {
    autoAlpha: 1
  }).to(
    container,
    {
      autoAlpha: 0
    },
    0.5
  );
});

// Animation on opening

// 58-57 animation of navbar
const opener= gsap.utils.toArray(".opener");
opener.forEach((item) => {
  const tl = gsap.timeline();

  tl.from(item, {
    scaleX:0,
    duration:1
  })
});
// 69-72 animation fof navbar texts
const hiders=gsap.utils.toArray(".hider");
hiders.forEach((hider) => {
 gsap.fromTo(hider, {y:'100%',x:0}, {y:'0%',x:0, delay:1,duration: 1,ease:'power1.out'});
});


