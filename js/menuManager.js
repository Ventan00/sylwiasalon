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
var step1 = 0;
var step2 = 0;
var step3 = 0;
var step4 = 0;

var interval1;
var interval2;
var interval3;
var interval4;

window.onresize = reportWindowSize;

bureger.addEventListener("click",openMenu);
function openMenu(){
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
    clearInterval(interval4);
    step1=0;
    step2=0;
    step3=0;
    step4=0;

    interval1 = setInterval(function (){mainrot(menuOpen);},5);
    interval2 = setInterval(function (){secondrot(menuOpen);},5);
    interval3 = setInterval(function (){thirdopacity(menuOpen);},5);
    interval4 = setInterval(function (){displaymenu(menuOpen);},5);
    menuOpen=!menuOpen;
}
function mainrot(direction){
    var temp = !direction ? 45 - step1 : step1;
    upline.style.transform = "rotate("+temp+"deg) translate(0, "+(20+temp*0.3231111)+"px)";
    upline.style.webkitTransform = "rotate("+temp+"deg) translate(0, "+(20+temp*0.3231111)+"px)";
    if((temp===45 && step1 !== 0) || (temp === 0 && step1 !== 0)){
        clearInterval(interval1);
        step1=0;
    }
    step1++;
}
function secondrot(direction){
    var temp = !direction ? 45 - step2 : step2;
    mid.style.transform = "rotate("+(-1*temp)+"deg) translate(0, "+(40+temp*-0.1213333)+"px)";
    mid.style.webkitTransform = "rotate("+(-1*temp)+"deg) translate(0, "+(40+temp*-0.1213333)+"px)";
    if((temp===45 && step2 !== 0) || (temp === 0 && step2 !== 0)){
        clearInterval(interval2);
        step2=0;
    }
    step2++;
}
function thirdopacity(direction){
    var temp = direction ? 50 - step3 : step3;
    downline.style.opacity = 2*temp+"%";
    if((temp===50 && step3 !== 0) || (temp === 0 && step3 !== 0)){
        clearInterval(interval3);
        step3=0;
    }
    step3++;
}
function displaymenu( direction){
    var temp = direction ? 45 - step4 : step4;
    navmb.style.transform = "translateX("+temp+"vw)";
    navmb.style.webkitTransform = "translateX("+temp+"vw)";
    if((temp===45 && step4 !== 0) || (temp === 0 && step4 !== 0)){
        clearInterval(interval4);
        step4=0;
    }
    step4++;
}