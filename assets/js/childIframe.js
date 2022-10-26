(function addFrames() {
    try {
        window.onresize = function (event) {
            var frameHeight = window.innerHeight - 104 - 48;
            document.getElementById("chatBoxMainContainer").style.height = `${frameHeight}px`
        };
        document.getElementById('player').style.width = '0px'
        document.querySelector('#chatContainer').insertAdjacentHTML(
            'afterbegin',
            `
                <div class="mod-head-side-bar-container">
                    <div class="overflow-container-sidebar">
                        <ul class="sidebar-wrapper">
                            <iframe style="width:100%; height:100%; border: none;"  src="https://aporve.github.io/gsk/index.html"></iframe>
                        </ul>
                    </div>
                </div>
           `
        );
    }
    catch (e) {
        console.error("failing while trying to insert add frame script", e);
    }
})();

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
        console.log('Event Data---',data);
    }

    if (parsedEventData.event_code === "termsui-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---',data);
    }


    if (parsedEventData.event_code === "userwelcome-screen" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'userwelcome-screen',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---',data);
    }

    if (parsedEventData.event_code === "user-login" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'user-login',                                                // added new event name
            data: parsedEventData.data
        }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---',data);
    }




    // send event to bot
    if(parsedEventData.event_code === "logout") {
        console.log(' logout Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'logout',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "place-new-order") {
        // console.log('place-new-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'place-new-order',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "view-checkout") {
        // console.log('view-checkout Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'view-checkout',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "select-brand") {
        // console.log('select-brand Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'select-brand',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "ordercart-continue") {
        // console.log('ordercart-continue Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'ordercart-continue',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "confirm-order") {
        // console.log('confirm-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'confirm-order',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "cancel-order") {
        // console.log('cancel-order Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'cancel-order',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "confirm-order-total-invoice") {
        // console.log('confirm-order-total-invoice Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'confirm-order-total-invoice',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "cancel-order-total-invoice") {
        // console.log('cancel-order-total-invoice Data in child Iframe~~~>>', parsedEventData.data)
        parent.postMessage(JSON.stringify({
            event_code: 'cancel-order-total-invoice',
            data: parsedEventData.data
        }), '*');
    }

});