var speechrecognition = window.webkitspeechrecognition;
var recognition = new speechrecognition();

function start()
{
    document.getElementsById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0] [0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    }
       
    
}

function speak(){

    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speek_data);
    synth.speak(utterThis);
    
    Webcam.attach(camera);
    setTimeout(function()
        {
           take_snapshot();
           save();
        },5000);
    
}

Webcam.set({

    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera = documet.getElementById("camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img  id="selfie_img" src="'+data_uri+'">';
    }
    );
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}

