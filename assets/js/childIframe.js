(function addFrames() {
    try {
        let h = window.innerHeight - 134;
        document.getElementById("chatBoxMainContainer").style.height = `${h}px`
        window.onresize = function (event) {
            var frameHeight = window.innerHeight - 104 - 48;
            document.getElementById("chatBoxMainContainer").style.height = `${frameHeight}px`
        };
        // document.getElementById('player').style.width = '0px'
        document.querySelector('#chatContainer').insertAdjacentHTML(
            'afterbegin',
            `<div class="mod-head-side-bar-container">
            <div class="overflow-container-sidebar">
                <ul class="sidebar-wrapper">
                    <iframe id='iframe' style="width:100%; height:100%; border: none;"  src="https://aporve.github.io/gskd/index.html"></iframe>
                </ul>
            </div>
            <div class="overflow-container-header">
                <ul class="header-wrapper">
                  <div style="width: 100%; height:100%">
                    <img src="https://cdn.yellowmessenger.com/7EAbPihYqpwv1678692649814.jpg" alt="GSK Image" style="width: 100%; height:100%">
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

    if (parsedEventData.event_code === "attach" && parsedEventData.data) {
        console.log('Attach---')
        let h = window.innerHeight - 134;
        document.getElementById("chatBoxMainContainer").style.height = `${h}px`
    }

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
        // remove_blur()
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
        // document.getElementById("chatBoxMainContainer").style.overflow = "initial";
        // document.getElementById("chatContainer").style.overflow = "initial";
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

    if (parsedEventData.event_code === "orderhistory-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'orderhistory-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "confirmorderon-bot" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'confirmorderon-bot',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
    }

    if (parsedEventData.event_code === "bot-reloaded" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'bot-reloaded',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('refreshed local storage data in childIframe', JSON.parse(data));
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

    if (parsedEventData.event_code === "back-brand-select") {
        // console.log('back-brand-select Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'back-brand-select',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "ordercart-back") {
        // console.log('ordercart-back Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'ordercart-back',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "back-on-orderhistory") {
        // console.log('back-on-orderhistory Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'back-on-orderhistory',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "checkout-add-brands") {
        // console.log('checkout-add-brands Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'checkout-add-brands',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "checkout-to-brand-detailing") {
        // console.log('checkout-to-brand-detailing Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'checkout-to-brand-detailing',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "update-order-data") {
        // console.log('update-order-data Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'update-order-data',
            data: parsedEventData.data
        }), '*');
    }


    if (parsedEventData.event_code === "update-data-on-refresh") {
        // console.log('update-data-on-refresh Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'update-data-on-refresh',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "help") {
        // console.log('help Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'help',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "profile-details") {
        // console.log('profile-details Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'profile-details',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "associated-accounts") {
        // console.log('associated-accounts Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'associated-accounts',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "notification") {
        // console.log('notification Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'notification',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "addaccount-associatedaccounts") {
        // console.log('addaccount-associatedaccounts Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'addaccount-associatedaccounts',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "delete") {
        // console.log('delete Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'delete',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "profile-settings") {
        // console.log('profile-settings Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'profile-settings',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "get-data-from-localstorage") {
        // console.log('get-data-from-localstorage Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'get-data-from-localstorage',
            data: parsedEventData.data
        }), '*');
    }

});