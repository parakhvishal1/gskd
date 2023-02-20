
function loadPlanProgress(data, basicProgress, hideSelectedProgress, initial) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    $("#progress_plan_main").empty();
    $("#progress_plan_main").prepend(`
        <div class="title">
            <div class="name highlight">${locale["labels"]["title"]}</div>
            <div class="arrow calendar">
                <!-- <span>
                    <img src="/gskd/assets/images/svg/calendar.svg" />
                </span> -->
                <p style="color: #f36633;">${locale["labels"]["endDate"]}:&nbsp;&nbsp;</p> ${data["last_date"]}
            </div>
        </div>
        <div id="plan_items"></div>
    `);

    data && data["brands"] && data["brands"].map(item => {
        $("#plan_items").append(getProductsProgress(item, false, false, basicProgress, "#f36633", hideSelectedProgress, initial));
    });
}

function loadProgressCards(data, detailed, hideAdd) {
    $(".brand_level_progress").empty();
    let progresscards = data["brands"].map(item => {
        return `
            <div class="progress_card ${detailed ? "transparent" : ""}">
                <div class="progress_plan">
                    <div class="grouped">
                        ${getProductsProgress(item, detailed, hideAdd, false, "#3f3f3f")}
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
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    let discount_range = data["on_invoice_range"] ? data["on_invoice_range"] : data["off_invoice_range"];
    let backgroundProgressWidth = Number(data["max_limit"])/discount_range.length;
    let backgroundProgressPerc = (backgroundProgressWidth/Number(data["max_limit"])) * 100;
    // console.log("backgroundProgressWidth -> ", backgroundProgressPerc);

    function getRange(rangeData, type) {
        let isLabelReached = false;
        let rangeDataDivs = rangeData.map((range, index) => {
            if(index === 0) {
                let diff = Number(rangeData[index]["label"]) - 0;
                if((Number(data["purchased"] || 0) + Number(data["selected"])) >= rangeData[0]["label"] &&  (Number(data["purchased"] || 0) + Number(data["selected"])) < range["label"]) {
                    isLabelReached = true;
                    data["eligible_discount"] = range["discount"];
                } else {
                    isLabelReached = false;
                }
                return `<div labelvalue="${range['discount']}" class="sub-block ${(type === "FINANCIAL" || !type) ? "discount" : ""} ${(type === "FREE_GOODS" || !type) ? "freegoods" : ""} ${isLabelReached ? 'highlight' : ''}" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
            }
            if((Number(data["purchased"] || 0) + Number(data["selected"])) >= rangeData[index - 1]["label"] &&  (Number(data["purchased"] || 0) + Number(data["selected"])) < range["label"]) {
                isLabelReached = true;
                data["eligible_discount"] = range["discount"];
            } else {
                isLabelReached = false;
            }
            if (index === rangeData.length - 1) {
                let diff = Number(rangeData[index]["label"]) - Number(rangeData[index - 1]["label"]);
                return `<div labelvalue="${range['discount']}" class="sub-block ${(type === "FINANCIAL" || !type) ? "discount" : ""} ${(type === "FREE_GOODS" || !type) ? "freegoods" : ""} ${isLabelReached ? 'highlight' : ''}" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
            }
            let diff = Number(rangeData[index]["label"]) - Number(rangeData[index - 1]["label"]);
            return `<div labelvalue="${range['discount']}" class="sub-block ${(type === "FINANCIAL" || !type) ? "discount" : ""} ${(type === "FREE_GOODS" || !type) ? "freegoods" : ""} ${isLabelReached ? 'highlight' : ''}" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
        })
        return rangeDataDivs.join("");
    }

    function getOffInvoice() {
        let offInvoiceRange = data["off_invoice_range"];
        if(data["off_invoice_range"]) {
            return `
                <div class="detail_bar">
                    <div class="main">
                        ${getRange(offInvoiceRange, data["offInvoice_discount_execution"])}
                    </div>
                    ${sourceContainer === "header" ? 
                        `
                            ${(data["offInvoice_discount_execution"] === "FINANCIAL") ? `<div class="progress_header_label">${locale["labels"]["discAbbr"]}.</div>` : ''}
                            ${(data["offInvoice_discount_execution"] === "FREE_GOODS") ? `<div class="progress_header_label" style="right: calc(100% + 4px);">${locale["labels"]["freeGoods"]}</div>` : ''}
                        ` : ""
                    }
                    ${sourceContainer === "header" ? `<div class="progress_header_label right">${locale["labels"]["offInvoice"]}</div>` : ""}
                    ${sourceContainer === "footer" ? `<div class="progress_footer_label">${locale["labels"]["value"]}</div>` : ""}
                </div>
            `;
        }
        return "";
    }

    function getOnInvoice() {
        let onInvoiceRange = data["on_invoice_range"];
        if(data["on_invoice_range"]) {
            return `
                <div class="detail_bar">
                    <div class="main">
                        ${getRange(onInvoiceRange, data["onInvoice_discount_execution"])}
                    </div>
                    ${sourceContainer === "header" ? 
                        `
                            ${(data["onInvoice_discount_execution"] === "FINANCIAL") ? `<div class="progress_header_label">${locale["labels"]["discAbbr"]}.</div>` : ''}
                            ${(data["onInvoice_discount_execution"] === "FREE_GOODS") ? `<div class="progress_header_label" style="right: calc(100% + 4px);">${locale["labels"]["freeGoods"]}</div>` : ''}
                            
                        ` : ""
                    }
                    ${sourceContainer === "header" ? `<div class="progress_header_label right">${locale["labels"]["onInvoice"]}</div>` : ""}
                    ${sourceContainer === "footer" ? `<div class="progress_footer_label">${locale["labels"]["value"]}</div>` : ""}
                </div>
            `;
        }
        return "";
    }

    if (sourceContainer === "header") {
        return `
            ${getOffInvoice()}
            ${getOnInvoice()}
        `;
    }

    let discountRangeData = discount_range.map((range, index) => {
        if(index === 0) {
            let diff = Number(discount_range[index]["label"]) - 0;
            return `<div labelvalue="${range['label']}" class="sub-block initial labeller" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
        }
        if (index === discount_range.length - 1) {
            let diff = Number(discount_range[index]["label"]) - Number(discount_range[index - 1]["label"]);
            return `<div labelvalue="${range['label']}" class="sub-block labeller" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
        }
        let diff = Number(discount_range[index]["label"]) - Number(discount_range[index - 1]["label"]);
        return `<div labelvalue="${range['label']}" class="sub-block labeller" style="width: ${backgroundProgressPerc}%;border-color: #fff; justify-content: right;"></div>`;
    });
    discountRangeData = discountRangeData.join("");
    return `
        <div class="detail_bar discount_range">
            <!--
            <div class="main" style="justify-content: center;">
                <div class="sub-block" style="border-color: #fff; justify-content: left; position: absolute; left: 0; top: 0;">0</div>
                ${discountRangeData}
                <div class="sub-block" style="border-color: #fff; justify-content: right; position: absolute; right: 0; top: 0;">${Number(data["max_limit"])}</div>
            </div>
            -->
            <div class="main" style="justify-content: center;">
                ${discountRangeData}
            </div>
            ${sourceContainer === "header" ? `<div class="progress_header_label">${locale["labels"]["discAbbr"]}.</div>` : ""}
            ${sourceContainer === "footer" ? `<div class="progress_footer_label">${locale["labels"]["value"]}</div>` : ""}
        </div>
    `;
}

