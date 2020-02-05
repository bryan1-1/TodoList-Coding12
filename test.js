$("#toggle").click(function () {
    if ($("div").attr("contenteditable") == "true") {
        $("div").attr("contenteditable", "false");
        $(".disableToggle").attr("disabled", "true");
        $("a").on("click", function(e){e.preventDefault();});
    } else {
        $("div").attr("contenteditable", "true");
        $(".disableToggle").removeAttr("disabled");
        $("a").off("click");
    }
});