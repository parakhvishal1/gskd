/* 
    1 -> Login User
    2 -> Splash Screen
    3 -> TermsUI
    4 -> User Welcome Screen
    5 -> Client List Screen
*/

(function () {
    setTimeout(() => {
        window.orderCartData = {};
        window.updateCartData = {};
        window.cartData = {};
        CallScreen(1);
        CallScreen(4);
    }, 500);
})();



function ToBot(eventName, data) {
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
                event_code: '',
                data: data
            }), '*');
            break;
        case "update-order-data":
            console.log("update last order data --> \n", data);
            window.parent.postMessage(JSON.stringify({
                event_code: '',
                data: data
            }), '*');
            let newData = localStorage.getItem("data");
            let parseNewData = JSON.parse(newData);
            parseNewData["plan_progress"]["brands"].forEach(brand => {
                brand["purchased"] = Number(brand["purchased"]) + 5;
            })
            ToApp("userwelcome-screen", parseNewData);
            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        default:
            break;
    }
}

function ToApp(eventName, data, orgData) {
    switch (eventName) {
        case "user-login":
            userData = data;
            showHeader(userData);
            break;
        case "welcome-screen":
            loadGeneralWelcome(data);
            break;
        case "termsui-screen":
            showHeader();
            loadTermsUI(data);
            break;
        case "userwelcome-screen":
            localStorage.setItem("data", JSON.stringify(data));
            loadUserWelcomeUI(data);
            data["plan_progress"] && loadPlanProgress(data["plan_progress"], true);
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
            loadOrderCart(data);
            break;
        case "ordercart-final-screen":
            loadOrderFinalCart(data);
            break;
        case "choosebrands-screen-from-cart":
            loadBrandSelectionUI(data);
            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;
        case "value":

            break;

        default:
            break;
    }
}