const { CracoAliasPlugin } = require("react-app-alias");

/** @type { import("@craco/craco/dist/types/config").CracoConfig } */
module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {},
        },
    ],
};
