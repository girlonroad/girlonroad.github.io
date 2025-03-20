const bones = document.getElementById("mxn-bones");
const mxnPoems = document.getElementById("mxn-poems");
const mxnSteps = document.getElementById("mxn-steps");
const nextMoonWrap = document.getElementById("nextMoon-wrap");
const centeredMoon = document.getElementById("centered-moon");
const spiral = document.getElementById("spiral");
const spiralWrap = document.getElementById("spiral-wrap");
const graveWrap = document.getElementById("grave-wrap");
const graveYard = document.getElementById("graveyard");


bones.addEventListener("click", () => {
    graveWrap.className = "";
    graveWrap.style.zIndex = "10";
    graveWrap.style.animation = "5s regFade linear";
    setTimeout(() => {
        spiralWrap.style.animation = "5s regFade linear";
        spiralWrap.className = "";
        spiralWrap.style.zIndex = "15";
    }, 5000);
});

const ssdOne = document.getElementById("ssd-one");
const ssdTwo = document.getElementById("ssd-two");
const ssdThree = document.getElementById("ssd-three");
const ssdFour = document.getElementById("ssd-four");
const ssdFive = document.getElementById("ssd-five");
const ssdSix = document.getElementById("ssd-six");
const ssdSeven = document.getElementById("ssd-seven");
const ssdEight = document.getElementById("ssd-eight");
const ssdNine = document.getElementById("ssd-nine");
const ssdWrap = document.getElementById("ssd-wrap");
const cactusOuter = document.getElementById("cactus-outer");
const driveWrap = document.getElementById("drive-wrap");
const longDrive = document.getElementById("long-drive");
const softDrive = document.getElementById("soft-drive");
const hardDrive = document.getElementById("hard-drive");
const laces = document.getElementById("laces-wrapper");
const hiddenGraves = document.getElementById("hidden-graves");

spiralWrap.addEventListener("click", () => {
    graveYard.style.animation = "40s gradientScroll linear";
    spiralWrap.style.animation = "2s regFadeOut linear";
    setTimeout(() => {
        ssdOne.style.position = "fixed";
        ssdOne.style.top = "46vh";
        ssdOne.style.left = "25vw";
    }, 4000);
    setTimeout(() => {
        spiralWrap.className = "hidden";
        ssdFour.style.position = "fixed";
        ssdFour.style.top = "46vh";
        ssdFour.style.left = "39vw";
    }, 4400);
    setTimeout(() => {
        ssdThree.style.position = "fixed";
        ssdThree.style.top = "30vh";
        ssdThree.style.left = "25vw";
    }, 5500);
    setTimeout(() => {
        ssdEight.style.position = "fixed";
        ssdEight.style.top = "38vh";
        ssdEight.style.left = "43vw";

    }, 5800);
    setTimeout(() => {
        ssdFive.style.position = "fixed";
        ssdFive.style.top = "38vh";
        ssdFive.style.left = "39vw";
    }, 6200);
    setTimeout(() => {
        ssdSeven.style.position = "fixed";
        ssdSeven.style.top = "46vh";
        ssdSeven.style.left = "43vw";
    }, 6800);
    setTimeout(() => {
        ssdTwo.style.position = "fixed";
        ssdTwo.style.top = "38vh";
        ssdTwo.style.left = "25vw";
    }, 7000);
    setTimeout(() => {
        ssdSix.style.position = "fixed";
        ssdSix.style.top = "30vh";
        ssdSix.style.left = "39vw";
    }, 7400);
    setTimeout(() => {
        ssdNine.style.position = "fixed";
        ssdNine.style.top = "30vh";
        ssdNine.style.left = "43vw";
        ssdWrap.style.width = "100vw";
        ssdWrap.style.textAlign = "center";
        longDrive.className = "";
        longDrive.style.animation = "4s regFade linear";
    }, 7800);
    setTimeout(() => {

    }, 8500);
    setTimeout(() => {
        
    }, 9000);

    setTimeout(() => {
        ssdWrap.style.animation = "4s regFadeOut linear";
        driveWrap.style.zIndex = "30";
        
    }, 10500);
    setTimeout(() => {
        ssdWrap.className = "hidden";
        cactusOuter.className = "";
        cactusOuter.style.animation = "7s regFade linear";
        longDrive.style.animation = "4s regFadeOut linear";
    }, 14500);
    setTimeout(() => {
        longDrive.className = "hidden";
    }, 18500);
    setTimeout(() => {

        softDrive.className = "";
        softDrive.style.animation = "4s regFade linear";
    }, 23000);
    setTimeout(() => {
        cactusOuter.style.animation = "2s throwAway linear";
        softDrive.style.animation = "4s regFadeOut linear";
    }, 27000);
    setTimeout(() => {  
        softDrive.className = "hidden";
    }, 31000);
    setTimeout(() => {
        cactusOuter.className = "hidden";
        laces.className = ""; 
        laces.style.zIndex = "20";
        laces.style.animation = "3s regFade linear";
        hardDrive.className = "";
        hardDrive.style.animation = "4s regFade linear";
    }, 33000);
    setTimeout(() => {   
        hardDrive.style.animation = "4s regFadeOut linear"; 
    }, 37000);
    setTimeout(() => {
        graveYard.style.left = "-70000px";
        hardDrive.className = "hidden";
    }, 40000);
    setTimeout(() => {
        hiddenGraves.style.animation = "3s regFadeOut linear";
    }, 54000);
    setTimeout(() => {
        hiddenGraves.className = "hidden";
        hiddenGraves.style.zIndex = "-200";
    }, 57000);
});
