VSS.register("sample-pr-status-action-provider", {
    execute: function (actionArgs) {
        alert("execute: " + (JSON.stringify(actionArgs) || "").substr(0, 100));
    },
    getMenuItems: function (context) {
        var menuItems = [];
        menuItems.push({
            title: "Queue release",
            action: function (actionContext) {
                alert("action: " + context.status.description);
            },
            disabled: false,
            separator: false,
            childItems: null,
            icon: "css://bowtie-icon bowtie-status-run-outline"
        });

        return menuItems;
    }
});