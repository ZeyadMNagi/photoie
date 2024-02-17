let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let huerotate = document.getElementById("huep-rotate")

let upload = document.getElementById("upload")
let download = document.getElementById("download")
let img = document.getElementById("img")

let reset = document.querySelector('span')
let imgbox = document.querySelector('img-box')

window.onload = function(){
    download.style.display ='none';
    reset.style.display ='none';
    imgbox.style.display ='none';
}
upload.onchange = function(){
    download.style.display ='block';
    reset.style.display ='block';
    imgbox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result;
    }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(   filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
            saturate(${saturate.value}%)
        `
    })
}   )