//audio toggle
const webPageAudio = document.getElementById("webpage_audio"); //get the audio player
const audioOn = document.getElementById("audio-on"); //get the on toggle
const audioOff = document.getElementById("audio-off"); //get the off toggle
var keyControl = document.getElementsByTagName("button"); //get all button elements on the page
const info = document.getElementById("info-toggle");//get the info-toggle button
const popup = document.getElementById("info-popup");//get the popup itself
const x = document.getElementById("x");//get the X to close the popup



function playAudio() { /*this function is called by the audio-on toggle using an onclick event listener*/
  webPageAudio.play(); /*standard function for playing audio*/
  audioOn.style.textDecoration = "underline"; /*adding the underline to the selected audio option so the user can see the audio playstate*/
  audioOff.style.textDecoration = "none"; /*ensuring the underline is no longer on the Off toggl, method repeated below*/
}; 

function pauseAudio() { /*this function is called by the audio-off toggle using an onclick event listener*/
  webPageAudio.pause(); /*standard function for pausing audio*/
  audioOn.style.textDecoration = "none";
  audioOff.style.textDecoration = "underline"; 
}; 

//popup function


//click event listener allows the user to click on the info-toggle button to view the info
info.addEventListener("click", () => {
  popup.className = "";
  popup.style.zIndex = "25"; /*places the popup infront of the toggle buttons */

});
//using the X to clearly signify closing the popup, again through click event listener
x.addEventListener("click", () => {
  popup.className = "hidden";
  popup.style.zIndex = "-10"; /*a safeguard for hiding the popup fully behind other elements*/
});




//this is the script for the header

var letters = [ // make variable, using variable to have the string called in multiple functions below. This method is repeated for each word class, using correpsonding strings
      "a",
      "b", 
      "c",  
      "d", 
      "e", 
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l", 
      "m",  
      "n", 
      "o", 
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v", 
      "w",  
      "q", 
      "y", 
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5", 
      "6",  
      "7", 
      "8", 
      "9",
      "!",
      "@",
      "#",
      "$"
    ];
    
function one() { //function name
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)]; /** gets the string to replace the text (letters), gets the lowest value in the string (Math.floor), 
                                                                                    then selects a random value (Math.random) between the floor and the length of the letter string (* letters.length).
                                                                                    This equation defined as getRandomText*/
    const changeText = () => document.getElementById("one").innerHTML = getRandomText(); /** defined as changeText, this gets the element to apply teeh function to. In this case the "one" id tag.
                                                                                        replaces its content (innerHTML) with a value from the string using the getRandomText function defined above*/
  
    changeText(); /**triggers the changeText function */
    setInterval(changeText, 2.2e3); /**specifies the interval (2.2e3 - e3 means three 0s) between each time the function is called */
};
setTimeout(one, 10e3); /**settimeout applies a timed delay for the function to be called. Placed outside the one() function. You can see i've separated the 
                        time out for each function within the different classes for between 10 and 30 seconds longer than the previous function.
                        This gives a staggered effect, and I've timed them to suit the reading of the poem   - i.e. the function isn't called typically before the user has read that line of the poem */

                        /**i'm not going to give a breakdown of every function as they are repeats of this one which act in the same way. The only difference is the interval at whcih th etext changes, and the time
                         * at which th efunction is intially called, and the string that they pull from. I've grouped th efunctions below their corresponding string.
                         */
function two() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("two").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.6e3); 
};
setTimeout(two, 6e3);

function three() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("three").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4.2e3); 
};
setTimeout(three, 20e3);

function four() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("four").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8e3); 
};
setTimeout(four, 45e3);

function five() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("five").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 1.3e3); 
};
setTimeout(five, 33e3);

function six() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("six").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.7e3); 
};
setTimeout(six, 70e3);

function seven() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("seven").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 2.4e3); 
};
setTimeout(seven, 100e3);

function eight() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("eight").innerHTML = getRandomText();
  
    changeText();
    setInterval(changeText, 9.2e3); 
};
setTimeout(eight, 130e3);

//begin boots functions
var objects = [ 
"boots",
"catapult",
"nails",
"wheels",
"scaffold",
"block",
"chain mail",
"envelope",
"yarn",
"pelt",
"tape",
"gravel",
"slate",
"pile",
"car",
"tail",
"bumper",
"house",
"horse hair",
"boots",
"wax",
"whells",
"drive",
"remnant",
"basket",
"vessel",
"market",
"plastic",
"USB",
"helix"
    ];
    
function tailDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("tail").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.3e3); 
};
setTimeout(tailDecay, 12e3);


function carDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("car").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 3.6e3); 
};
setTimeout(carDecay, 34e3);

function pileDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("pile").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8e3); 
};
setTimeout(pileDecay, 47e3);

function bumperDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("bumper").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4e3); 
};
setTimeout(bumperDecay, 62e3);

function houseDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("house").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.1e3); 
};
setTimeout(houseDecay, 79e3);

function horsehairDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("horsehair").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.8e3); 
};
setTimeout(horsehairDecay, 94e3);

function bootsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("boots").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 11.2e3); 
};
setTimeout(bootsDecay, 112e3);

function waxDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("wax").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8.4e3); 
};
setTimeout(waxDecay, 124e3);

function wheelsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("wheels").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4.7e3); 
};
setTimeout(wheelsDecay, 136e3);

function driveDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("drive").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 11e3); 
};
setTimeout(driveDecay, 141e3);

function hillsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("hills").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5.6e3); 
};
setTimeout(hillsDecay, 159e3);

function dirtDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("dirt").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5.9e3); 
};
setTimeout(dirtDecay, 168e3);

// begin positon word list and functions
var positions = [
    "behind",
    "up",
    "sunken",
    "reverse",
    "beneath",
    "out of sight",
    "out of mind",
    "in",
    "left",
    "falling",
    "stuck",
    "glued"
];
function leftDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("left").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 13.2e3); 
};
setTimeout(leftDecay, 15e3);

function behindDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("behind").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 11.1e3); 
};
setTimeout(behindDecay, 23e3);

function upDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("up").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10.5e3); 
};
setTimeout(upDecay, 36e3);

function stuckDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("stuck").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10.4e3); 
};
setTimeout(stuckDecay, 49e3);

function behindtwoDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("behindtwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 9.7e3); 
};
setTimeout(behindtwoDecay, 79e3);

function inDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("in").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.2e3); 
};
setTimeout(inDecay, 112e3);

function farDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("far").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4.3e3); 
};
setTimeout(farDecay, 137e3);

var descriptions = [
    "fluid",
    "burnt",
    "dug out",
    "covered",
    "small steps",
    "far",
    "ten feet",
    "103 BCE",
    "raw",
    "record",
    "soft",
    "hard",
    "no"
];

function fartwoDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("fartwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 11e3); 
};
setTimeout(fartwoDecay, 17e3);

function tenDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("ten").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10.7e3); 
};
setTimeout(tenDecay, 29e3);

function rawDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("raw").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 9.8e3); 
};
setTimeout(rawDecay, 56e3);

function recordDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("record").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8.4e3); 
};
setTimeout(recordDecay, 77e3);

function softDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("soft").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5.7e3); 
};
setTimeout(softDecay, 94e3);

function hardDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("hard").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(hardDecay, 107e3);

function coveredDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("covered").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.7e3); 
};
setTimeout(coveredDecay, 126e3);

function behindthreeDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("behindthree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.8e3); 
};
setTimeout(behindthreeDecay, 145e3);

function noDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("no").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.9e3); 
};
setTimeout(noDecay, 168e3);

var actions = [
    "swept",
    "roll",
    "fallen",
    "move",
    "drive",
    "be",
    "chase",
    "reach",
    "made",
    "drive",
    "SOS",
    "caving",
    "dug",
    "frozen",
    "call",
    "upgrade",
    "sewn"
];
function beDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("be").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.8e3); 
};
setTimeout(beDecay, 11e3);

function chaseDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("chase").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.9e3); 
};
setTimeout(chaseDecay, 29e3);

function reachDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("reach").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4.2e3); 
};
setTimeout(reachDecay, 37e3);

function madeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("made").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(madeDecay, 49e3);

function drivetwoDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("drivetwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 3.6e3); 
};
setTimeout(drivetwoDecay, 56e3);

function sewnDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("sewn").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5.4e3); 
};
setTimeout(sewnDecay, 64e3);

function drivethreeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("drivethree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 3.2e3); 
};
setTimeout(drivethreeDecay, 71e3);

function sosDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("sos").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.4e3); 
};
setTimeout(sosDecay, 90e3);

function cavingDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("caving").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(cavingDecay, 113e3);

function callDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("call").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.5e3); 
};
setTimeout(callDecay, 121e3);

function upgradeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("upgrade").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.1e3); 
};
setTimeout(upgradeDecay, 145e3);

var persons = [
    "I",
    "You",
    "They",
    "We",
    "Us"
]
function ioneDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ione").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ioneDecay, 50e3);

function itwoDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("itwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(itwoDecay, 73e3);

function ithreeDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ithree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ithreeDecay, 94e3);


function ifourDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ifour").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ifourDecay, 116e3);


function ifiveDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ifive").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ifiveDecay, 134e3);


function isixDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("isix").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(isixDecay, 156e3);

function itwoDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("itwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(itwoDecay, 170e3);