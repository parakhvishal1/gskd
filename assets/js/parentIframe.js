
(function injectJS() {
    try {
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://aporve.github.io/gskd/assets/js/childIframe.js';
        iFrameHead.appendChild(modularBars);
        injectDynamicCssToParent();
        injectDynamicCssToChild();
    } catch (e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


function injectDynamicCssToChild() {
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3.5rem 0 0 40%; background-image: url("https://cdn.yellowmessenger.com/zlqqXMmsw3z91663746912397.png")}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:40%;list-style:none;height:100%;justify-content:space-between;border:.5px solid #ccc}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 40% - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:3.5rem;border:.5px solid #ccc;border-left:0;}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} }  .send-input { margin-left:40%} #chatDetails { margin-left:40%} .blur{ -webkit-filter: blur(30px);} #chatBoxMain { padding: 0 0 31px 0; } #chatOptions { padding: 0 0 31px 0; }';
    if (modularStyles.styleSheet) {
        modularStyles.styleSheet.cssText = css;
    } else {
        modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);
}

function injectDynamicCssForMobileUI() {
    console.log('In Mobile')
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 4rem 0 0 100%;}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:100%;list-style:none;height:100%;justify-content:space-between;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 3.5rem - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:3rem;border:.5px solid #ccc;border-left:0; margin-left:30%}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} } .send-input { margin-left:100%} #chatDetails { margin-left:100%} ';
    if (modularStyles.styleSheet) {
        modularStyles.styleSheet.cssText = css;
    } else {
        modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);

}

function injectDynamicCssForMobileBot() {
    console.log('In Mobile')
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 4rem 0 0 0; background-image: url("https://cdn.yellowmessenger.com/zlqqXMmsw3z91663746912397.png")}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:0;list-style:none;height:100%;justify-content:space-between;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 4rem - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:3rem;border:.5px solid #ccc;border-left:0; margin-left:30%}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} } .send-input { margin-left:0} #chatDetails { margin-left:0} ';
    if (modularStyles.styleSheet) {
        modularStyles.styleSheet.cssText = css;
    } else {
        modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);

}


function injectDynamicCssToParent() {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';
    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; } }';
    if (parentStyles.styleSheet) {
        parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
        parentStyles.appendChild(document.createTextNode(parentCssStyles));
    }
    parentCssHead.appendChild(parentStyles);
}

// function blur() {
//     var element = document.getElementById("iframe");
//    element.classList.add("blur");
// }

// function disable() {
//     console.error('In disable fn---');
//     document.getElementById("placeNewOrder").disabled = true;
// }



window.addEventListener('message', function (eventData) {
    let parsedData = JSON.parse(eventData.data);

    console.log("parsedData", parsedData)
    
    // if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "get-source") {
    //     document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
    //         event_code: 'get-source',
    //         data: parsedData.data.data
    //     }), '*');
    //     console.error("get-source")
    //     console.log('Event Data-->>',parsedData.data.data);
        
    //     if(parsedData.data.data == 'Mobile') {
    //         console.error('Mobile hai ', parsedData.data.data)
    //         // injectDynamicCssForMobileUI();
    //         // injectDynamicCssForMobileBot()
    //     }else {
    //         console.error('Desktop view', parsedData.data.data)
    //         injectDynamicCssToChild()
    //     }
    //     return;
        
    // }
   

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "welcome-screen") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen',
            data: parsedData.data.data
        }), '*');
        console.log("welcome-screen")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "termsui-screen") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen',
            data: parsedData.data.data
        }), '*');
        console.log("termsui-screen")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "userwelcome-screen") {
        // injectDynamicCssForMobileUI();
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'userwelcome-screen',
            data: parsedData.data.data
        }), '*');
        
        console.log("userwelcome-screen")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }
    
    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "user-login") {
        // injectDynamicCssForMobileUI();
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'user-login',
            data:  parsedData.data.data
        }), '*');
        console.log("user-login")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "ordercart-screen") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'ordercart-screen',
            data:  parsedData.data.data
        }), '*');
        console.log("ordercart-screen")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "load-userwelcome-screen") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'load-userwelcome-screen',
            data:  parsedData.data.data
        }), '*');
        console.log("load-userwelcome-screen")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "show-brand-selection") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'show-brand-selection',
            data:  parsedData.data.data
        }), '*');
        console.log("show-brand-selection")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "show-brand-detailing") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'show-brand-detailing',
            data:  parsedData.data.data
        }), '*');
        console.log("show-brand-detailing")
        console.log('Event Data-->>',parsedData.data.data)
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "bot-reloaded") {
        console.log("bot-reloaded");
        let data = localStorage.getItem("updated-data")
        console.log('refreshed local storage data in parentIframe', data);
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'bot-reloaded',
            data:  data
        }), '*');
        return;
    }


    // Send events to bot

    if (parsedData?.event_code == 'logout') {
       console.error('-logout--')
       localStorage.removeItem("updated-data");
        console.log("\n\n\n <--- Logout event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "logout",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'place-new-order') {
        console.log("\n\n\n <--- place-new-order event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "place-new-order",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'view-checkout') {
        console.log("\n\n\n <--- view-checkout event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "view-checkout",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'select-brand') {
        console.log("\n\n\n <--- select-brand event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "select-brand",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'ordercart-continue') {
        console.log("\n\n\n <--- ordercart-continue event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "ordercart-continue",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'confirm-order') {
        console.log("\n\n\n <--- confirm-order event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "confirm-order",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'cancel-order') {
        console.log("\n\n\n <--- cancel-order event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "cancel-order",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'confirm-order-total-invoice') {
        console.log("\n\n\n <--- confirm-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "confirm-order-total-invoice",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'cancel-order-total-invoice') {
        console.log("\n\n\n <--- cancel-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "cancel-order-total-invoice",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'update-data-on-refresh') {
        console.log("\n\n\n <--- update-data-on-refresh event in parent iframe ---> \n\n\n", parsedData);
        localStorage.setItem("updated-data", parsedData.data)
        return;
    }

}, false);