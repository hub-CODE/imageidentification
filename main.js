Webcam.set({width:300,height:350,image_format:'png',png_quality:100});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap( function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vt4wIhOfd/model.json',modelLoaded);
function modelLoaded(){
    console.log("Modelloaded!");
}

function check(){
  image=document.getElementById("captured_image");
  classifier.classify(image,gotresults);
}

function gotresults(error,results){
  if(error){
      console.error(error);
  }else {
      console.log(results);
      document.getElementById("object_name").innerHTML=results[0].label;
      document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}