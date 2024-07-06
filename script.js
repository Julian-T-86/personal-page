    function colorGenerator() {
        let about = document.getElementById('about');
        let story = document.getElementById('story');
        let form = document.forms['EmailForm'];
    
        let hue = Math.floor(Math.random() * 361);
        let saturation = Math.floor(Math.random() * 101);
        let alpha = Math.random()/2 + 0.5;
    
        about.style.boxShadow = `0px 0px 55px 5px hsla(${hue},${saturation}%,50%,${alpha})`;
        story.style.boxShadow = `0px 0px 35px 15px hsla(${hue},${saturation}%,50%,${alpha})`;
        form.style.boxShadow = `0px 0px 35px 15px hsla(${hue},${saturation}%,50%,${alpha})`;
    }
    window.addEventListener('scroll', colorGenerator);

