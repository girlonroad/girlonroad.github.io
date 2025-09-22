
//Dust Particles Simulation by bionicoz based on
//Basic Particle Animation
//Author: Brandon John-Freso

//intro typing var i and j

var data = [
    {
      AboutDevTypeText: "<span>Welcome to Concrete Cowgirl, a speck of dust in the neoCowgirl universe. A haunt for renegade hardware ruffians and software jillaroos alike.<br> In order to experience the rodeo to its fullest, you must let your guard down. This includes allowing popups on your browser or device for the duration of your stay.<br> <br>Get acquainted with the bountiful controls already at your fingertips - this ecosystem will respond to unbridled mouse clicks and hovers. <br> <br>The trick is knowing when to engage, and when to saddle up and<br> <br>Enjoy The Ride</span><br/>"
}
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 80);
    })();
  };
