$(function () {
    $("#bodyContent").load("/gsk/views/body.html");
    
    var scriptTag = document.createElement('script');
    scriptTag.src = "/gsk/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
});
