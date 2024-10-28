let form = document.querySelector("form");
let input = document.querySelector("input");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted"); // Log form submission
    if (input.value.toLowerCase() === "slowpoke") {
        div1.style.display = "none";
        div2.style.display = "flex";
        
setTimeout(() => {
    let video = document.querySelector("#video");
    if (video) {
        video.play();
        console.log("Video is playing");
    } else {
        console.log("Video element not found");
    }
}, 1000);
    } else {
        alert("Please enter the correct name");
    }
});
