let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

let summerThemeImgUrl = "url('https://i.pinimg.com/736x/65/dc/1d/65dc1de0fadad885ae84540cf9f8eb7a.jpg')";
let winterThemeImgUrl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzWeUQ4LFIOAnYm6KIzX6254M_r4JBXCfkg&s.jpg')";
let rainyThemeImgUrl = "url('https://i.pinimg.com/originals/79/e4/ef/79e4efa6e52208b4c4d7100f3637f941.gif')";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputEl.value;

        if (themeUserInputVal === "Winter") {
            bgContainerEl.style.backgroundImage = winterThemeImgUrl;
            headingEl.style.color = "orange";
        } else if (themeUserInputVal === "Summer") {
            bgContainerEl.style.backgroundImage = summerThemeImgUrl;
            headingEl.style.color = "blue";
        } else if (themeUserInputVal === "Rainy") {
            bgContainerEl.style.backgroundImage = rainyThemeImgUrl;
            headingEl.style.color = "#ffffff";

        }
    }
}
themeUserInputEl.addEventListener("keydown", changeTheme);