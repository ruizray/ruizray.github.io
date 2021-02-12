



//Takes any email, phone number, or fax number attached in the contact info of a page and exands it so the whole string can be read if 
//the screen size is larger than 900px. If it is less than 900px, the string is condensed into a link that will automatically 
//begin dialing the number or sending an email if on mobile.
function desktopContactinfo() {
    var list = document.querySelectorAll("#smallLink");

    if ($(window).width() >= 900) {
        for (var i = 0; i < list.length; i++) {
            list[i].setAttribute("style", "color:#6c757d !important;font-weight:500");
            var method = list[i].innerText
            var str = list[i].href;
            str = str.split(":").pop();
            str = method + ": " + str;
            list[i].innerText = str
        }

    }
}

//Gets every element with the "section" class and gets its id. For every id found, a link is created on the left sidebar to 
//quickly navigate to that section.
function populateOnThisPage() {
    var items = document.querySelector("#mainPage").querySelectorAll("h1");

    for (var i = 0; i < items.length; ++i) {
        var id = items[i].getAttribute("id");
        var text = items[i].innerText;

        var button = $(
            "<button type='button' class='btn btn-outline-primary'></button>"
        ).text(text);
        var a = $("<a href= #" + id + "></a>");
        a.append(button);

        $("#thisPage").append(a);
    }
}