
module.exports = {
    presets: [
        [ "@babel/preset-env", {
            targets: { electron: process.versions.electron || process.env.ELECTRON_VERSION || "6.1.12" },
            modules: 'commonjs',
        }]
    ],
    sourceMaps: "inline",
    plugins: [
        "@babel/plugin-proposal-class-properties",
    ],
}
