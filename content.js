(function() {
    'use strict';
    document.addEventListener("click", c => {
        let e = c.target || c.srcElement;
        if (e.id == "b64b" || e.id == "b64p") {
            let x = e.parentNode.parentNode.parentNode.parentNode;
            var y;
            if (x.classList.contains("message-2qnXI6")) {
                y = x.childNodes[0].childNodes;
            } else {
                y = x.parentNode.childNodes[0].childNodes;
            }
            y.forEach(z => {
                if (z.classList.contains("messageContent-2qWWxC")) {
                    var g;
                    if (z.childNodes[0] != null && z.childNodes[0].tagName.toLowerCase() == "pre") {
                        g = z.childNodes[0].childNodes[0].innerHTML;
                    } else if (z.childNodes[0] != null && z.childNodes[0].tagName.toLowerCase() == "code") {
                        g = z.childNodes[0].innerHTML;
                    } else {
                        g = z.innerHTML;
                    }
                    try {
                        copyTextToClipboard(window.atob(g));
                        alert("Decoded string copied to clipboard.");
                    } catch(e) {
                        console.log("Failed to decode, probably not base64");
                    }
                }
            });
        }
    });
    function main() {
        let buttons = document.getElementsByClassName("buttons-cl5qTG");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].childNodes[0].childNodes[0].id != "b64b") {
                var b64b = document.createElement("div");
                b64b.setAttribute("id", "b64b");
                b64b.setAttribute("aria-label", "Base64 Decode");
                b64b.setAttribute("tabindex", "0");
                b64b.setAttribute("role", "button");
                b64b.classList.add("button-1ZiXG9");
                var p = document.createElement("p");
                p.setAttribute("id", "b64p");
                p.innerHTML = "B64";
                b64b.appendChild(p);
                buttons[i].childNodes[0].insertBefore(b64b, buttons[i].childNodes[0].childNodes[0]);
            }
        }
    }
    function copyTextToClipboard(text) {
        var copyFrom = document.createElement("textarea");
        copyFrom.textContent = text;
        document.body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        copyFrom.blur();
        document.body.removeChild(copyFrom);
    }
    setInterval(function(){
        main();
    }, 1000);
})();