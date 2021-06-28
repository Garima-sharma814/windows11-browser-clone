var windowicon = document.getElementById('window-icon');
var startmenu = document.getElementById('startmenu');
var tasks= document.getElementsByClassName('tasks')[0];


windowicon.addEventListener('click', ()=>{
    if(startmenu.style.bottom === "50px"){
        startmenu.style.bottom = "-550px";
        tasks.style.background = "none";

    }else{
        startmenu.style.bottom = "50px"
        tasks.style.backgroundColor = "rgb(196, 195, 195)";
    }
});
