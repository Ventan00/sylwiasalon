var bureger = document.getElementById("burger");
var navmb = document.getElementById("navmb");
var upline = document.getElementById("line1");
var mid = document.getElementById("line2");
var downline = document.getElementById("line3");
var menuOpen=false;

function reportWindowSize() {
    if(window.innerWidth>714){
        if(menuOpen){
            openMenu();
        }
    }
}

window.onresize = reportWindowSize;

bureger.addEventListener("click",openMenu);
function openMenu(){

    if(!menuOpen){
        upline.animate(
            [
                { transform: 'rotate(45deg) translate(0, 34.54px)' }
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        )
        mid.animate(
            [
                { transform: 'rotate(-45deg) translate(0, 34.54px )'  }
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        downline.animate(
            [
                {   opacity: '0%'}
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        navmb.animate(
            [
                {   transform: 'translateX(0)'}
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        menuOpen=true;
    }else{
        upline.animate(
            [
                { transform: 'rotate(0) translate(0, 20px)' }
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        )
        mid.animate(
            [
                { transform: 'rotate(0) translate(0, 40px)'  }
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        downline.animate(
            [
                {   opacity: '100%'}
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        navmb.animate(
            [
                {   transform: 'translateX(40vw)'}
            ],{
                duration: 400,
                direction: "normal",
                fill: "forwards"
            }
        );
        menuOpen=false;
    }
}