function hideShow() {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.opacity === "1") {
        hiddenText.style.opacity = "0";
        setTimeout(function(){
            hiddenText.style.height = "0";
            document.getElementById('changeText').innerHTML = 'Read More <i class="fa fa-chevron-down" aria-hidden="true"></i>';
        }, 200);
    } else {
        hiddenText.style.opacity = "1";
        hiddenText.style.height = "auto";
        document.getElementById('changeText').innerHTML = 'Hide <i class="fa fa-chevron-up" aria-hidden="true"></i>';
    }
}