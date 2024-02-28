let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});


function scrollHorizontally(event) {
    // Prevent default behavior to avoid vertical scrolling
    event.preventDefault();
  
    // Get the delta of the mouse wheel event
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
  
    // Adjust the scrollLeft property of the scroll container
    const scrollContainer = event.target;
    scrollContainer.scrollLeft += delta * 40; // Adjust the scroll speed as needed
}