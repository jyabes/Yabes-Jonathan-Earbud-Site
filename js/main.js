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