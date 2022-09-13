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
                            <iframe style="width:100%; height:100%; border: none;"  src="https://ghost-tt.github.io/gsk/index.html"></iframe>
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
    if (parsedEventData.event_code === "welcome" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen-child',
            data: parsedEventData.data
        }), '*');
    }

    if (parsedEventData.event_code === "terms_and_conditions" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen-child',
            data: parsedEventData.data
        }), '*');
    }
});