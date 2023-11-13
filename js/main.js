(() => {
    const canvas = document.querySelector("#explode-view1");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 44; //how many still frames do we have?
    const images = []; //array to hold all of our images

    //object literal, that has a property of frame to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate our images array
    for(let i=0; i<frameCount; i++) {
        //console.log(i);
        const img = new Image();
        //string I am tryign to create: images/explode_0013.webp
        img.src = `images/explodesound/explodesound_${(i+1).toString().padStart(5, '0')}.jpg`;
        images.push(img);  
    }

    //console.table(images);

    //we are not actually animating a DOM element, but rather an object
    //which contains a frame count, as the user scrolls we increase the
    //value by 1. We tell GreenSock there is a total of 449 frames to cycle
    //though, so it know when to stop. GreenSock scrolling uses decimals,
    //so we use "snap" to give us whole numbers 1 vs. 0.0085
    gsap.to(buds, {
        frame: 43,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view1",
            pin: true, //to stop the trigger
            scrub: 1,
            markers: false,
            start: "center center"
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        console.log(buds.frame);
        console.log(images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame],0,0);
    }

})();




// EXPLODE 2

(() => {
    const canvas = document.querySelector("#explode-view2");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 37; //how many still frames do we have?
    const images = []; //array to hold all of our images

    //object literal, that has a property of frame to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate our images array
    for(let i=0; i<frameCount; i++) {
        //console.log(i);
        const img = new Image();
        //string I am tryign to create: images/explode_0013.webp
        img.src = `images/earbud_comfort_fit/earbud_comfort_fit_${(i+1).toString().padStart(5, '0')}.jpg`;
        images.push(img);  
    }

    //console.table(images);

    //we are not actually animating a DOM element, but rather an object
    //which contains a frame count, as the user scrolls we increase the
    //value by 1. We tell GreenSock there is a total of 449 frames to cycle
    //though, so it know when to stop. GreenSock scrolling uses decimals,
    //so we use "snap" to give us whole numbers 1 vs. 0.0085
    gsap.to(buds, {
        frame: 36,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view2",
            pin: true, //to stop the trigger
            scrub: 1,
            markers: false,
            start: "center center"
        },
        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        console.log(buds.frame);
        console.log(images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame],0,0);
    }

})();




// model viewer area

(() => {
    console.log("IIFE Fired");
  
    //Variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    //Function
    function modelLoaded() {
      //console.log(hotspots);
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function showInfo(e) {
      //console.log(e.currentTarget.slot);
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      //console.log(selected);
      gsap.to(selected, 1, {autoAlpha:1});
    }
  
    function hideInfo(e) {
      //console.log(e.currentTarget.slot);
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      //console.log(selected);
      gsap.to(selected, 1, {autoAlpha:0});
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    })
  
  })();
  

  // video button


  //xray
  (() => {
    //variables
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

    
        function onDown() {
            dragging = true;
            console.log("on Down called");
        }

        function onUp() {
            dragging = false;
            console.log("on Up called");
        }


        function onMove(event) {
            if(dragging===true) {
                let x = event.clientX - imageCon.getBoundingClientRect().left;

                if(x < min) {
                    x = min;
                } else if(x > max) {
                    x = max-4;
                }


                drag.style.left = x + 'px';
                left.style.width = x + 'px';

            }

            
        }


    

    //event listeners
    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp)
    document.body.addEventListener('mousemove', onMove);


  
})();

  