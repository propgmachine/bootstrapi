//============================== Random Dog Generator ================//
//-----SELECTOR QUERIES-----//
const barkButton = document.querySelector("#bark-button");
//-----APIS----------------//

const URL = "https://dog.ceo/api/breeds/image/random";

//-----EVENT LISTENER-----//
getDoggoImage();
barkButton.addEventListener("click", () => {
  getDoggoImage();
});

//-----HELPER FUNCTIONS----//

function getDoggoImage() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      const dogImg = document.querySelector("#rando-doggo");
      dogImg.src = data.message;
    });
}






//============================== Weather App ================//
let tempHolder;
let windHolder;
let descriptionHolder;
//-----SELECTOR QUERIES-----//
const userInput = document.querySelector('[type="text"]');
const weatherBackground = document.querySelector("#weather-api");
const weatherButton = document.querySelector("#weather-button");
//-----APIS----------------//
let weatherURL = "";



//-----EVENT LISTENER-----//
weatherButton.addEventListener("click", () => {
  getsTheWeather();
});

userInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    getsTheWeather();
  }
});



//-----EVENT FUNCTIONS----//
function getsTheWeather() {
  let city = userInput.value;
  const weatherURL = `https://goweather.herokuapp.com/weather/${city}`;
  fetch(weatherURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const temperature = document.querySelector("#temp");
      temperature.innerText = `Temperature:  ${data.temperature}`;
      const windiness = document.querySelector("#wind");
      windiness.innerText = `Wind:  ${data.wind}`;
      const weatherDescription = document.querySelector("#description");
      weatherDescription.innerText = `Weather Description: ${data.description}`;
      tempHolder = data.temperature;
      windHolder = data.wind;
      descriptionHolder = data.description;
      if (descriptionHolder.toLowerCase().includes("cloud")) {
        weatherBackground.classList.replace(
          weatherBackground.classList[1],
          "cloudy"
        );
      }
      if (descriptionHolder.toLowerCase().includes("sun")) {
        weatherBackground.classList.replace(
          weatherBackground.classList[1],
          "sunny"
        );
      }
      if (descriptionHolder.toLowerCase().includes("wind")) {
        weatherBackground.classList.replace(
          weatherBackground.classList[1],
          "windy"
        );
      }
      if (descriptionHolder.toLowerCase().includes("rain")) {
        weatherBackground.classList.replace(
          weatherBackground.classList[1],
          "rainy"
        );
      }
      if (descriptionHolder.toLowerCase().includes("snow")) {
        weatherBackground.classList.replace(
          weatherBackground.classList[1],
          "snowy"
        );
      }
    });
}


//-----HELPER FUNCTIONS----//








//============Meme Generator================//




//-----SELECTOR QUERIES-----//



//-----APIS----------------//



//-----EVENT LISTENER-----//



//-----EVENT FUNCTIONS----//



//-----HELPER FUNCTIONS----//

let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize;

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init () {
    // Initialize variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    // Default/Demo text
    topTextInput.value = bottomTextInput.value = 'Demo\nText';

    // Generate button click listener
    generateBtn.addEventListener('click', function () {
        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
}

init();


























