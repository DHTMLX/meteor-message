Package.describe({
    summary: "Custom messages, alerts and confirmations (based on dhtmlx-message)"
});

Package.on_use(function (api) {
    api.add_files([
        'css/dhtmlx_message.css',
        'lib/dhtmlx_message.js'
    ], 'client');
});
