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

// Used to build cards with links on them for the IT department pages on protecting families and protecting
// businesses. Takes in an object with the header of the card and the URL for an image as the first argument and an array of link objects
// Loops through each link in the link array.

function buildCard(boxInfo, links) {

    var item = $("<div class='card'></div>");
    var itemImage = $("<img style='width:100%;height:265px !important' src=''></img>");
    itemImage.attr("src", boxInfo.imgUrl);
    item.append($("<h1 class='card-header'></h1>").text(boxInfo.title));
    $(".card-columns").append(item);
    item.append(itemImage)

    for (i = 0; i < links.length; i++) {
        var linkUrl = $("<a></a>");
        linkUrl.attr("href", links[i].url);
        var button = $("<button type='button' class='btn btn-outline-primary'></button>").text(links[i].title)
        linkUrl.append(button)
        item.append(linkUrl);
    }
}
//Pulls all the items from the navigation bar from the directory the page is in. Puts all the links into a list and 
//puts them in the quicklinks section. Used mainly for landing pages of departments. Allows for a filter option to prevent certain
//pages from being listed.

function populateListWithNavbar() {
    const filter = ['-0'];
    var ul = document.querySelectorAll("body > div.allContainer > header > div.topbar2 > div.banner > nav > ul > li.current.hasChildren > ul > li.current.hasChildren > ul")[0].getElementsByTagName("li")


    for (var i = 0; i < ul.length; ++i) {
        var link = ul[i].firstElementChild.href;
        var name = ul[i].firstElementChild.lastElementChild.textContent;
        for (const element of filter) {
            if (element === name) {
                break;
            }
            else {
                var button = $("<button type='button' class='btn btn-primary '></button>").text(name);
                var a = $("<a href=" + link + "></a>");
                a.append(button)
                $('#quickLinks').append(a);
                break;
            }
        }
    }

}

//Takes in a list of items created by the CMS. Pulls the title and any link attached to the title and appends it to the quicklinks

function populateListWithItems() {
    var list = document.querySelectorAll("div.box.B_JOB > div > article > h2 >a ")
    for (var i = 0; i < list.length; i++) {

        var link = list[i].href
        var text = list[i].innerText;
        var button = $(
            "<button type='button' class='btn btn-outline-primary'></button>"
        ).text(text);
        var a = $("<a href= " + link + "></a>");
        a.append(button);
        $("#employmentLinks").append(a);
    }

}

function displayOnThisPage(){
    if ($("#content").height() > $(window).height()) {
    document.querySelector("#responsiveLink").setAttribute("style" , "display:contents");
    }
}