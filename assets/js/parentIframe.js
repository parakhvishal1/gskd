
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
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 4.8rem 0 0 40%; background-image: url("https://cdn.yellowmessenger.com/UBsc1FLzsOtU1673341571371.png")}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:40%;list-style:none;height:100%;justify-content:space-between;border:.5px solid #ccc}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 40% - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:4.8rem;border:.5px solid #ccc;border-left:0;}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} }  .send-input { margin-left:40%} #chatDetails { margin-left:40%} .blur{ -webkit-filter: blur(30px);} #chatBoxMain { padding: 0 0 31px 0; } #chatOptions { padding: 0 0 48px 0; } .timestamp-bot:last-child {margin-bottom: 10px;}';
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
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 0 0 0 100%;}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:100%;list-style:none;height:100%;justify-content:space-between;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 3.5rem - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:0;border:.5px solid #ccc;border-left:0; margin-left:30%}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} } .send-input {display: none; } #chatDetails { margin-left:100%}';
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
    var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 4rem 0 0 0; background-image: url("https://cdn.yellowmessenger.com/zlqqXMmsw3z91663746912397.png")}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:0;list-style:none;height:100%;justify-content:space-between;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:100%;z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:4rem;border:.5px solid #ccc;border-left:0;margin-left:0}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} } .send-input {display: block; margin-left:0} #chatDetails { margin-left:0}';
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

// window.addEventListener("onload", (event) => {
//     console.error('event--->', event)
//     console.log("page is fully loaded");
// });


