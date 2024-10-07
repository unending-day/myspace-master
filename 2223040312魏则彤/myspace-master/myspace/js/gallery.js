function openviewbox(e){
    var img =document.getElementById(e).src;
    document.getElementById("0_2").src=img;
    document.getElementById("gallery-big-box").style.display = 'block';
}
function closeviewbox() {
    document.getElementById("gallery-big-box").style.display ='none';
}