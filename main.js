Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot() {
    Webcam.snap(function (data_URI) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_URI+'"/>'
    })
}
console.log('ml5 version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uRPXUT1j7/model.json',model_loaded)
function model_loaded() {
    console.log("model is loaded")
}
prediction1=""
prediction2=""
function speak() {
    s1=window.speechSynthesis;
    speak1="the first prediction is"+prediction1
    speak2="the second prediction is"+prediction2
    utter=new SpeechSynthesisUtterance(speak1+speak2)
    s1.speak(utter)
}
function check() {
    img=document.getElementById("capture_image")
    classifier.classify(img,got_result)
}
function got_result(error,result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById("result_emotionName").innerHTML=result[0].label;
        document.getElementById("result_emotionName2").innerHTML=result[1].label;
        prediction1=result[0].label
        prediction2=result[1].label
        speak()
        if (prediction1=="Happy") {
            document.getElementById("updateEmoji").innerHTML="&#128522;"
        }
        if (prediction1=="Sad") {
            document.getElementById("updateEmoji").innerHTML="&#128529;"
        }
        if (prediction1=="Angry") {
            document.getElementById("updateEmoji").innerHTML="&#128545;"
        }
        if (prediction1=="Crying") {
            document.getElementById("updateEmoji").innerHTML="&#128557;"
        }
        if (prediction1=="Wow") {
            document.getElementById("updateEmoji").innerHTML="&#128525;"
        }
        if (prediction2=="Happy") {
            document.getElementById("updateEmoji2").innerHTML="&#128522;"
        }
        if (prediction2=="Sad") {
            document.getElementById("updateEmoji2").innerHTML="&#128529;"
        }
        if (prediction2=="Angry") {
            document.getElementById("updateEmoji2").innerHTML="&#128545;"
        }
        if (prediction2=="Crying") {
            document.getElementById("updateEmoji2").innerHTML="&#128557;"
        }
        if (prediction2=="Wow") {
            document.getElementById("updateEmoji2").innerHTML="&#128525;"
        }
}
}