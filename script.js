let scenes = [
    {
    title:"Hello ji",
    q:"Oyeee, haan tum, sunoo na?...  haan wo valentine shalentine karke wo hai na? uski kuch plaaannning karni thi aur aapka thodi si inputs chaiye tha",
    img:"Akshay-Kumar-Meme-templates-04.jpeg"
    },
    {
    title:"kya boltiii publiccccc sceneeszzzz kya hai?",
    q:"Soch raha tha hum dono saath mein kuch cutu sa kar sakte hai, I was thinking we can dress each other up and do a nice photo shoot saath mein, saath baith ke bollywood quiz khel sakte hai ya we can do a cutu art/painting date, tumhara dil kis taraf jaa raha hai cutie?",
    img:"iss-gopal-ke-batche-ka-kuch-karna-padega.jpg"
    },
    {
    title:"Food ka kya scene?  🍰",
    q:"Theek hai, abhi suno, sabse important part — date ke beech mein agar tumhari tummy se bur bur karke sound aagaya toh kya khaana pasand karoge? mai kuch comfort sa banau easy sa? ya aapko pani puri competition mein participate karna hai?",
    img:"rajesh-khanna-hey-girl-meme.webp"
    },
    {
    title:"Oye shawtyyyy, tera hero hu mai 🌹",
    q:"Also, You get to choose your hero for the day, You can choose any of your favourite actor and I will be that person for you (roleplay happening hehehe)",
    img:"rahul-naam-toh-suna-hoga.jpg"
    }
    ];
    
    let i = 0;
    let responses = [];
    let typingTimeout;
    
    function next(){
        document.getElementById("continueBtn").style.display="none";
        document.getElementById("intro").style.display="none";
        document.getElementById("valentine").style.display="block";
    }
    
    function startStory(){
        document.getElementById("valentine").style.display="none";
        document.getElementById("chat").style.display="block";
        loadScene(0);
    }
    
    function nextQ(){
    
        let ans = document.querySelector("#chat input").value;
        responses.push(ans);
        document.querySelector("#chat input").value="";
    
        i++;
    
        if(i < scenes.length){
            loadScene(i);
        }else{
            submitToGoogle();
        }
    }
    
    function submitToGoogle(){
    
        fetch("https://docs.google.com/forms/d/e/1FAIpQLSe9Ioylp0H9q4actL-fyOslLLcuxGtgrJ3Ya9BJRr9sh_2p4w/formResponse", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:`entry.164605397=${encodeURIComponent(responses[0])}&entry.509547934=${encodeURIComponent(responses[1])}&entry.606481148=${encodeURIComponent(responses[2])}&entry.1349821442=${encodeURIComponent(responses[3])}`
        });
    
        document.getElementById("chat").innerHTML =
        "<h2>Bas itni si help chahiye thi… baaki planning quietly chal rahi hai 😌❤️</h2>";
    }
    
    function loadScene(index){
    
        clearTimeout(typingTimeout);
    
        document.getElementById("sceneTitle").innerText = scenes[index].title;
    
        let img = document.getElementById("sceneImg");
        img.style.opacity = 0;
    
        setTimeout(()=>{
            img.src = scenes[index].img;
            img.style.opacity = 1;
        },200);
    
        showTypingThenText(scenes[index].q, "chatQ", index==0 ? 70 : 45);
    }
    
    function showTypingThenText(text, elementId, speed){
    
        clearTimeout(typingTimeout);
    
        let el = document.getElementById(elementId);
        el.innerHTML = "typing...";
    
        setTimeout(()=>{
            typeWriter(text, elementId, speed);
        },1000);
    }
    
    function typeWriter(text, elementId, speed){
    
        let i = 0;
        let el = document.getElementById(elementId);
    
        el.innerHTML = "";
    
        function typing(){
            if(i < text.length){
                el.innerHTML += text.charAt(i);
                i++;
                typingTimeout = setTimeout(typing, speed);
            }
        }
    
        typing();
    }
    
    document.getElementById("noBtn").addEventListener("mouseover",function(){
        this.style.top = Math.random()*400 + "px";
        this.style.left = Math.random()*400 + "px";
    });

    
