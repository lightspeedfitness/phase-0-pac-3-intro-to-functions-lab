function shout(string) {
  return string.toUpperCase();
  }
  
  function whisper(string) {
  return string.toLowerCase();
  }
  
  function logShout(string) {
  console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
  console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
  console.log("I can't hear you!");
  } else if (string.toUpperCase() === string) {
  console.log("YES, INDEED!");
  } else if (string === "Let's have dinner together!") {
  console.log("I would love to!");
  } else {
  console.log("I can't hear you!");
  }
  }
  
  sayHiToHeadphonedRoommate("Goodbye");