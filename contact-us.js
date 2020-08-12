function check(reason) {
    document.getElementById("respond").placeholder = reason;
}

function append() {
    var x = document.getElementById("or-num");
    x.style.display = "block";
    x.required = true;
}

function notAppend() {
    var x = document.getElementById("or-num");
    x.style.display = "none";
    x.required = false;
    x.value = "";
}

function start() {
  check();
  append();
  notAppend();
}
window.onload = start;
