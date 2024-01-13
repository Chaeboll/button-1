const tambah = document.querySelector("#tambah");
const turun = document.querySelector("#turun");
const reset = document.querySelector("#reset");
const nombor = document.querySelector("#nombor");
let faliu = 0;

tambah.addEventListener("click", bertambah);
turun.addEventListener("click", menurun);
reset.addEventListener("click", mereset);


// ini function paling padu
function bertambah(){
    faliu = faliu + 1;
    nombor.innerHTML = faliu;
}

function menurun(){
    faliu = faliu - 1;
    nombor.innerText = faliu;
}

function mereset(){
    faliu = 0;
    nombor.textContent = faliu;
}


