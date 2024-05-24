var imgs = [
    {img: "pexels-david-bartus-43782-586687.jpg", alt:"david"},
    {img: "pexels-julieaagaard-1374064.jpg", alt:"julie"},
    {img: "pexels-ollivves-1098365.jpg", alt:"olliv"},
    {img: "pexels-souvenirpixels-1486974.jpg", alt:"souven"},
    {img: "pexels-stijn-dijkstra-1306815-2659475.jpg", alt:"stijn"}
]
window.addEventListener("load", function load() {
    var i = Math.floor(Math.random() * imgs.length);
    var imgElement = document.getElementsByClassName("img-nosotros")[0];
    if (imgElement) {
        imgElement.innerHTML = "<img src='assets/nosotros/" + imgs[i].img + "' alt='" + imgs[i].alt + "'>";
    }
}, false);