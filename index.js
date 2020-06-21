const trigger = [
    ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "good day"],
    ["how are you", "how are you doing"],
    ["I would like to know about the corona virus", "help", "covid19", "corona virus"],
    ["what are the symptoms"],
    ["what can i do to prevent corona virus"],
    ["how do i treat corona virus"],
    ["where can i learn more about corona virus", "learn", "where can i learn more about covid19"],
    ["do i need to get tested",],
    ["are you human"]
];

const reply = [
    ["Good day, Welcome to the Corona Virus assistant bot", "Good day, Welcome to the Corona Virus assistant bot", "Good day, Welcome to the Corona Virus assistant bot", "Good day, Welcome to the Corona Virus assistant bot", "Good day, Welcome to the Corona Virus assistant bot", "Good day, Welcome to the Corona Virus assistant bot"],
    ["I am doing okay", "I am doing okay"],
    ["What would you like to know about the virus", "What would you like to know about the virus", "What would you like to know about the virus", "What would you like to know about the virus"],
    ["cough and/or fever with one or more of the following symptoms; Headache, Breathing Difficulty, Running Nose, Abdominal Pain, Sore Throat, Fever/shivering, Body Pain, Sudden Loss of taste and smell, fatigue and tiredness"],
    ["You are advised to stay at home, always wash your hands and avoid touching your face with your hands"],
    ["There is no current cure for the corona-virus. If you do feel symptoms you are to contact the NCDC by simply dialing *258*258# from your mobile device or visit ncdc.gov.ng"],
    ["Visit ncdc.gov.ng for more info about the corona-virus"],
    ["To get tested please dial *258*258# on your mobile device and follow the prompt or visit ncdc.gov.ng for more information."],
    ["I am what I am"]
];

const alternative = [
    "Go on",
    "Anything else"
];

const coronavirus = ["Please stay home, always wash your hands, avoid touching your face with your hands"];
const covid19 = ["Please stay at home, and if you must go out please use a face mask and maintain social distancing"];
const Goodbye = ["Thank you for using the corona virus Bot"];

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });

function output(input) {
    let product;
    let text = input.toLowerCase().trim().replace(/[^\w\s\d]/gi, "");

    if (compare(trigger, reply, text)) {
      product = compare(trigger, reply, text);
    } else if (text.match(/coronavirus/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else if (text.match(/covid19/gi)) {
      product = covid[Math.floor(Math.random() * covid19.length)];
    } else if (text.match(/Goodbye/gi)) {
    product = bye[Math.floor(Math.random() * Goodbye.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    //update DOM
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y <= replyArray.length +1; y++) {
        if (triggerArray[x][y] === string) {
          console.log(x,y)
          console.log(triggerArray[x][y], replyArray[x][y])
          item = replyArray[x][y];
        }
      }
    }
    return item;
}

function addChat(input, product) {
const mainDiv = document.getElementById("main");
let userDiv = document.createElement("div");
userDiv.id = "user";
userDiv.innerHTML = `<img src="images/botImage.png" alt="Me" class="image-design"> <span id="user-response" class="color1">${input}</span>`;

mainDiv.appendChild(userDiv)

let botDiv = document.createElement("div");
botDiv.id = "bot";
botDiv.innerHTML = `<img src="Images/botImage.png" alt="Me" class="image-design"> <span id="bot-response" class="color2">${product}</span>`;

mainDiv.appendChild(botDiv);
speak(product);
}

function speak(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-US";
    u.volume = 1; //0-1 interval
    u.rate = 1;
    u.pitch = 1; //0-2 interval
    synth.speak(u);
}