function getProductsProgress(item, detailed, hideAdd, basicProgress, colorscheme, hideSelectedProgress, initial) {
    let discount_range = item["on_invoice_range"] ? item["on_invoice_range"] : item["off_invoice_range"];
    let progressPercent = Math.ceil(((item["purchased"] || 0) / item["max_limit"]) * 100);
    let progressPercentSelected = Math.ceil(((parseInt(item["purchased"] || 0) + parseInt(item["selected"])) / item["max_limit"]) * 100);
    
    
    let aggregateSelectedProgress = 0;
    let aggregateInvertedProgress = 0;
    let inverted = parseInt(item["purchased"]) || 0;
    let selected = parseInt(item["purchased"] || 0) + parseInt(item["selected"]);
    let backgroundProgressWidth = Number(item["max_limit"])/discount_range.length;
    let backgroundProgressPerc = (backgroundProgressWidth/Number(item["max_limit"])) * 100;

    let isLabelReached = false;
    let addBtn = `
        ${basicProgress ?
            ""
            :
            `
                <label style="font-size: 12px;">${parseInt(item["purchased"] || 0) + parseInt(item["selected"]) > parseInt(item["max_limit"]) ? parseInt(item["max_limit"]) : parseInt(item["selected"])}</label>
                <div class="progressbar_wrapper addproduct" skudata=${`${item["sku"]}`} >
                    <!--<div class="main reset" style="cursor: pointer;">
                        <img src="/gskd/assets/images/svg/plus.svg" class="icon_add"/>
                    </div>-->
                    <div class="main reset rounded_btn">
                        <div class="inner">
                        </div>
                    </div>
                </div>
            `
        }
    `;

    let rangeDataDivs = discount_range.map((range, index) => {
        if(index === 0) {
            let diff = Number(discount_range[index]["label"]) - 0;
            let blockRatio = backgroundProgressWidth/diff;
            if (selected > 0) {
                if(selected > Number(discount_range[index]["label"])) {
                    aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                    // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
                } else {
                    aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - 0));
                    // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - 0));
                }
                
            }

            if (inverted > 0) {
                if(inverted > Number(discount_range[index]["label"])) {
                    // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                    aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
                } else {
                    // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - 0));
                    aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - 0));
                }
                
            }
            if((Number(item["purchased"] || 0) + Number(item["selected"])) < range["label"]) {
                isLabelReached = true;
            } else {
                isLabelReached = false;
            }
            return `<div class="sub-block ${isLabelReached ? "withmarkings" : "withoutmarkings"}" style="width: ${backgroundProgressPerc}%;"></div>`;
        }
        if((Number(item["purchased"] || 0) + Number(item["selected"])) < range["label"]) {
            isLabelReached = true;
        } else {
            isLabelReached = false;
        }
        if (index === discount_range.length - 1) {
            let diff = Number(discount_range[index]["label"]) - Number(discount_range[index - 1]["label"]);
            let blockRatio = backgroundProgressWidth/diff;
            if (selected > Number(discount_range[index - 1]["label"])) {
                if(selected >= Number(discount_range[index]["label"])) {
                    aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                    // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
                } else {
                    aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - Number(discount_range[index - 1]["label"])));
                    // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - Number(discount_range[index - 1]["label"])));
                }
            }

            if (inverted > Number(discount_range[index - 1]["label"])) {
                if(inverted >= Number(discount_range[index]["label"])) {
                    // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                    aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
                } else {
                    // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - Number(discount_range[index - 1]["label"])));
                    if(inverted > Number(discount_range[index - 1]["label"])) {
                        aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - Number(discount_range[index - 1]["label"])));
                    }
                }
            }
            return `<div class="sub-block ${isLabelReached ? "withmarkings" : "withoutmarkings"}" style="width: ${backgroundProgressPerc}%;"></div>`;
        }
        let diff = Number(discount_range[index]["label"]) - Number(discount_range[index - 1]["label"]);
        let blockRatio = backgroundProgressWidth/diff;
        if (selected > Number(discount_range[index - 1]["label"])) {
            if(selected > Number(discount_range[index]["label"])) {
                aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
            } else {
                aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - Number(discount_range[index - 1]["label"])));
                // aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - Number(discount_range[index - 1]["label"])));
            }

            if(inverted > Number(discount_range[index]["label"])) {
                // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * diff);
                aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * diff);
            } else {
                // aggregateSelectedProgress = aggregateSelectedProgress + (blockRatio * (selected - Number(discount_range[index - 1]["label"])));
                if(inverted > Number(discount_range[index - 1]["label"])) {
                    aggregateInvertedProgress = aggregateInvertedProgress + (blockRatio * (inverted - Number(discount_range[index - 1]["label"])));
                }
            }
        }
        return `<div class="sub-block ${isLabelReached ? "withmarkings" : "withoutmarkings"}" style="width: ${backgroundProgressPerc}%;"></div>`;
    });

    // console.log("aggregate progress --> ", aggregateSelectedProgress);
    // console.log("aggregateInvertedProgress progress --> ", aggregateInvertedProgress);
    rangeDataDivs = rangeDataDivs.join("");
    let aggregateSelectedProgressPerc = (aggregateSelectedProgress/Number(item["max_limit"])) * 100;
    let aggregateInvertedProgressPerc = (aggregateInvertedProgress/Number(item["max_limit"])) * 100;

    return `
        <div class="progressbar flex">
            <div class="wrapper_brand_progress" style="width: ${detailed ? '5' : '0'}%;"></div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '75' : basicProgress ? '100' : '90'}%;">
                <label class="${detailed ? "abs" : ""} ${!hideAdd ? "" : "hide"}">${!hideAdd ? item["name"] : ""}</label>
                ${detailed ? getProgressHeaderFooterLabels(item, "header") : ""}
                <div class="progressbar_wrapper">
                    <div class="main">
                        
                    </div>
                    ${!hideSelectedProgress ? getInvertedProgress(item, aggregateInvertedProgressPerc, colorscheme) : ""}
                    ${initial === "init" ? "" : getSelectedProgress(item, aggregateSelectedProgressPerc, "#f36633", hideSelectedProgress)}
                    <div class="progressbar_ratio inverted" style="width:${100}%; background: transparent !important;">
                        <div class="main" style="background: transparent;">
                            ${rangeDataDivs}
                        </div>
                        ${!detailed ? '' : `<div class="quantity_total">${parseInt(item["purchased"] || 0) + parseInt(item["selected"]) > parseInt(item["max_limit"]) ? parseInt(item["max_limit"]) : (parseInt(item["purchased"]) || 0) + parseInt(item["selected"]) }</div>`}
                    </div>
                </div>
                ${detailed ? getProgressHeaderFooterLabels(item, "footer") : ""}
            </div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '10' : basicProgress ? '0' : '10'}%; padding-left: ${hideAdd ? "0px" : basicProgress ? '0px' : "4%"}; font-size: 12px;">
                ${hideAdd ? `` : addBtn}
            </div>
        </div>
    `;
}

