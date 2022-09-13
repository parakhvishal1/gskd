
function loadPlanProgress(data, basicProgress) {
    $("#progress_plan_main").empty();
    $("#progress_plan_main").prepend(`
        <div class="title">
            <div class="name">${data["title"]}</div>
            <div class="arrow calendar">
                <span>
                    <img src="/assets/images/svg/calendar.svg" />
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
    let limit = Number(data["max_limit"]) / 5;


    function getRange(rangeData) {
      
        let rangeDataDivs = rangeData.map(range => {
            return `
                <div class="sub-block" style="border-color: #fff">${range["discount"]}%</div>
            `;
        })
        console.log("rangeDataDivs ->", rangeDataDivs);
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
    return `
        <div class="detail_bar">
            <div class="main">
                <div class="sub-block" style="border-color: #fff">${1*limit}</div>
                <div class="sub-block" style="border-color: #fff">${2*limit}</div>
                <div class="sub-block" style="border-color: #fff">${3*limit}</div>
                <div class="sub-block" style="border-color: #fff">${4*limit}</div>
                <div class="sub-block" style="border-color: #fff">${5*limit}</div>
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
                        <img src="/assets/images/png/Plus.png" class="icon_add"/>
                    </div>
                </div>
            `
        }
    `;

    return `
        <div class="progressbar flex">
            <div class="wrapper_brand_progress" style="width: ${detailed ? '5' : '0'}%;"></div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '75' : basicProgress ? '100' : '90'}%;">
                <label class="${detailed ? "abs" : ""}">${!hideAdd ? item["name"] : ""}</label>
                ${detailed ? getProgressHeaderFooterLabels(item, "header") : ""}
                <div class="progressbar_wrapper">
                    <div class="main">
                        
                    </div>
                    ${getInvertedProgress(item, progressPercent, colorscheme)}
                    ${getSelectedProgress(item, progressPercentSelected, "#f36633")}
                    <div class="progressbar_ratio inverted" style="width:${100}%; background: transparent !important;">
                        <div class="main" style="background: transparent;">
                            <div class="sub-block" style="border-color: ${progressPercent < 20 ? "#959595" : "#fff"}"></div>
                            <div class="sub-block" style="border-color: ${progressPercent < 40 ? "#959595" : "#fff"}"></div>
                            <div class="sub-block" style="border-color: ${progressPercent < 60 ? "#959595" : "#fff"}"></div>
                            <div class="sub-block" style="border-color: ${progressPercent < 80 ? "#959595" : "#fff"}"></div>
                            <div class="sub-block" style="border-color: ${progressPercent < 100 ? "#959595" : "#fff"}"></div>
                        </div>
                    </div>
                </div>
                ${detailed ? getProgressHeaderFooterLabels(item, "footer") : ""}
            </div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '10' : basicProgress ? '0' : '5'}%; padding-right: ${hideAdd ? "0px" : basicProgress ? '0px' : "12px"}; font-size: 12px;">
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