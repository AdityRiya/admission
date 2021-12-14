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


// let inputedu = document.querySelector(".input-edu");
// let buttonedu = document.querySelector(".button-edu");

// buttonedu.disabled = true; //setting button state to disabled

// inputedu.addEventListener("change", stateHandle);

// function stateHandle() {
//     if (document.querySelector(".input-edu").value === "") {
//         buttonedu.disabled = true; //button remains disabled
//     } else {
//         buttonedu.disabled = false; //button is enabled
//     }
// }

// let inputg = document.querySelector(".input-g");
// let buttonedu = document.querySelector(".button-edu");

// buttonedu.disabled = true; //setting button state to disabled

// inputedu.addEventListener("change", stateHandle);

// function stateHandle() {
//     if (document.querySelector(".input-edu").value === "") {
//         buttonedu.disabled = true; //button remains disabled
//     } else {
//         buttonedu.disabled = false; //button is enabled
//     }
// }


$('.btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

  $('.btnPrevious').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});