function getInvertedProgress(item, progressPercent, colorscheme) {
    // console.log("progressPercent -> ", progressPercent, "<-- ", item);
    if (progressPercent) {
        return `
            <div class="progressbar_ratio inverted" style="width:${Math.abs(progressPercent)}%; background: ${colorscheme} !important;">
                <div class="ratio_wrapper">
                    <div class="ratio">${item["purchased"] || 0}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}

function getSelectedProgress(item, progressPercentSelected, colorscheme, hideSelectedProgress) {
    let progressValue = ((parseInt(item["purchased"])|| 0) + parseInt(item["selected"])) > item["max_limit"] ;
    console.log("progressValue -> ", progressValue);
    if(progressValue) {
        return `
            <div class="progressbar_ratio" style="width:${Math.abs(progressPercentSelected)}%; background: ${colorscheme} !important; border-top-right-radius: ${Number(progressPercentSelected) >= 100 ? '6px': '10px'}; border-bottom-right-radius: ${Number(progressPercentSelected) >= 100 ? '6px': '10px'};">
                <div class="ratio_wrapper">
                    <div class="ratio">${!hideSelectedProgress ? "+" : ""} ${parseInt(item["max_limit"])}</div>
                </div>
            </div>
        `;
    }
    if (progressPercentSelected) {
        return `
            <div class="progressbar_ratio" style="width:${Math.abs(progressPercentSelected)}%; background: ${colorscheme} !important; border-top-right-radius: ${Number(progressPercentSelected) >= 100 ? '6px': '10px'}; border-bottom-right-radius: ${Number(progressPercentSelected) >= 100 ? '6px': '10px'};">
                <div class="ratio_wrapper">
                    <div class="ratio">${!hideSelectedProgress ? "+" : ""} ${parseInt(item["selected"])}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}