window.addEventListener('message', function (eventData) {
    // console.error('eventData', eventData);
    let parsedData = JSON.parse(eventData.data);

    console.log("parsedData", parsedData)


    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "attach") {
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'attach',
            data: 'data'
        }), '*');
        console.log("---Attach---");
        return;

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "welcome-screen") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log('Event Data-->>', parsedData.data.data);
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'welcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("welcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            console.log(source, 'Source--->')
            console.log('Event Data-->>', parsedData.data.data);
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'welcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("welcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "termsui-screen") { //bot ui
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'termsui-screen',
                data: parsedData.data.data
            }), '*');
            console.log("termsui-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'termsui-screen',
                data: parsedData.data.data
            }), '*');
            console.log("termsui-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "userwelcome-screen") { //bot ui
        console.log('Source-->>', parsedData.data.data.source);
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'userwelcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("userwelcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'userwelcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("userwelcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "user-login") { //bot ui
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'user-login',
                data: parsedData.data.data
            }), '*');
            console.log("user-login")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'user-login',
                data: parsedData.data.data
            }), '*');
            console.log("user-login")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "ordercart-screen") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'ordercart-screen',
                data: parsedData.data.data
            }), '*');
            console.log("ordercart-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'ordercart-screen',
                data: parsedData.data.data
            }), '*');
            console.log("ordercart-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "load-userwelcome-screen") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'load-userwelcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("load-userwelcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'load-userwelcome-screen',
                data: parsedData.data.data
            }), '*');
            console.log("load-userwelcome-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "show-brand-selection") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'show-brand-selection',
                data: parsedData.data.data
            }), '*');
            console.log("show-brand-selection")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'show-brand-selection',
                data: parsedData.data.data
            }), '*');
            console.log("show-brand-selection")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "show-brand-detailing") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'show-brand-detailing',
                data: parsedData.data.data
            }), '*');
            console.log("show-brand-detailing")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'show-brand-detailing',
                data: parsedData.data.data
            }), '*');
            console.log("show-brand-detailing")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }


    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "orderhistory-screen") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'orderhistory-screen',
                data: parsedData.data.data
            }), '*');
            console.log("orderhistory-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'orderhistory-screen',
                data: parsedData.data.data
            }), '*');
            console.log("orderhistory-screen")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "confirmorderon-bot") {
        let source = parsedData.data.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'confirmorderon-bot',
                data: parsedData.data.data
            }), '*');
            console.log("confirmorderon-bot")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        } else {
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'confirmorderon-bot',
                data: parsedData.data.data
            }), '*');
            console.log("confirmorderon-bot")
            console.log('Event Data-->>', parsedData.data.data)
            return;
        }

    }


    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "bot-reloaded") {
        console.log("bot-reloaded");
        let data = localStorage.getItem("updated-data")
        console.log('refreshed local storage data in parentIframe', JSON.parse(data));
        let source = parsedData.data.data.source;
        console.log(source, 'get Source bot-reloaded');
        if (data) {
            let lSource = localStorage.getItem("source");
            let lScreen = localStorage.getItem("screen");
            if (lSource == 'Mobile') {
                if (lScreen == 'ui') {
                    injectDynamicCssForMobileBot();
                    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                        event_code: 'bot-reloaded',
                        data: data
                    }), '*');
                } else {
                    injectDynamicCssForMobileBot();
                    document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                        event_code: 'bot-reloaded',
                        data: data
                    }), '*');

                }

            } else {
                document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                    event_code: 'bot-reloaded',
                    data: data
                }), '*');
            }


        }
        return;
    }

    if (parsedData?.event_code == 'custom-event' && parsedData?.data?.code == "get-source") {
        console.log("get-source");
        let source = parsedData.data.data.source;
        console.log(source, 'get Source');
        let screen = parsedData.data.data.screen;
        console.log(screen, 'screen--->')
        if (source == 'Mobile') {
            console.log(screen, 'screen--->')
            if (screen == 'BOT') {
                injectDynamicCssForMobileBot();
                localStorage.setItem("screen", 'bot');
            } else {
                injectDynamicCssForMobileUI();
                localStorage.setItem("screen", 'ui');
            }
        }



        // window.frames.ymIframe.chat.send({
        //     event: {
        //         code: "back-on-orderhistory",
        //         data: "get-source"
        //     }
        // }, true);
    }



    // Send events to bot

    if (parsedData?.event_code == 'logout') {
        // injectDynamicCssForMobileBot()
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
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
        } else {
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

    }

    if (parsedData?.event_code == 'place-new-order') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <--- place-new-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "place-new-order",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- place-new-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "place-new-order",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'view-checkout') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            console.log("\n\n\n <--- view-checkout event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "view-checkout",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- view-checkout event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "view-checkout",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'select-brand') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        console.log('select-brand Mobile', source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            console.log("\n\n\n <--- select-brand event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "select-brand",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- select-brand event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "select-brand",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'ordercart-continue') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'ui');
            console.log("\n\n\n <--- ordercart-continue event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "ordercart-continue",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- ordercart-continue event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "ordercart-continue",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'confirm-order') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <--- confirm-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "confirm-order",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- confirm-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "confirm-order",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'cancel-order') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <--- cancel-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "cancel-order",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- cancel-order event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "cancel-order",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'confirm-order-total-invoice') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <--- confirm-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "confirm-order-total-invoice",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- confirm-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "confirm-order-total-invoice",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'cancel-order-total-invoice') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <--- cancel-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "cancel-order-total-invoice",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <--- cancel-order-total-invoice event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "cancel-order-total-invoice",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'back-brand-select') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  back-brand-select event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "back-brand-select",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  back-brand-select event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "back-brand-select",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'ordercart-back') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  ordercart-back event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "ordercart-back",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  ordercart-back event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "ordercart-back",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'back-on-orderhistory') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  back-on-orderhistory event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "back-on-orderhistory",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  back-on-orderhistory event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "back-on-orderhistory",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'checkout-add-brands') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  checkout-add-brands event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "checkout-add-brands",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  checkout-add-brands event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "checkout-add-brands",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'checkout-to-brand-detailing') {
        let source = parsedData.data.source;
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileUI();
            // injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  checkout-to-brand-detailing event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "checkout-to-brand-detailing",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  checkout-to-brand-detailing event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "checkout-to-brand-detailing",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'update-order-data') {
        let source = parsedData.data.source;
        console.log(source, '---Source---')
        localStorage.setItem("source", source);
        if (source == 'Mobile') {
            injectDynamicCssForMobileBot();
            localStorage.setItem("screen", 'bot');
            console.log("\n\n\n <---  update-order-data event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "update-order-data",
                    data: parsedData
                }
            }, true);
            return;
        } else {
            console.log("\n\n\n <---  update-order-data event in parent iframe ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "update-order-data",
                    data: parsedData
                }
            }, true);
            return;
        }

    }

    if (parsedData?.event_code == 'help') {
        console.log("\n\n\n <---  help event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "help",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'profile-details') {
        console.log("\n\n\n <---  profile-details event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "profile-details",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'associated-accounts') {
        console.log("\n\n\n <---  associated-accounts event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "associated-accounts",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'notification') {
        console.log("\n\n\n <---  notification event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "notification",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'addaccount-associatedaccounts') {
        // console.log("\n\n\n <---  addaccount-associatedaccounts event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "addaccount-associatedaccounts",
                data: parsedData
            }
        }, true);
        return;
    }

    if (parsedData?.event_code == 'delete') {
        console.log("\n\n\n <---  delete event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "delete",
                data: parsedData
            }
        }, true);
        return;
    }


    if (parsedData?.event_code == 'profile-settings') {
        console.log("\n\n\n <---  profile-settings event in parent iframe ---> \n\n\n", parsedData);
        window.frames.ymIframe.chat.send({
            event: {
                code: "profile-settings",
                data: parsedData
            }
        }, true);
        return;
    }


    if (parsedData?.event_code == 'update-data-on-refresh') {
        console.log("\n\n\n <--- update-data-on-refresh event in parent iframe ---> \n\n\n", parsedData);
        localStorage.setItem("updated-data", parsedData.data);

        console.log('After setting Local storage data');
        window.onload = function () {
            console.log('Windows gets loaded')
        }
        return;
    }


    if (parsedData?.event_code == 'get-data-from-localstorage') {
        console.log("get-data-from-localstorage");
        let data = localStorage.getItem("updated-data")

        if (data) {
            console.log("\n\n\n <---  Send data to Bot ---> \n\n\n", parsedData);
            window.frames.ymIframe.chat.send({
                event: {
                    code: "get-data-from-localstorage",
                    data: "data"
                }
            }, true);
            return;
        }


    }





}, false);