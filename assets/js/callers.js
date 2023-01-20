/* 
    1 -> Login User
    2 -> Splash Screen
    3 -> TermsUI
    4 -> User Welcome Screen
    5 -> Client List Screen
*/

(function () {
    setTimeout(() => {
        GlobalVarInit();
        // CallScreen(1);
        // CallScreen(4);
    }, 500);
})();

function GlobalVarInit() {
    window.orderCartData = [];
    window.updateCartData = {};
    window.cartData = {};
    window.wholesalerAccountData = [];
    window.dataStore = {};
    window.discountData = {};
    // window.currentScreen = "";
    window.brandArr = {};
}

function StoreDataIn(data) {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("init", JSON.stringify(data));
}

function ToBot(eventName, data) {
    console.log("to bot called --> ", eventName);
    switch (eventName) {
        case "fetch-user-details":
            delete data["isLoggedIn"];
            setTimeout(() => {
                ToApp("user-details", {
                    "profile_details": {
                        "firstName": "Valentin",
                        "lastName": "Buteler",
                        "countryDialCode": "91",
                        "phone": "9898011111",
                        "email": "valentinbuteler@gmail.com"
                    },
                    "associated_accounts": {
                        "accounts": [
                            {
                                "name": "Wholesaler A",
                                "active_status": "active",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            },
                            {
                                "name": "Wholesaler B",
                                "active_status": "",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "In-Active",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            },
                            {
                                "name": "Wholesaler C",
                                "active_status": "active",
                                "account_data": [
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Pending Verification",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    },
                                    {
                                        "account_no": "A00000001",
                                        "legal_id": "12345",
                                        "status": "Pending Verification",
                                        "invoice": "https://www.invoicesimple.com/wp-content/uploads/2018/05/InvoiceSimple-PDF-Template.pdf"
                                    }
                                ]
                            }
                        ]
                    },
                    "notification": {
                        "status": "online"
                    },
                })
            }, 0);
            break;
        case "terms-conditions":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "update-order-data":
            console.log("update-order-data", data);
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "logout":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "place-new-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "view-checkout":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                ToApp('ordercart-screen', data);
            }
            break;
        case "select-brand":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "back-brand-select":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "ordercart-continue":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "ordercart-back":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "confirm-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                loadUserWelcomeUI(data);
                data["plan_progress"] && loadPlanProgress(data["plan_progress"], true, true);
            }
            break;
        case "cancel-order":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "confirm-order-total-invoice":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                ToApp("userwelcome-screen", data);
            }
            break;
        case "cancel-order-total-invoice":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "update-data-on-refresh":
            let updatedData = JSON.parse(data);
            if (window.currentScreen) {
                updatedData["currentScreen"] = window.currentScreen || "";
                console.log("updatedData -> ", updatedData);
                window.parent.postMessage(JSON.stringify({
                    event_code: eventName,
                    data: JSON.stringify(updatedData)
                }), '*');
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    ToApp("get-data-on-refresh", updatedData);
                }
            }
            break;
        case "back-on-orderhistory":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "checkout-add-brands":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "checkout-to-brand-detailing":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        case "get-data-from-localstorage":
            window.parent.postMessage(JSON.stringify({
                event_code: eventName,
                data: data
            }), '*');
            break;
        default:
            break;
    }
}

function ToApp(eventName, data, orgData) {
    window.currentScreen = eventName;
    switch (eventName) {
        case "user-login":
            userData = data;
            showHeader(userData);
            break;
        case "welcome-screen":
            StoreDataIn(data);
            loadGeneralWelcome(data);
            break;
        case "termsui-screen":
            // showHeader();
            loadTermsUI(data);
            break;
        case "userwelcome-screen":
            StoreDataIn(data);
            GlobalVarInit();
            loadUserWelcomeUI(data);
            data["plan_progress"] && loadPlanProgress(data["plan_progress"], true);
            // loadBrandSelectionUIByBrandName(data);
            break;
        case "choosebrands-screen":
            loadBrandSelectionUI(data);
            break;
        case "value":
            loadEditProfile(data);
            break;
        case "user-details":
            loadUserProfile(data)
            break;
        case "planprogress":
            loadPlanProgress(data);
            break;
        case "clientlist-screen":
            loadClientList(data);
            break;
        case "ordercart-screen":
            localStorage.setItem("data", JSON.stringify(data));
            loadOrderCart(data);
            break;
        case "ordercart-final-screen":
            loadOrderFinalCart(data);
            break;
        case "choosebrands-screen-from-cart":
            loadBrandSelectionUI(data);
            break;
        case "show-brand-selection":
            GlobalVarInit();
            StoreDataIn(data);
            ToApp("choosebrands-screen", data);
            break;
        case "show-brand-detailing":
            GlobalVarInit();
            StoreDataIn(data);
            loadBrandSelectionUIByBrandName(data);
            break;
        case "get-data-on-refresh":
            let toScreen = data["currentScreen"];
            delete data["currentScreen"];
            GlobalVarInit();
            StoreDataIn(data);
            ToApp(toScreen, data);
            break;
        case "confirmorderon-bot":
            confirmOrder();
            break;
        case "show-order-history-screen":
            switchTab("tab22");
            break;
        case "confirm-order-from-cart":
            confirmOrder();
            break;
        case "cancelorderon-bot":
            cancelOrder();
            break;
        default:
            break;
    }
}



window.addEventListener('message', function (eventData) {
    let parsedEventData = JSON.parse(eventData.data);

    if (parsedEventData.event_code === "welcome-screen" && parsedEventData.data) {
        // document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
        //     event_code: 'welcome-screen',                                                // added new event name
        //     data: parsedEventData.data
        // }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp(eventName, data);
    }

    if (parsedEventData.event_code === "termsui-screen" && parsedEventData.data) {
        // document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
        //     event_code: 'termsui-screen',                                                // added new event name
        //     data: parsedEventData.data
        // }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp(eventName, data);
    }

    if (parsedEventData.event_code === "userwelcome-screen" && parsedEventData.data) {
        // document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
        //     event_code: 'userwelcome-screen',                                                // added new event name
        //     data: parsedEventData.data
        // }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp(eventName, data);
    }

    if (parsedEventData.event_code === "user-login" && parsedEventData.data) {
        // document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
        //     event_code: 'user-login',                                                // added new event name
        //     data: parsedEventData.data
        // }), '*');
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp(eventName, data);
    }

    if (parsedEventData.event_code === "ordercart-screen" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp(eventName, data);
    }

    if (parsedEventData.event_code === "load-userwelcome-screen" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp("userwelcome-screen", data);
    }

    if (parsedEventData.event_code === "show-brand-selection" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp("show-brand-selection", data);
    }

    if (parsedEventData.event_code === "show-brand-detailing" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp("show-brand-detailing", data);
    }

    if (parsedEventData.event_code === "orderhistory-screen" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp("show-order-history-screen", data);
    }

    if (parsedEventData.event_code === "confirmorderon-bot" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('Event Data---', data);
        ToApp("confirm-order-from-cart", data);
    }

    if (parsedEventData.event_code === "bot-reloaded" && parsedEventData.data) {
        let eventName = parsedEventData.event_code;
        let data = parsedEventData.data;
        console.log("eventName---", eventName);
        console.log('refreshed local storage data in caller.js', JSON.parse(data));
        console.log('reload parse data', data)
        ToApp("get-data-on-refresh", JSON.parse(data));
    }


});