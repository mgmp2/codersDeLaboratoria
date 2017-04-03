var img = document.getElementsByClassName('coders');
var show = document.getElementById("show-coders");
window.addEventListener("load", function (){
  for (var i = 0; i < img.length; i++) {
    img[i].classList.add("active");
  }
});

select.onchange = function (){
  if(select.value =="fourthChile"){
    removeClass("fourthChile");
  } else if(select.value =="fifthLima"){
    removeClass("fifthLima");

  } else if(select.value =="sixthLima"){
    removeClass("sixthLima");

  }
}

function removeClass(clase){
  for (var i = 0; i < img.length; i++) {
    console.log(img[i].getAttribute(clase));
    img[i].classList.remove("active");
    if(img[i].getAttribute("class") == ("coders "+clase)){

      img[i].classList.add("active");
      showCoders(img[i]);
      console.log(img[i]);

    }
  }
}

function showCoders(etiquetaImg){
  if(etiquetaImg != null && etiquetaImg!=""){
    var cdf = document.createDocumentFragment();
    cdf.appendChild(etiquetaImg);
    show.appendChild(cdf);
  }


  //  safePanel( document.getElementById("id-div-share").firstChild, document.getElementById("id-div-share").lastChild.)
}
