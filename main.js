function start(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        document.getElementById("result_label").innerHTML="detected voice is-"+results[0].label;
        if(results[0].label=="Barking"){
            document.getElementById("alien4").src="download.jpg";
        }
        else if(results[0].label=="Meowing"){
            document.getElementById("alien4").src="cat.jpg";
        }
    }
}