//for course elements
document.addEventListener("DOMContentLoaded", ()=>{
    const courseContainer = document.getElementById("courses");
    const items = [
        {
            id: "1",
            title: "iOS Development",
            url: "assets/images/course-images/ios-development.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "2",
            title: "React",
            url: "assets/images/course-images/react.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "3",
            title: "Intro to Python",
            url: "assets/images/course-images/intro-to-python.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "4",
            title: "Advanced Python",
            url: "assets/images/course-images/advanced-python.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "5",
            title: "Advanced Cybersecurity Course",
            url: "assets/images/course-images/advanced-cybersecurity-course.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "6",
            title: "ToT - Training of Trainers",
            url: "assets/images/course-images/tot-training-of-trainers.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "7",
            title: "Blockchain",
            url: "assets/images/course-images/blockchain.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "8",
            title: "DevOps",
            url: "assets/images/course-images/devops.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        },
        {
            id: "9",
            title: "Information Security Governance",
            url: "assets/images/course-images/information-seecurity-governance.jpg",
            description: "\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0",
            couresDetails: "&#129122; \u10D9\u10E3\u10E0\u10E1\u10D8\u10E1 \u10D3\u10D4\u10E2\u10D0\u10D4\u10DA\u10D1\u10D8"
        }
    ];
    items.map((item)=>{
        const courseItem = document.createElement("div");
        courseItem.classList.add("grid-item");
        courseItem.innerHTML = `
      <img src=${item.url} />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div>${item.couresDetails}</div>
      
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
// ❯❮  icons
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
answers.forEach((event)=>{
    event.addEventListener("click", ()=>{
        if (event.classList.contains("active")) event.classList.remove("active");
        else event.classList.add("active");
    });
});

//# sourceMappingURL=index.c4775257.js.map
