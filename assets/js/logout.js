function logoutApp() {
    $("#logout_option").empty();
    $(`#logout_option`).append(`
        <div class="logout_screen_overlay">
            <div class="dialog_box">
                <div class="modal_content">
                    <div class="modal-content">
                        <div class="modal_header">
                            <h4>Logout</h4>
                        </div>
                        <div class="modal_body">Are you sure you want to log-off?</div>
                        <div class="modal_footer">
                            <button id="modal_yes" class="btn btn-primary btn-block">Yes</button>
                            <button id="modal_no" class="btn btn-primary btn-block">No</button>
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