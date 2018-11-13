function hideShow() {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.opacity === "1") {
        hiddenText.style.opacity = "0";
        setTimeout(function(){
            hiddenText.style.height = "0";
        }, 200);
    } else {
        hiddenText.style.opacity = "1";
        hiddenText.style.height = "auto";
    }
}