const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FOOTBALL",
    price: 1119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "BASKETBALL",
    price: 1149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "VOLLAYBALL",
    price: 1109,
    colors: [
      {
        code: "lightgray",
        img: "img/13.png",
      },
      {
        code: "green",
        img: "img/vollay.png",
      },
    ],
  },
  {
    id: 4,
    title: "FOOTBALL",
    price: 129,
    colors: [
      {
        code: "brown",
        img: "img/1.png",
      },
    ],
  },
  {
    id: 5,
    title: "BATMINTON",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/2.png",
      },
      {
        code: "black",
        img: "img/14.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
const checkoutButton = document.querySelector('.payButton');
const pinInput = document.querySelector('.payInput.sm:last-child'); // Select the last "sm" input for PIN
const paymentForm = document.querySelector('.payment');

checkoutButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const enteredPin = pinInput.value.trim();

  if (enteredPin === '1234') {
    // Checkout successful
    paymentForm.style.display = 'none'; 
    alert('Checkout successful!');
  } else {
    pinInput.classList.add('error'); // Highlight the PIN input with an error class
    alert('Invalid PIN. Please try again.');
  }
});
