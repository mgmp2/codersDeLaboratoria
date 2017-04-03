var img = document.getElementsByClassName('coders');
var show = document.getElementById("coders-lab");
window.addEventListener("load", function (){
  for (var i = 0; i < img.length; i++) {
    img[i].classList.add("active");
  }
});

select.onchange = function (){
  if(select.value =="fourthChile"){
    filterCoder("fourthChile");
  } else if(select.value =="fifthLima"){
    filterCoder("fifthLima");
  } else if(select.value =="sixthLima"){
    filterCoder("sixthLima");
  }
}

function filterCoder(clase){
  for (var i = 0; i < img.length; i++) {
    console.log(img[i].getAttribute(clase));
    img[i].classList.remove("active");
    if(img[i].getAttribute("class") == ("coders "+clase)){
      showCoders(img[i].classList.add("active"));
    }
  }
}

function showCoders(etiquetaImg){
  if(etiquetaImg != null && etiquetaImg!=""){
    var cdf = document.createDocumentFragment();
    cdf.appendChild(etiquetaImg);
    show.appendChild(cdf);
  }
}
