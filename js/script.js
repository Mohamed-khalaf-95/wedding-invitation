
(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

// window.onload = function () {
//     document.getElementById("my_audio").play();
// }


let clickedImg = document.querySelector(".click-img");
let clickTxt = document.querySelector(".click-text");
let letfDoor = document.querySelector(".left-door");
let rightDoor= document.querySelector(".right-door");
let heart =document.querySelector(".heart");
let heartImage = document.querySelector(".click-text img");

heart.addEventListener("click", (e) => {
    if (!e.target.classList.contains(".bg-image")) {
        $('.main-content').removeClass('d-none');
        heartImage.classList.add("ballon-active")
        heart.play();
        clickTxt.style.top = "-600px";
        letfDoor.style.width = "48%";
        rightDoor.style.width = "48%";
        document.getElementById("my_audio").play();
        setInterval(function () {
            letfDoor.classList.add("active");
            rightDoor.classList.add("active");
            // letfDoor.style.width = "0";
            // rightDoor.style.width = "0";
            setInterval(function(){
                clickedImg.remove();
            },1000)
            $('.sakura-falling').removeClass('d-none');
        }, 2000)



    }
});
// Set the date we're counting down to
var countDownDate = new Date("Dec 12, 2024 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = `<div class='container d-flex row'>
                                                    <div class='days block col-md-6'>
                                                        ${days}<br>Days
                                                    </div>
                                                    <div class='hours block col-md-6'>
                                                        ${hours}<br>Hours
                                                    </div>
                                                    <div class='minutes block col-md-6'>
                                                    ${minutes}<br>Minutes
                                                    </div>
                                                    <div class='seconds block col-md-6'>
                                                    ${seconds}<br>Seconds
                                                    </div>
                                                </div>`;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 12th Dec, 2024!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Mohamed Khalaf', styles1, styles2);
