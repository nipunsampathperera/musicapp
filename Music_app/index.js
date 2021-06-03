window.addEventListener('load', () =>{

    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelectorAll('.visual');
    const colors=[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    
    ];

  
    //lets get going withe the sound here
    pads.forEach((pad, index) =>{
       pad.addEventListener("click", function(){
           sounds[index].currentTime=0;
           sounds[index].play();

           createBubbles(index);
       }); 
    });
    
    //creat a function that make bubbles
    const createBubbles= index =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
    };
});
