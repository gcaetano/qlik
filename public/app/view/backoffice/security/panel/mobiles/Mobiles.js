
Ext.define('QT.view.backoffice.security.panel.mobiles.Mobiles',{
    extend: 'Ext.panel.Panel',

    requires: [
        'QT.view.backoffice.security.panel.mobiles.MobilesController',
        'QT.view.backoffice.security.panel.mobiles.MobilesModel'
    ],

    controller: 'backoffice-security-panel-mobiles',
    viewModel: {
        type: 'backoffice-security-panel-mobiles'
    },

    html: 'Hello, World!!'
});
