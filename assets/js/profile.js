function loadEditProfile() {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    loadProfileOptions();
    $("#content_box").empty();
    ToApp("user-details", { ...localStoredData });
    ToBot("profile-settings", {});
}

function loadUserProfile(data) {
    let profile_details = data["profileDetails"];
    let associated_accounts = data["associatedAccounts"];
    let notification = data["notifications"];
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];

    $("#content_box").append(`
        <div class="profile_section_container">
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">${locale["labels"]["profileDetails"]}</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">${locale["labels"]["associatedAccounts"]}</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content profile_details">
                        
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">${locale["labels"]["notification"]}</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    `);

    $(".accordion-item-header.parent").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let textContent = $(this).text();
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            if (textContent === "Profile Details" || textContent === "Detalhes de perfil") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                bodyContentNode.empty();
                bodyContentNode.append(`
                    <div class="block">
                        <div class="label">${locale["labels"]["firstName"]}</div>
                        <div class="info">${profile_details["firstName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">${locale["labels"]["lastName"]}</div>
                        <div class="info">${profile_details["lastName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">${locale["labels"]["mobileNumber"]}</div>
                        <div class="info">${profile_details["countryDialCode"] ? `+${profile_details["countryDialCode"]}` : ''} ${profile_details["phoneNumber"] ? profile_details["phoneNumber"] : '-'}</div>
                    </div>
                    <div class="block">
                        <div class="label">${locale["labels"]["email"]}</div>
                        <div class="info">${profile_details["email"] ? profile_details["email"] : '-'}</div>
                    </div>
                `);
                ToBot("profile-details", {});
            }
            if (textContent === "Associated Accounts" || textContent === "contas associadas") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                bodyContentNode.empty();
                bodyContentNode.append(`
                    <div class="accordian_upperwrapper profile_details"></div>
                    <div class="place_order profile">
                        <button class="btn outline profile_details">
                            <span class="icon" style="display: inline-block">
                                <svg fill="none" height="14" viewBox="0 0 18 14" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="#f36633"><path d="m4.32952 6.79547c-.03747-.22227-.17111-.30138-.26229-.40938-.95176-1.13396-1.2153-2.41359-.72693-3.80247.49961-1.41148 1.51881-2.226479 2.98891-2.5228403 1.66495-.3352907 3.94939.7170443 4.38029 3.1469603.3473 1.97407-.84806 3.85145-2.85898 4.37008-.49961.12557-1.03045.11302-1.54754.16702-2.92646.3064-4.71131 2.81796-4.82248 4.74176.2011.157.43966.0779.65824.0791 2.49804.0067 4.99609.0067 7.49413 0 .20737-.017.41613-.0004.61823.049.326.1055.4909.3077.4996.6342.0128.1469-.0247.2938-.1062.4164s-.2022.2136-.3422.2579c-.1777.0593-.36513.0836-.55202.0716h-8.74316c-.103968.0069-.208281.0069-.312252 0-.479625-.0653-.68821142-.2976-.69445653-.7936-.01458937-1.3026.35909553-2.5798 1.07290853-3.66689.6926-1.10277 1.68288-1.98473 2.85527-2.54294.12865-.06278.25605-.12809.40093-.1959zm2.62295-.51863c.64019-.00363 1.25308-.26119 1.70542-.71668s.70757-1.07209.71019-1.71575c.00344-.48542-.13691-.96089-.40319-1.36583-.26627-.40494-.64641-.72102-1.092-.90798-.44558-.18696-.93643-.23633-1.41002-.14183s-.90848.3286-1.24927.67248-.57205.78196-.66433 1.25845c-.09227.47649-.04138.96981.14619 1.41711.18757.44731.50333.82836.90706 1.0946s.87714.40563 1.35994.40041z"/><path d="m12.7785 9.52553c0-.82265-.0099-1.59857 0-2.37081-.0084-.16614.0468-.32925.1545-.45638.1077-.12714.2599-.20882.4257-.22855.1533-.0234.3101.00569.4446.08253.1346.07684.239.19688.2962.34048.0366.13745.0516.27974.0444.42178v1.6576c0 .15986-.0358.32586.0642.55335h1.9185c.2047-.01509.4105.00192.6099.05042.1421.03076.2691.10977.3592.2235.09.11373.1376.25515.1346.39995.0111.348-.1518.5595-.4938.6788-.1787.0469-.364.0635-.5482.0492-.6568 0-1.3123 0-2.037 0v1.7916c0 .1844.0074.3689 0 .5521-.0235.4341-.2951.7243-.6728.7292-.3778.0049-.6753-.2877-.6877-.712-.016-.573 0-1.146-.0074-1.7215 0-.1992.0519-.407-.0667-.6394h-2.0148c-.1845.0113-.3696-.0095-.5469-.0615-.139-.0401-.26024-.1258-.34407-.2432-.08384-.1175-.1253-.2597-.11765-.4036 0-.31237.16296-.52387.47162-.637.1977-.05555.4038-.07554.6086-.05903.6519.00123 1.3037.00246 2.005.00246z"/></g></svg>
                            </span>
                            ${locale["labels"]["addAccount"]}
                        </button>
                    </div>
                `);
                associated_accounts.map(account => {
                    let className = "";
                    if (account["wholeSalerStatus"]?.toLowerCase() === "active") {
                        className = "success"
                    }
                    $(".accordian_upperwrapper").append(`
                        <div class="accordion associated_accounts">
                            <div class="accordion-item profile">
                                <div class="accordion-item-header inner profile" data=${encodeURIComponent(JSON.stringify(account))}>
                                    <div class="flex" style="width: calc(100% - 50px);">
                                        <div class="account_name">${account["wholeSalerName"]}</div>
                                        <div class="account_status ${className}">${account["wholeSalerStatus"] ? account["wholeSalerStatus"] : "ACTIVE"}</div>
                                    </div>
                                </div>
                                <div class="accordion-item-body inner">
                                    <div class="block"><span class="label">Wholesaler Name:&nbsp;&nbsp;&nbsp;</span><span class="info">${account["wholeSalerName"]}</span></div>
                                    <div class="accordion-item-body-content inner profile">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
                });
                $(".btn.outline.profile_details").click(function (e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    ToBot("addaccount-associatedaccounts", {});
                });
                $(".accordion-item-header.inner").click(function (e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    let scrollHeightAccordionInner = "";
                    let currentElementData = $(this).attr("data");
                    let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                    let accordionItemBodyInner = $(this).siblings(".accordion-item-body.inner");
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active");
                        let bodyContentNodeInner = $(accordionItemBodyInner).children(".accordion-item-body-content.inner");
                        bodyContentNodeInner.empty();
                        bodyContentNodeInner.append(`
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row bordered">
                                        <td class="info_data title" colspan="4">Account <br/>Number</td>
                                        <td class="info_data title" colspan="2">Legal <br/>ID</td>
                                        <td class="info_data title" colspan="1">Download <br/>Invoice</td>
                                    </tr>
                                </thead>
                                <tbody class="accordian_account_detailed">
                                    
                                </tbody>
                            </table>
                        `);
                        console.log("parsedCurrentElementData ", parsedCurrentElementData);
                        parsedCurrentElementData["accounts"].map(accountDetails => {
                            let classValue = "success";
                            if ((accountDetails["accountStatus"] === "ACTIVE") || (accountDetails["accountStatus"] === "VERIFIED")) {
                                classValue = "success";
                            }
                            if (accountDetails["accountStatus"] === "IN_ACTIVE") {
                                classValue = "failed";
                            }
                            if (accountDetails["accountStatus"] === "PENDING_VERIFICATION") {
                                classValue = "warning";
                            }

                            let accountDetailed = $(accordionItemBodyInner).children(".accordion-item-body-content.inner").children(".accordian.table").children(".accordian_account_detailed");
                            accountDetailed.append(`
                                <tr class="info_row bordered">
                                    <td class="info_data" colspan="4">
                                        <span class="inline_block top delete" acc="${encodeURIComponent(JSON.stringify(accountDetails))}" elData=${encodeURIComponent(JSON.stringify(parsedCurrentElementData))}>
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.2494 3.75583H1.13036C0.866163 3.75583 0.601781 3.75695 0.337399 3.75583C0.119288 3.75471 0.00286308 3.63829 0.00155703 3.42129C0.000250978 3.23789 0.00155703 3.05429 0.00155703 2.87089C0.00155703 2.61527 0.1094 2.50575 0.36352 2.50557C1.31507 2.50557 2.26662 2.50613 3.21818 2.50725C3.3027 2.50725 3.34244 2.48392 3.3749 2.40425C3.58331 1.89508 3.78537 1.38311 4.01356 0.882704C4.2619 0.337521 4.7039 0.0272405 5.30095 0.015486C6.34841 -0.00516201 7.39623 -0.00516201 8.44443 0.015486C9.02283 0.026121 9.46259 0.319609 9.70981 0.842963C9.95236 1.35661 10.1576 1.8878 10.3748 2.41377C10.4048 2.48654 10.4433 2.50706 10.5194 2.50706C11.4523 2.5047 12.3852 2.5042 13.3181 2.50557C13.3554 2.50557 13.3927 2.50557 13.43 2.50557C13.6179 2.51266 13.7334 2.62143 13.7382 2.80913C13.7438 3.02052 13.7435 3.2321 13.7382 3.4435C13.7339 3.64108 13.6181 3.75303 13.419 3.75508C13.1516 3.75788 12.8841 3.75508 12.6167 3.75508C12.4913 3.75508 12.4911 3.75508 12.4911 3.88289C12.4911 6.70943 12.4911 9.53598 12.4911 12.3625C12.4911 12.636 12.4967 12.9101 12.4833 13.1835C12.4566 13.7193 12.2579 14.186 11.8842 14.5737C11.6118 14.8561 11.2808 14.9972 10.884 14.9963C9.38815 14.9927 7.89253 14.9948 6.39692 14.9948C5.24013 14.9948 4.08334 14.9849 2.92655 14.9989C2.34555 15.006 1.92761 14.7513 1.61192 14.2899C1.36153 13.9244 1.25145 13.5135 1.25107 13.0747C1.24871 11.1313 1.24821 9.18789 1.24958 7.24448V3.75546L1.2494 3.75583ZM2.50134 3.75583V12.9168C2.50134 12.9635 2.50134 13.0101 2.50339 13.0566C2.51262 13.2468 2.56801 13.432 2.66478 13.596C2.72374 13.6958 2.79931 13.7453 2.92804 13.7453C5.55831 13.7412 8.18851 13.7412 10.8186 13.7453C10.9433 13.7453 11.0153 13.6967 11.0746 13.6003C11.1995 13.3977 11.2409 13.176 11.2407 12.9409C11.2396 9.92207 11.2396 6.90329 11.2407 3.88457C11.2407 3.75583 11.2407 3.75564 11.1075 3.75564H2.50209L2.50134 3.75583ZM4.69886 2.4953H9.04615C9.03701 2.4675 9.03216 2.44959 9.02525 2.43261C8.88507 2.09043 8.74476 1.74837 8.60433 1.40643C8.56123 1.30213 8.47727 1.25997 8.36738 1.25997C7.37291 1.25997 6.37838 1.25997 5.38379 1.25997C5.26401 1.25997 5.18621 1.31594 5.14124 1.42583C5.00224 1.76168 4.86137 2.0964 4.72051 2.43168C4.71155 2.4509 4.7067 2.47086 4.69886 2.4953Z" fill="#F36633"/>
                                            </svg>
                                        </span>
                                        <span class="inline_block">
                                            <div>${accountDetails["accountNumber"]}</div>
                                            <div class=${classValue}>${accountDetails["accountStatus"]}</div>
                                        </span>
                                    </td>
                                    <td class="info_data" colspan="2">${accountDetails["legalIdCode"]}</td>
                                    <td class="info_data" colspan="1">
                                        <span class="upload_icon" uri=${accountDetails["invoice"]}>
                                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.96977 9.82795L8.94682 5.85017C9.09175 5.70227 9.32915 5.69984 9.47705 5.84482C9.625 5.98974 9.62738 6.22714 9.48245 6.37504C9.48067 6.37687 9.47888 6.37866 9.47705 6.3804L5.50005 10.3582C5.20781 10.6513 5.20781 11.1257 5.50005 11.4188C5.79672 11.7022 6.26387 11.7022 6.56059 11.4188L12.3943 5.58503C13.2729 4.70627 13.2728 3.28161 12.394 2.40303C11.5152 1.52444 10.0905 1.52458 9.21196 2.40339L2.84795 8.76741C1.38365 10.2319 1.38379 12.6062 2.84831 14.0705C4.31284 15.5348 6.68712 15.5347 8.15141 14.0701L12.6595 9.56282C12.8044 9.41491 13.0418 9.41253 13.1897 9.55746C13.3376 9.70244 13.34 9.93983 13.1951 10.0877C13.1933 10.0895 13.1915 10.0913 13.1897 10.0931L8.68169 14.6004C7.8399 15.4474 6.69417 15.9222 5.50005 15.9188C3.01476 15.9188 1 13.9041 1 11.4188C1 10.2255 1.47397 9.08102 2.31767 8.23713L8.68169 1.87312C9.85631 0.704633 11.7558 0.709622 12.9242 1.8842C14.0883 3.05433 14.0884 4.94499 12.9246 6.11531L7.09087 11.949C6.49733 12.5156 5.56331 12.5156 4.96977 11.949C4.38406 11.3636 4.38434 10.4137 4.96977 9.82795ZM4.96977 9.82795V9.82795Z" stroke="#F36633"/>
                                            </svg>
                                        </span>
                                    </td>
                                </tr>
                            `);
                        });
                        $(".inline_block.top.delete").click(function (e) {
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            let decodedData = JSON.parse(decodeURIComponent($(this).attr("acc")));
                            let decodedElData = JSON.parse(decodeURIComponent($(this).attr("elData")));
                            let mergedData = { ...decodedData, ...decodedElData };
                            ToBot("delete", mergedData);
                        });
                        $(".upload_icon").click(function (e) {
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            downloadFile($(this).attr("uri"), 'invoice.pdf');
                        });
                        scrollHeightAccordionInner = accordionItemBodyInner.prop('scrollHeight') + "px";
                        accordionItemBodyInner.css("maxHeight", scrollHeightAccordionInner);
                        accordionItemBody.css("maxHeight", `${accordionItemBody.prop('scrollHeight') + accordionItemBodyInner.prop('scrollHeight')}px`);
                    } else {
                        $(this).removeClass("active");
                        accordionItemBodyInner.css("maxHeight", 0);
                    }
                });
                ToBot("associated-accounts", {});
            }
            if (textContent === "Preferences" || textContent === "Preferências") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                $(this).addClass("notification");
                if (notification == "yes") {
                    $(this).addClass("notification_success");
                } else {
                    $(this).addClass("notification_failed");
                }
                ToBot("notification", {});
            }
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        }
        else {
            $(this).removeClass("active");
            $(this).removeClass("notification");
            accordionItemBody.css("maxHeight", "0");
        }
    })
}

function loadProfileOptions() {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    let elementIsActive = $("#profile_setting_card").hasClass("active");
    if (elementIsActive) {
        $("#profile_setting_card").removeClass("active");
        $("#profile_setting_card").empty();
        $("#profile_setting_card").hide();
    } else {
        $("#profile_setting_card").addClass("active");
        $("#profile_setting_card").show();
        $("#profile_setting_card").append(`
            <div class="order_card menu" tabindex=0>
                <div class="title">
                    <div class="info cta" onclick="loadEditProfile()">${locale["labels"]["profileSettings"]}</div>
                </div>
                <div id="logout" class="info cta">${locale["buttons"]["logOut"]}</div>
            </div>
        `);
    }

    $("#logout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        logoutApp();
    });
}
