// Check for Android
var Android = /(android)/i.test(navigator.userAgent); 

// Check for AR
function CheckForAR() {
    let mv = document.getElementById("model-viewer");
    let posterImg = document.getElementById("poster-image");
    let loadButton = document.getElementById("load-button");
    let arButton = document.getElementById("ar-button");
    // console.log("Is AR available? " + mv.canActivateAR);

    if (mv.canActivateAR) {
        loadButton.classList.add("hide");
        posterImg.classList.add("hide");

        mv.setAttribute("reveal", "auto");
        mv.setAttribute("loading", "eager");

        if (!Android) {
            arButton.classList.remove("hide");
        } else {
            arButton.classList.add("hide");
        }
    } else {
        loadButton.classList.add("d-inline-block");
        loadButton.classList.remove("hide");
        posterImg.classList.remove("hide");

        posterImg.setAttribute("slot", "poster");
        loadButton.setAttribute("slot", "poster");

        mv.setAttribute("reveal", "interaction");
        mv.setAttribute("loading", "lazy");
    }
}
    
window.addEventListener('load', () => {
    CheckForAR();
    let mv = document.getElementById("model-viewer");

    mv.addEventListener('load', () => {
        CheckForAR();
    });
});