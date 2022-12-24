Webcam.attach("#camera")
Webcam.set({
height: 250,
width: 300,
image_format:"png"
})
function capture(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+datauri+"'>"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/StcRHISca/model.json",modelLoaded);
function modelLoaded(){
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error, results){
    if (error){
        console.error(error); 
    }
    else{
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
}
