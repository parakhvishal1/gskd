
function loadPlanProgress(data, basicProgress) {
    $("#progress_plan_main").empty();
    $("#progress_plan_main").prepend(`
        <div class="title">
            <div class="name">${data["title"]}</div>
            <div class="arrow calendar">
                <span>
                    <img src="/gsk/assets/images/svg/calendar.svg" />
                </span>
                Last Date: ${data["last_date"]}
            </div>
        </div>
        <div id="plan_items"></div>
    `);

    data && data["brands"] && data["brands"].map(item => {
        $("#plan_items").append(getProductsProgress(item, false, false, basicProgress, "#f36633"));
    });
}

function loadProgressCards(data, detailed, hideAdd) {
    $(".brand_level_progress").empty();
    let progresscards = data["brands"].map(item => {
        return `
            <div class="progress_card ${detailed ? "transparent" : ""}">
                <div class="progress_plan">
                    <div class="grouped">
                        ${getProductsProgress(item, detailed, hideAdd, false, "#959595")}
                        <div class="quantity_inc">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    return progresscards.join("");
}

function getProgressHeaderFooterLabels(data, sourceContainer) {
    let discount_range = data["discount_range"];
    let limit = Math.floor(Number(data["max_limit"]) / discount_range.length);


    function getRange(rangeData) {
        let rangeDataWidth = 100 / rangeData.length;
        let rangeDataDivs = rangeData.map(range => {
            return `
                <div class="sub-block" style="width: ${rangeDataWidth}%;border-color: #fff;">${range["discount"]}%</div>
            `;
        })
        return rangeDataDivs.join("");
    }

    if(sourceContainer === "header") {
        return `
            <div class="detail_bar">
                <div class="main">
                    ${getRange(data["discount_range"])}
                </div>
                ${sourceContainer === "header" ? '<div class="progress_header_label">Disc.</div>' : ""}
                ${sourceContainer === "footer" ? '<div class="progress_footer_label">Value</div>' : ""}
            </div>
        `;
    }


    let rangeDataDivsWidth = 100 / discount_range.length;
    let discountRangeData = discount_range.map((range, index) => {
        if (index === discount_range.length - 1) return;
        return `<div class="sub-block" style="width: ${rangeDataDivsWidth}%;border-color: #fff;">${(index + 1) * limit}</div>`
    });
    discountRangeData = discountRangeData.join("");
    return `
        <div class="detail_bar discount_range">
            <div class="main">
                <div class="sub-block" style="border-color: #fff; justify-content: left;">0</div>
                ${discountRangeData}
                <div class="sub-block" style="border-color: #fff; justify-content: right;">${Number(data["max_limit"])}</div>
            </div>
            ${sourceContainer === "header" ? '<div class="progress_header_label">Disc.</div>' : ""}
            ${sourceContainer === "footer" ? '<div class="progress_footer_label">Value</div>' : ""}
        </div>
    `;
}

function getProductsProgress(item, detailed, hideAdd, basicProgress, colorscheme) {
    let progressPercent = Math.ceil((item["purchased"] / item["max_limit"]) * 100);
    let progressPercentSelected = Math.ceil(( (parseInt(item["purchased"]) + parseInt(item["selected"])) / item["max_limit"]) * 100);

    let addBtn = `
        ${basicProgress ?
            ""
            :
            `
                <label style="font-size: 12px;">${parseInt(item["purchased"]) + parseInt(item["selected"])}</label>
                <div class="progressbar_wrapper addproduct" skudata=${`${item["sku"]}`} >
                    <div class="main reset" style="cursor: pointer;">
                        <img src="/gsk/assets/images/svg/plus.svg" class="icon_add"/>
                    </div>
                </div>
            `
        }
    `;


    let rangeDataDivsWidth = item["discount_range"].length;
    let blocksWidth = 100 / rangeDataDivsWidth;


    let rangeDataDivs = item["discount_range"].map((range, index) => {
        return `
            <div class="sub-block" style="width: ${100 / rangeDataDivsWidth}%; border-color: ${progressPercent < ((index + 1) * (100 / rangeDataDivsWidth)) ? "#959595" : "#fff"}"></div>
        `;
    })

    rangeDataDivs = rangeDataDivs.join("");

    return `
        <div class="progressbar flex">
            <div class="wrapper_brand_progress" style="width: ${detailed ? '5' : '0'}%;"></div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '75' : basicProgress ? '100' : '90'}%;">
                <label class="${detailed ? "abs" : ""} ${!hideAdd ? "" : "hide"}">${!hideAdd ? item["name"] : ""}</label>
                ${detailed ? getProgressHeaderFooterLabels(item, "header") : ""}
                <div class="progressbar_wrapper">
                    <div class="main">
                        
                    </div>
                    ${getInvertedProgress(item, progressPercent, colorscheme)}
                    ${getSelectedProgress(item, progressPercentSelected, "#f36633")}
                    <div class="progressbar_ratio inverted" style="width:${100}%; background: transparent !important;">
                        <div class="main" style="background: transparent;">
                            ${rangeDataDivs}
                        </div>
                    </div>
                </div>
                ${detailed ? getProgressHeaderFooterLabels(item, "footer") : ""}
            </div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '10' : basicProgress ? '0' : '10'}%; padding-left: ${hideAdd ? "0px" : basicProgress ? '0px' : "5%"}; font-size: 12px;">
                ${hideAdd ? `<div><div style='margin-top: -20px;'>On Invoice</div><div style='margin-top: 10px;'><strong> ${parseInt(item["purchased"]) + parseInt(item["selected"])}</strong></div></div>` : addBtn}
            </div>
        </div>
    `;
}

function getInvertedProgress(item, progressPercent, colorscheme) {
    if(progressPercent) {
        return `
            <div class="progressbar_ratio inverted" style="width:${progressPercent}%; background: ${colorscheme} !important;">
                <div class="ratio_wrapper">
                    <div class="ratio">${item["purchased"]}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}

function getSelectedProgress(item, progressPercentSelected, colorscheme) {
    if(progressPercentSelected) {
        return `
            <div class="progressbar_ratio" style="width:${progressPercentSelected}%; background: ${colorscheme} !important;">
                <div class="ratio_wrapper">
                    <div class="ratio">+ ${parseInt(item["purchased"]) + parseInt(item["selected"])}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}