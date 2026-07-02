function loop() {
let range1valor = document.getElementById('inputrange1').value;
let progress1 = document.getElementById('progress1')
progress1.value = range1valor;
requestAnimationFrame(loop);
}
requestAnimationFrame(loop);