(function addFrames() {
    try {
        window.onresize = function (event) {
            var frameHeight = window.innerHeight - 104 - 48;
            document.getElementById("chatBoxMainContainer").style.height = `${frameHeight}px`
            console.error('frameHeight', frameHeight)
        };
        document.getElementById('player').style.width = '0px'
        document.querySelector('#chatContainer').insertAdjacentHTML(
            'afterbegin',
            `<div class="mod-head-side-bar-container">
            <div class="overflow-container-sidebar">
                <ul class="sidebar-wrapper">
                    <iframe id='iframe' style="width:100%; height:100%; border: none;"  src="https://aporve.github.io/gsk/index.html"></iframe>
                </ul>
            </div>
            <div class="overflow-container-header">
                <ul class="header-wrapper">
                  <div style="width: 100%; height:100%">
                    <img src="https://cdn.yellowmessenger.com/0y3moqbykQWK1669200810434.jpg" alt="GSK Image" style="width: 100%; height:100%">
                  </div>
                </ul>
            </div>
            </div> `
        );
    }
    catch (e) {
        console.error("failing while trying to insert add frame script", e);
    }
})();

// <div style="display:flex;align-items:center;">
// <div id="e11" class="icons-box"> 
//     <span class="header-bar-icon-box" title="minimize">-</span>
// </div>
// <div id="e10" style="cursor:pointer;"> 
// <span class="header-bar-icon-box" title="maxamize"><img src="https://cdn.yellowmessenger.com/m65zoVM7Si3s1624952263631.png" style="width: 1.7rem; height: 20px;" /></span>
// </div>
// <div id="e9" class="icons-box"> 
//     <span class="header-bar-icon-box" title="Close">x</span>
// </div>
// </div>
function show_image() {
    console.error('---Blur Image---');
    var img = document.createElement("img");
    img.src = 'https://cdn.yellowmessenger.com/6B5g5HGSB9J91668583171295.jpg';
    img.width = '10000';
    img.height = '10000';
    img.position = 'absolute;'

    // This next line will just add it to the <body> tag
    // document.body.appendChild(img);
    document.getElementById('iframe').appendChild(img);
    var element = document.getElementById("iframe");
    element.classList.add("blur");
}

function remove_blur() {
    var element = document.getElementById("iframe");
    element.classList.remove("blur");
}

window.addEventListener('message', function (eventData) {
    let parsedEventData = JSON.parse(eventData.data);

    if (parsedEventData.event_code === "welcome-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "termsui-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }


    if (parsedEventData.event_code === "userwelcome-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'userwelcome-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "user-login" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'user-login',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "ordercart-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'ordercart-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "load-userwelcome-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'load-userwelcome-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "show-brand-selection" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'show-brand-selection',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "show-brand-detailing" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'show-brand-detailing',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }




    // send event to bot
    if (parsedEventData.event_code === "logout") {
        // show_image()
        console.log(' logout Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'logout',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "place-new-order") {
        // console.log('place-new-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'place-new-order',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "view-checkout") {
        // console.log('view-checkout Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'view-checkout',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "select-brand") {
        // console.log('select-brand Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'select-brand',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "ordercart-continue") {
        // console.log('ordercart-continue Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'ordercart-continue',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "confirm-order") {
        // console.log('confirm-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'confirm-order',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "cancel-order") {
        // console.log('cancel-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'cancel-order',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "confirm-order-total-invoice") {
        // console.log('confirm-order-total-invoice Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'confirm-order-total-invoice',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "cancel-order-total-invoice") {
        // console.log('cancel-order-total-invoice Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'cancel-order-total-invoice',
            data: parsedEventData.data
        }), '*');
    }

});