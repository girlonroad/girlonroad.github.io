//function to open four new windows before proceeding to the next page
let funcArr = [
    function() {
        window.open("https://www.youtube.com/watch?v=Yo-lRAdQxFg", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=000,width=600,height=400");
        window.open("corral.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=-200,right=0,width=300,height=200");
        window.open("grey.html", "_blank", "toolbar=no,scrollbars=no,resizable=yes,top=500,left=1200,width=700,height=400");
        window.open("whip.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=-200,left=600,width=400,height=300");
        window.open("part-four.html", "_blank", "toolbar=no,scrollbars=no,resizable=yes,top=-200,left=400,width=200,height=600");
        window.open("https://www.youtube.com/watch?v=_JtAlxRsqG0&ab_channel=1000Riffs", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=200,left=900,width=400,height=300");
        window.open("water.html", "_blank", "toolbar=no,scrollbars=no,resizable=yes,top=100,left=1200,width=300,height=600");
        window.open("circle.html", "_blank", "toolbar=no,scrollbars=no,resizable=yes,top=300,right=0,width=250,height=250");
        window.open("fire.html", "_blank", "toolbar=no,scrollbars=no,resizable=yes,top=500,left=700,width=250,height=600");
    },
    function() {
        window.open("spiral.html", "_self", "");
    }
];

let i = 0;

window.onload = function() {
    let btn = document.getElementsByTagName('a')[0];
    btn.onclick = function() {
        funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
    }
};

const fireSpur = document.getElementById("fire");
const ring = document.getElementById("the-ring");

fireSpur.addEventListener("click", () => {
    ring.style.zIndex = "10";
    ring.style.animation = "5s regFade linear";
    fireSpur.style.animation = "regFadeOut 2s linear";
    setTimeout(() => {
        fireSpur.className = "hidden";
        fireSpur.style.animationPlayState = "pause";
    }, 2000);
});