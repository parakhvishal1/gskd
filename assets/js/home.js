<<<<<<< HEAD
$(function () {
    $("#bodyContent").load("/views/body.html");
    
    var scriptTag = document.createElement('script');
    scriptTag.src = "/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
=======
$(function () {
    $("#bodyContent").load("/views/body.html");
    
    var scriptTag = document.createElement('script');
    scriptTag.src = "/assets/js/custom.js";
    scriptTag.type = "text/javascript";
    document.getElementById('bodyContent').append(scriptTag);
>>>>>>> cf48714a0e2826edfa2ee859089b70ada8cad65b
});