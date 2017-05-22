const NotSet = 0;
const Pending = 1;
const Succeeded = 2;
const Failed = 3;
const Error = 4;

VSS.register("MS-Sample.pr-status-menu-extension-1.sample-pr-status-action-provider", {
    execute: function (actionArgs) {
        alert("execute: " + (JSON.stringify(actionArgs) || "").substr(0, 100));
    },
    getMenuItems: function (context) {
        var menuItems = [];

        menuItems.push({
            title: "Settings",
            icon: "css://bowtie-icon bowtie-settings-wrench",
            childItems: [
                {
                    title: "Update release",
                    action: function (actionContext) {
                        alert("Execute action for status " + context.status.context.name);
                    },
                },
                { title: "Update build", disabled: true }
            ]
        });

        menuItems.push({ title: "-" }); // separator

        if (context.status.state !== Pending && context.status.state !== Succeeded) {
            menuItems.push({
                title: "Queue release",
                action: function (actionContext) {
                    alert("Execute action for status " + context.status.context.name);
                },
                disabled: false,
                childItems: null,
                icon: "css://bowtie-icon bowtie-status-run-outline"
            });
        }

        if (context.status.state === Pending) {
            menuItems.push({
                title: "Restart release",
                action: function (actionContext) {
                    alert("Execute action for status " + context.status.context.name);
                },
                icon: "css://bowtie-icon bowtie-status-run-outline"
            });
        }

        return menuItems;
    }
});