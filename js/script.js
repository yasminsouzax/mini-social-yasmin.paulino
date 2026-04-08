let likeCount = 0;
let curtido = false; // flag booleana

function curtido() {
  if(curtido == false){
  likeCount++;
  curtido = true;
  document.getElementById("likeCount").innerText = likeCount;
} else{
  likeCount--;
  curtido = false;
  document.getElementById("likeCount").innerText = likeCount;
}
}

document.getElementById("likeBtn").addEventListener("click", curtir);

let deslikeCount = 0;
let deslike = false;

function deslike() {
  if(deslike == false){
  deslikeCount++;
  deslike = true;
  document.getElementById("deslikeCount").innerText = deslikeCount;
} else{
  deslikeCount--;
  deslike = false;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}
}

document.getElementById("deslikeBtn").addEventListener("click", descurtir);