(function () {

    var names = ["Soukaina", "John", "Jen", "Jilali", "Ouissal", "Fatiha", "Jane", "Merieme", "Youssef", "Najib","Jim"];
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
