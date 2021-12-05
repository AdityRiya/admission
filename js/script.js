var one = document.getElementById("one");
var show = document.getElementById("myDIVone");
var divTwo = document.getElementById("divTwo");
var divthree =document.getElementById("divthree");
var divfour =  document.getElementById("divfour");
function showFunction() {
  if (show.style.display === "none") {
    one.style.display = "none";
    show.style.display = "block";
    divTwo.style.display="none";
    divthree.style.display="none";
    divfour.style.display="none";
  } else {
    one.style.display ="none";
    show.style.display="block";
    divTwo.style.display="none";
    divthree.style.display="none";
    divfour.style.display="none";
  }
}

function showdivtwo(){
  
  if (divTwo.style.display === "none") {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="block";
    divthree.style.display="none";
    divfour.style.display="none";
  } else {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="block";
    divthree.style.display="none";
    divfour.style.display="none";
  }
}



function myFunction() {
    let x = document.getElementById("inputGPA").value;
     
    
    
    let text;
    if (isNaN(x) || x < 2.75 || x > 5.00) {
      text = "Please check your GPA...";
    } else {
    }
    document.getElementById("demo").innerHTML = text;


    
    let y = document.getElementById("inputPY").value;
    
    
    let text2;
    if (isNaN(y) || y < 2016 || y > 2019) {
      text2 = "Please check your Passing Year";
    } else {
    }
    document.getElementById("demo2").innerHTML = text2;

    let a = document.getElementById("inputHSCGPA").value;
     
    
    
    let textHSC;
    if (isNaN(a) || a < 2.75 || a > 5.00) {
      textHSC = "Please check your HSC GPA...";
    } else {
    }
    document.getElementById("demoHSC").innerHTML = textHSC;

    let b = document.getElementById("inputHSCPY").value;
    
    
    let textPY;
    if (isNaN(b) || b < 2019 || b > 2020) {
      textPY = "Please check your Passing Year";
    } else {
    }
    document.getElementById("demoPY").innerHTML = textPY;

    let c = document.getElementById("inputDIPGPA").value;
     
    
    
    let textDIP;
    if (isNaN(c) || c < 2.40 || c > 4.00) {
      textDIP = "Please check your DIPLOMA GPA...";
    } else {
    }
    document.getElementById("demoDIP").innerHTML = textDIP;

    let d = document.getElementById("inputDIPPY").value;
    
    
    let textDIPPY;
    if (isNaN(d) || d < 2019 || d > 2020) {
      textDIPPY= "Please check your Diploma Passing Year";
    } else {
    }
    document.getElementById("demoDIPPY").innerHTML = textDIPPY;


  if (divthree.style.display === "none") {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="none";
    divthree.style.display="block";
    divfour.style.display="none";
  } else {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="none";
    divthree.style.display="block";
    divfour.style.display="none";

  }
}

function showdivfour(){
  
  if (divfour.style.display === "none") {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="none";
    divthree.style.display="none";
    divfour.style.display="block";
  } else {
    one.style.display="none"
    show.style.display = "none";
    divTwo.style.display="none";
    divthree.style.display="none";
    divfour.style.display="block";
    

  }
}