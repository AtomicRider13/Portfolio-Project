const tableRowElements = document.getElementsByTagName("tr");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const clickAudioElement = document.getElementById("click-sound");
const popUpDisplay = document.getElementById("project-popup");
const popUpCloseBtn = document.getElementById("project-popup-closeBtn");

Array.from(tableRowElements).forEach((element) => {
    element.addEventListener("click", () => {
        
        clickAudioElement.play();
        const projectName = element.dataset.name;
        console.log(projectName);
        const projectDescription = element.dataset.description;
        if (projectName && projectDescription) {
            popUpDisplay.classList.remove("hidden");
            const popUpTitle = document.getElementById("project-popup-title");
            popUpTitle.innerText = projectName;
            const popUpDescription = document.getElementById("project-popup-description");
            popUpDescription.innerText = projectDescription;
        } else {
            alert("Error: No project information found");
        }
    });
});

popUpCloseBtn.addEventListener("click", () => {
    
    popUpDisplay.classList.add("hidden");
})







