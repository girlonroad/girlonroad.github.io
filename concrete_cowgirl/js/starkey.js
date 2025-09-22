const shootingStars = document.getElementById("shooting-stars");
const orb = document.getElementById("orb");
const dirt = document.getElementById("dirt");

orb.addEventListener("click", () => {
    shootingStars.className = "";
    orb.style.width = "130px";
    orb.style.height = "130px";
    orb.style.transition = "6s";
    //dirt.style.transform = "translateX(-10%)";
    dirt.style.fontSize = "12px";
    dirt.style.transition = "6s ease-in";
});

const vest = document.getElementById("vest");
const tread = document.getElementById("tread");
const along = document.getElementById("along");
const down = document.getElementById("down");
const the = document.getElementById("the");
const line = document.getElementById("line");

orb.addEventListener("click", () => {
    vest.className = "";
    vest.style.animation = "6s textIn linear";
    vest.style.zIndex = "15";
});

vest.addEventListener("click", () => {
    tread.className = "";
    tread.style.animation = "6s textIn linear";
    tread.style.zIndex = "15";
    vest.style.transform = "translateX(-240%) translateY(-300%)";
    vest.style.transition = "6s";
    vest.style.textDecoration = "none";
    orb.style.width = "100px";
    orb.style.height = "100px";
    orb.style.transition = "6s";
    dirt.style.fontSize = "10px";
    dirt.style.transition = "6s ease-in";
});
tread.addEventListener("click", () => {
    along.className = "";
    along.style.animation = "6s textIn linear";
    along.style.zIndex = "15";
    tread.style.transform = "translateX(-240%) translateY(-300%)";
    tread.style.transition = "6s";
    tread.style.textDecoration = "none";
    vest.style.transform = "translateX(-340%) translateY(-350%)";
    vest.style.transition = "6s";
    orb.style.width = "70px";
    orb.style.height = "70px";
    orb.style.transition = "6s";
    dirt.style.fontSize = "8px";
    dirt.style.transition = "6s ease-in";
});
along.addEventListener("click", () => {
    down.className = "";
    down.style.animation = "6s textIn linear";
    down.style.zIndex = "15";
    along.style.transform = "translateX(-240%) translateY(-150%)";
    along.style.transition = "6s";
    along.style.textDecoration = "none";
    tread.style.transform = "translateX(-340%) translateY(-300%)";
    tread.style.transition = "6s";
    vest.style.transform = "translateX(-430%) translateY(-480%)";
    vest.style.transition = "6s";
    orb.style.width = "50px";
    orb.style.height = "50px";
    orb.style.transition = "6s";
    dirt.style.fontSize = "6px";
    dirt.style.transition = "6s ease-in";
});

down.addEventListener("click", () => {
    the.className = "";
    the.style.animation = "6s textIn linear";
    the.style.zIndex = "15";
    down.style.transform = "translateX(-240%) translateY(-150%)";
    down.style.transition = "6s";
    down.style.textDecoration = "none";
    along.style.transform = "translateX(-340%) translateY(-300%)";
    along.style.transition = "6s";
    tread.style.transform = "translateX(-430%) translateY(-500%)";
    tread.style.transition = "6s";
    vest.style.transform = "translateX(-500%) translateY(-550%)";
    vest.style.transition = "6s";
    orb.style.width = "20px";
    orb.style.height = "20px";
    orb.style.transition = "6s";
    dirt.style.fontSize = "3px";
    dirt.style.transition = "6s ease-in";
});

the.addEventListener("click", () => {
    line.className = "";
    line.style.animation = "6s textIn linear";
    line.style.zIndex = "15";
    the.style.transform = "translateX(-240%) translateY(-200%)";
    the.style.transition = "6s";
    the.style.textDecoration = "none";
    down.style.transform = "translateX(-330%) translateY(-330%)";
    down.style.transition = "6s";
    along.style.transform = "translateX(-400%) translateY(-380%)";
    along.style.transition = "6s";
    tread.style.transform = "translateX(-430%) translateY(-420%)";
    tread.style.transition = "6s";
    vest.style.transform = "translateX(-450%) translateY(-440%)";
    vest.style.transition = "6s";
    orb.style.width = "5px";
    orb.style.height = "5px";
    orb.style.transition = "6s";
    dirt.style.fontSize = "1px";
    dirt.style.transition = "6s ease-in";
});

const eyes = document.getElementById("eyes");
const eyesOpen = document.getElementById("eyes-open");
const eyesShut = document.getElementById("eyes-shut");

line.addEventListener("click", () => {
    line.style.animation = "2s fadeOut linear";
    the.style.animation = "2s fadeOut linear";
    along.style.animation = "2s fadeOut linear";
    down.style.animation = "2s fadeOut linear";
    tread.style.animation = "2s fadeOut linear";
    vest.style.animation = "2s fadeOut linear";
    orb.style.top = "0";
    orb.style.left = "0";
    orb.style.width = "100vw";
    orb.style.height = "100vh";
    orb.style.transition = "5s";
    orb.style.animation = "none";
    setTimeout(() => {
    line.className = "hidden";
    the.className = "hidden";
    along.className = "hidden";
    down.className = "hidden";
    tread.className = "hidden";
    vest.className = "hidden";
    }, 1998);
    setTimeout(() => {
    eyes.className = "";
    }, 7000);
    setTimeout(() => {
    eyesOpen.className = "";
    eyesShut.className = "hidden";
    }, 7500);
    setTimeout(() => {
    eyesShut.className = "";
    eyesOpen.className = "hidden";
    }, 7750);

});

eyesShut.addEventListener("click", () => {
    eyesOpen.className = "";
    eyesShut.className = "hidden";
});