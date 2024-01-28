//for header scrolling
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var header = document.querySelector(".header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
}

//for course elements

document.addEventListener("DOMContentLoaded", () => {
  const courseContainer = document.getElementById("courses");
  const items = [
    {
      id: "1",
      title: "iOS Development",
      url: "assets/images/course-images/ios-development.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "2",
      title: "React",
      url: "assets/images/course-images/react.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "3",
      title: "Intro to Python",
      url: "assets/images/course-images/intro-to-python.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "4",
      title: "Advanced Python",
      url: "assets/images/course-images/advanced-python.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "5",
      title: "Advanced Cybersecurity Course",
      url: "assets/images/course-images/advanced-cybersecurity-course.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "6",
      title: "ToT - Training of Trainers",
      url: "assets/images/course-images/tot-training-of-trainers.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "7",
      title: "Blockchain",
      url: "assets/images/course-images/blockchain.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "8",
      title: "DevOps",
      url: "assets/images/course-images/devops.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },

    {
      id: "9",
      title: "Information Security Governance",
      url: "assets/images/course-images/information-seecurity-governance.jpg",
      description: "რეგისტრაცია დასრულებულია",
      couresDetails: "&#129122; კურსის დეტაელბი",
    },
  ];

  items.map((item) => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("grid-item");
    courseItem.innerHTML = `
      <img src=${item.url} />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <b>${item.couresDetails}</b>
      
    `;

    courseContainer.appendChild(courseItem);
  });
});

//for slider

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slider-item").length;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slideWidth = document.querySelector(".slider-item").clientWidth;
  const newTransformValue = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// setInterval(nextSlide, 5000);
//////////////////////////

//for FAQ
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
