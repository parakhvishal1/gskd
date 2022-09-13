
function loadOrderCart(data) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">Order Details</div>
                <div class="icon goToBrandLevel cursor"><img src="/assets/images/svg/plus.svg" /></div>
            </div>
            ${getAccordianAccounts(data["new_orders"]["orders"])}
        </div>
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="cancel">Cancel</button>
                    <button class="btn solid" id="confirm">Confirm</button>
                </div>
            </div>
        </div>
    `);

    $(".goToBrandLevel").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = JSON.parse(localStorage.getItem("data"));
        showBrandLevelDetails(parseData, parseData["selected_brand"]);
    });

    $("#cancel").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = JSON.parse(localStorage.getItem("data"));
        showBrandLevelDetails(parseData, parseData["selected_brand"]);
    });

    $("#confirm").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        ToApp("ordercart-final-screen", data);
    });

    $(".accordion-item-header.account_detail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });
}

function getAccordianAccounts(data) {
    let accordianAccounts = data.map(order => {
        return `
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-item-header account_detail">${order["account_no"]}</div>
                    <div class="accordion-item-body parent">
                        <div class="accordion-item-body-content" style="height: 300px; overflow: auto;">
                            <div class="date-picker-value date_order ${order["ordered_date"] ? "" : "hide"}">
                                <div class="flex calendar-picker">
                                    <img class="picker" src="/assets/images/svg/calendar.svg" />
                                    <div class="input_date_picker" readonly="readonly">${order["ordered_date"]}</div>
                                    <img class="arrow-down" src="/assets/images/svg/down.svg" />
                                </div>
                            </div>
                            <div class="flex title">PRODUCTS</div>
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row borderBottom">
                                        <td class="info_data title" colspan="1">Est. Price</td>
                                        <td class="info_data title" colspan="1">Units</td>
                                        <td class="info_data title" colspan="1">Free Goods</td>
                                        <td class="info_data title" colspan="1">On Invoice Discount</td>
                                        <td class="info_data title" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${getAccordianAccountsData(order["product_details"])}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    return accordianAccounts.join("");
}

function getAccordianAccountsData(data) {
    let accordianAccountsData = data.map(item => {
        return `
            <tr>
                <td colspan="5">
                    <div class="title paddingTop">
                        <div class="name">${item["name"]}</div>
                        <div class="arrow hide">
                            <img src="/assets/images/svg/edit.svg" />
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="info_row borderBottom">
                <td class="info_data" colspan="1">£ ${item["price"]}</td>
                <td class="info_data" colspan="1">${item["quantity"] || item["units"]}</td>
                <td class="info_data" colspan="1">+${item["free_goods"]}</td>
                <td class="info_data" colspan="1">${item["discount"]}%</td>
                <td class="info_data" colspan="1">${item["payterm"]} D</td>
            </tr>
        `
    });
    return accordianAccountsData.join("");
}

function loadOrderFinalCart(data) {
    let selectedBrand = data["selected_brand"];
    let filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === selectedBrand);

    let filteredBrandData = filteredBrand[0];

    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">Order Details</div>
                <div class="icon"><img src="/assets/images/svg/plus.svg" /></div>
            </div>
            ${loadProgressCards({"brands": filteredBrand}, true, true)}
            ${getAccordianAccounts(data["new_orders"]["orders"])}
        </div>
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="backFinalCheckout">Cancel</button>
                    <button class="btn solid" id="continueFinalCheckout">Continue</button>
                </div>
            </div>
        </div>
    `);

    $(".accordion-item-body-content").map(v => {
        let bodyContent = $(".accordion-item-body-content")[v];
        // $(bodyContent).parent().css("max-height", "unset");
    })

    $("#backFinalCheckout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $("#continueFinalCheckout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        ToApp("choosebrands-screen-from-cart", data);
    });

    $(".accordion-item-header.account_detail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });
}