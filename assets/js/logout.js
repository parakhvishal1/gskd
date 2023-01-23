function logoutApp() {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    $("#logout_option").empty();
    $(`#logout_option`).append(`
        <div class="logout_screen_overlay">
            <div class="dialog_box">
                <div class="modal_content">
                    <div class="modal-content">
                        <div class="modal_header">
                            <h4>${locale["buttons"]["logOut"]}</h4>
                        </div>
                        <div class="modal_body">${locale["labels"]["logOutPopupTitle"]}</div>
                        <div class="modal_footer">
                            <button id="modal_yes" class="btn btn-primary btn-block">${locale["labels"]["yes"]}</button>
                            <button id="modal_no" class="btn btn-primary btn-block">${locale["labels"]["no"]}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    $("#modal_yes").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        removeHeader();
        loadProfileOptions();
        $("#logout_option").empty();
        ToBot("logout", {
            "timestamp": new Date().getTime(),
        });
    });

    $("#modal_no").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#logout_option").empty();
        loadProfileOptions();
    });
}