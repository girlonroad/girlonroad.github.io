var data = [
  {
  windowType: "<span>Out her window the Cowgirl <br>has a view of the yellow skies<br>and concrete cliffs, rewilded <br>scapes and the <br>uncontrollable floating <br>cloud of fresh min[e]d <br>data</span><br/>"
  }
  ];
  
  var allElements = document.getElementsByClassName("float");
  for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;
  
  // type code
  var c = 0, isTag, text;
  (function type() {
  text = devTypeText.slice(0, ++c);
  if (text === devTypeText) return;
  element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
  var char = text.slice(-1);
  if (char === "<") isTag = true;
  if (char === ">") isTag = false;
  if (isTag) return type();
  setTimeout(type, 100);
  })();
  };

//stair case poem begins here
(() => {
    const texts = [
      ".",
      "whispers", 
      "swell",  
      "saved", 
      "torn", 
      "corners",
      "joined",
      "cowgirl",
      "into",
      "faces",
    ];
    
    const getRandomText = () => texts[Math.floor(Math.random() * texts.length)];
    const changeText = () => document.getElementById("text-whispers").innerHTML = getRandomText();
  
    changeText(); // call once while loading of the page
    setInterval(changeText, 3.3e3); // Change text for every 4 seconds
  })();
//next step 
  (() => {
    const textsTwo = [
      "pockets", 
      "'",
      "breadboards", 
      "cowgirl",
      "torn", 
      "eroded",
      "knuckles",
      "shielded",
      "socket"
    ];
    
    const getRandomText = () => textsTwo[Math.floor(Math.random() * textsTwo.length)];
    const changeText = () => document.getElementById("text-pockets").innerHTML = getRandomText();
  
    changeText(); // call once while loading of the page
    setInterval(changeText, 1.8e3); // Change text for every 4 seconds
  })();
//next step 
  (() => {
    const textsThree = [
     "draft",
      "limerick", 
      "spoken", 
      "spade", 
      "plug",
      "cowgirl",
      "mirrors",
      "shielded",
      "socket"
    ];
    
    const getRandomText = () => textsThree[Math.floor(Math.random() * textsThree.length)];
    const changeText = () => document.getElementById("text-draft").innerHTML = getRandomText();
  
    changeText(); // call once while loading of the page
    setInterval(changeText, 4.1e3); // Change text for every 4 seconds
  })();
//next step 
  (() => {
    const textsFour = [
     "smoke",
      "blood", 
      "sill", 
      "ash", 
      "wild",
      "skyline",
      "diffused",
      "socket",
      "cowgirl"
    ];
    
    const getRandomText = () => textsFour[Math.floor(Math.random() * textsFour.length)];
    const changeText = () => document.getElementById("text-smoke").innerHTML = getRandomText();
  
    changeText(); // call once while loading of the page
    setInterval(changeText, 2.6e3); // Change text for every 4 seconds
  })();
//next step 
  (() => {
    const textsFive = [
     "stop",
      "ghost", 
      "brim", 
      "tred", 
      "pads",
      "press",
      "motley",
      "film",
      "cowgirl",
      "@"
    ];
    
    const getRandomText = () => textsFive[Math.floor(Math.random() * textsFive.length)];
    const changeText = () => document.getElementById("text-stop").innerHTML = getRandomText();
  
    changeText(); // call once while loading of the page
    setInterval(changeText, 2.1e3); // Change text for every 4 seconds
  })();
//transition to move into the laces
const pageTurn = document.getElementById("text-stop");
const fillPage = document.getElementById("fill-wrap");
const blackEnter = document.getElementById("black-wrapper");
const page = document.getElementById("jungle");
const black = document.getElementById("black");
const cowgirlCall = document.getElementById("cowgirl-call");
const oneCowgirl = document.getElementById("one-cowgirl");
const windowsWrap = document.getElementById("windows-wrap");
const moonLight = document.getElementById("moon-light");


pageTurn.addEventListener("click", () => {
    page.style.animation = "4s jungleturner linear";
    fillPage.style.animation = "4s lacesturner linear";
    windowsWrap.className = "hidden";
    moonLight.className = "hidden";
    setTimeout(function() {
      blackEnter.style.animation = "4s lacesturner linear";
      blackEnter.style.zIndex = "30";
      fillPage.className = "hidden";
      page.style.left = "-110%";
      black.className = "";
      black.style.zIndex = "35";
    }, 4000); 
});

black.addEventListener("click", () => {
  cowgirlCall.className = "";
  cowgirlCall.style.animation = "3s regFade linear";
  cowgirlCall.style.zIndex = "40";
  oneCowgirl.className = "";
});

const twoCowgirl = document.getElementById("two-cowgirls");
const threeCowgirl = document.getElementById("three-cowgirls");
const fourCowgirl = document.getElementById("four-cowgirls");
const fiveCowgirl = document.getElementById("five-cowgirls");
const eightOne = document.getElementById("eight-one");
const eightTwo = document.getElementById("eight-two");
const eightThree = document.getElementById("eight-three");
const eightFour = document.getElementById("eight-four");
const eightFive = document.getElementById("eight-five");
const irlFall = document.getElementById("irl-fall");
const spurWrap = document.getElementById("spur-wrap");
const spur = document.getElementById("spur");


oneCowgirl.addEventListener("click", () => {
    cowgirlCall.style.overflowY = "scroll";
    oneCowgirl.style.textDecoration = "none";
    oneCowgirl.style.animation = "3s cowgirlUp linear";
    cowgirlCall.style.animation = "2s backgroundFade linear";
    black.className = "hidden";
    setTimeout(() => {
      oneCowgirl.className = "hidden";
      twoCowgirl.className = "";
      twoCowgirl.style.animation = "2.8s cowgirlUp linear";
      cowgirlCall.style.backgroundColor = "black";
    }, 2999);
    setTimeout(() => {
      twoCowgirl.className = "hidden";
      threeCowgirl.className = "";
      threeCowgirl.style.animation = "2.5s cowgirlUp linear";
    }, 5790);
    setTimeout(() => {
      threeCowgirl.className = "hidden";
      fourCowgirl.className = "";
      fourCowgirl.style.animation = "2.3s cowgirlUp linear";
    }, 8297);
    setTimeout(() => {
      fourCowgirl.className = "hidden";
      fiveCowgirl.className = "";
      fiveCowgirl.style.animation = "2.3s cowgirlUp linear";
    }, 10596);
    setTimeout(() => {
      fiveCowgirl.className = "hidden";
    }, 12895);
    /**setTimeout(() => {
      eightOne.className = "";
    }, 10500);
    setTimeout(() => {
      eightTwo.className = "";
    }, 10700);
    setTimeout(() => {
      eightThree.className = "";
    }, 10900);
    setTimeout(() => {
      eightFour.className = "";
    }, 11100);
    setTimeout(() => {
      eightFive.className = "";
    }, 11300);
    setTimeout(() => {
      irlFall.style.animation = "3s falling linear";
    }, 14000);
    setTimeout(() => {
      irlFall.className = "hidden";
    }, 15500);*/
    setTimeout(() => {
      spurWrap.className = "";
      spurWrap.style.zIndex = "50";
      spurWrap.style.animation = "8s regFade linear";
    }, 11200);
});



