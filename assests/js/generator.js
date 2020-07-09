var genButton = document.querySelector("#generate");
var textPart = document.querySelector("#textpart");
var imagePart = document.querySelector("#imagepart");
var num = 0;
var num1 = 0;
var catImg = document.querySelector("#img");


genButton.addEventListener("click", function() {
    num = random();
    if (num !== num1) {
        var catNum = "assests/images/cat" + num + ".jpg";
        catImg.setAttribute("src", catNum);
    }
    else {
        num = num + 1;
        var catNum = "assests/images/cat" + num + ".jpg";
        catImg.setAttribute("src", catNum);
    }
    num1 = num;
    
});

function random() {
    var ranNum = Math.round(Math.random()*25);
    return ranNum
};