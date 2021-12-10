 var main = document.getElementById("main");

var divfour =  document.getElementById("divfour");

function showdivfour(){
  
  if (divfour.style.display === "none") {
   
    main.style.display="none";
    divfour.style.display="block";
  } else {
    main.style.display="none";
    divfour.style.display="block";
    

  }
}
var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};





$(document).ready(function(){
  $('input[type="radio"]').click(function(){
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".box").not(targetBox).hide();
      $(targetBox).show();
  });
});