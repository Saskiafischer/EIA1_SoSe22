var sounds = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3", "a.mp3", "c.mp3"];
var active = 0;
window.addEventListener("load", function () {
    function playSample(file) {
        var sound = new Audio("assets/keyboard/" + file);
        sound.play();
    }
    document.querySelector("#a.whitekey").addEventListener("click", function () {
        playSample("a.mp3");
    });
    document.querySelector("#b.whitekey").addEventListener("click", function () {
        playSample("b.mp3");
    });
    document.querySelector("#c.whitekey").addEventListener("click", function () {
        playSample("c.mp3");
    });
    document.querySelector("#d.whitekey").addEventListener("click", function () {
        playSample("d.mp3");
    });
    document.querySelector("#e.whitekey").addEventListener("click", function () {
        playSample("e.mp3");
    });
    document.querySelector("#f.whitekey").addEventListener("click", function () {
        playSample("f.mp3");
    });
    document.querySelector("#g.whitekey").addEventListener("click", function () {
        playSample("g.mp3");
    });
    document.querySelector("#af.blackkey_two").addEventListener("click", function () {
        playSample("af.mp3");
    });
    document.querySelector("#bf.blackkey_two").addEventListener("click", function () {
        playSample("bf.mp3");
    });
    document.querySelector("#df.blackkey_three").addEventListener("click", function () {
        playSample("df.mp3");
    });
    document.querySelector("#ef.blackkey_three").addEventListener("click", function () {
        playSample("ef.mp3");
    });
    document.querySelector("#gf.blackkey_three").addEventListener("click", function () {
        playSample("gf.mp3");
    });
    document.querySelector("#playbutton").addEventListener("click", click);
});
var clicker = 0;
function click() {
    clicker++;
    document.getElementById("xxx").setAttribute("class", "fas fa-stop");
    if (clicker == 1) {
        setInterval(function () {
            var sound = new Audio("assets/Keyboard/" + sounds[active]);
            sound.play();
            active++;
            if (active == 6) {
                active = 0;
            }
        }, 500);
    }
    if (clicker == 2) {
        clicker = 0;
        active = 7;
        document.getElementById("xxx").setAttribute("class", "fas fa-play");
    }
}
//# sourceMappingURL=script.js.map