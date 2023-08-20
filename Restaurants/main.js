import './style.css'
import "./style.css";



const restaurantReplies = [
  "Our menu offers a delicious variety of dishes. Is there a specific cuisine you're in the mood for?",
  "Do you have any dietary preferences or restrictions that we should be aware of?",
  "Sure thing! Our specials today include [Special Dish] and [Special Drink].",
  "Would you like to make a reservation for [number of people] at [date and time]?",
  "Our operating hours are [Opening Hours]. We look forward to serving you!",
  "For a taste of our signature dish, try our [Restaurant's Signature Dish]. It's a crowd favorite!",
  "You can place an order for pickup or delivery. Just let us know what you'd like to enjoy!",
  "I see you're interested in our desserts. Our popular options include [Dessert 1] and [Dessert 2].",
  "Join our loyalty program and enjoy exclusive discounts and offers on your visits!",
  "Need directions to our restaurant? We're located at [Address].",
  "Feedback from our guests is important to us. Please let us know about your experience.",
  "We have a kids' menu available with tasty options for our young diners!",
  "Looking to host a special event? Our restaurant offers private dining options. Tell us more about your event!",
  "Explore our wine selection to complement your meal. Our sommelier can help you choose the perfect pairing.",
];

var element = document.getElementById("send");
element.addEventListener("click", sendMessage);

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && output(input);
  inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;
  product =
    restaurantReplies[Math.floor(Math.random() * restaurantReplies.length)];
  addChat(input, product);
}

function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
}
