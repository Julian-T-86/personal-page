    function colorGenerator() {
        let about = document.getElementById('about');
        let story = document.getElementById('story');
        let form = document.forms['EmailForm'];
        let project = document.getElementsByClassName('project');
    
        let hue = Math.floor(Math.random() * 361);
        let saturation = Math.floor(Math.random() * 101);
        let alpha = Math.random()/2 + 0.5;
    
        about.style.boxShadow = `0px 0px 55px 5px hsla(${hue},${saturation}%,50%,${alpha})`;
        story.style.boxShadow = `0px 0px 35px 15px hsla(${hue},${saturation}%,50%,${alpha})`;
        form.style.boxShadow = `0px 0px 35px 15px hsla(${hue},${saturation}%,50%,${alpha})`;
        for (let i=0; i < project.length; i++) {
            project[i].style.boxShadow = `0px 0px 35px 15px hsla(${hue},${saturation}%,50%,${alpha})`;
        }

        setInterval(colorGenerator, 2500);
    }

    colorGenerator();
    //window.addEventListener('scroll', colorGenerator);

