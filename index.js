var readlineSync = require("readline-sync");

var fakeSource = ["whatsapp","facebook","telegram"];


var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName + " Please input your news and source");

function detectNews() {
  var news = readlineSync.question("Input the news: ");
  var source = readlineSync.question("Input the source: ");
  if(source.toUpperCase() === fakeSource[0].toUpperCase() || source.toUpperCase() === fakeSource[1].toUpperCase() || source.toUpperCase() === fakeSource[2].toUpperCase()){
    console.log(userName + " Please Don't believe things on FB and Whatsapp and telegram");
  }else{
    console.log("not from FB, Whatsapp or Telegram"); 
  }
}

detectNews();
