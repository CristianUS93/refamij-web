let offsetX = 0;
let offsetY = 0;
let x = 0;
let y = 0;
function zoom(e) {
    var zoomer = e.currentTarget;
    console.log(zoomer);
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
}