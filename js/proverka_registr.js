'use strict'

var dostup = 0

function oa1() {
  dostup = 1
}

function oa2() {
  if (dostup == 1){
    window.location.href = 'pusto.html';
  }else {
    document.getElementById("dostupOtkaz1").style.display = "block";
    setTimeout(function(){ document.getElementById("dostupOtkaz1").style.display = 'none';},2000);
  }
}
