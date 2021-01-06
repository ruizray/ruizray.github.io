var items = document.querySelector("#mainPage").querySelectorAll(".sectionHead");

    for (var i = 0; i < items.length; ++i) {


        var id = items[i].getAttribute("id");
        var text = items[i].innerText;

        var button = $("<button class='btn btn-primary' type='button'></button>").text(text);
        var a = $("<a href= #" + id + "></a>");
        a.append(button);

        $("#thisPage").append(a);
    }
