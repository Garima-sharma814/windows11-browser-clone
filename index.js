var windowicon = document.getElementById('window-icon');
var startmenu = document.getElementById('startmenu');

windowicon.addEventListener('click', ()=>{
    if(startmenu.style.bottom === "50px"){
        startmenu.style.bottom = "-550px"
    }else{
        startmenu.style.bottom = "50px"
    }
});