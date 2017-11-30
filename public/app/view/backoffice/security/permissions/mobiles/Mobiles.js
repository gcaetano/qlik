
Ext.define('QT.view.backoffice.security.permissions.mobiles.Mobiles', {
    extend: 'Ext.panel.Panel',

    requires: [
        'QT.view.backoffice.security.permissions.mobiles.MobilesController',
        'QT.view.backoffice.security.permissions.mobiles.MobilesModel'
    ],

    controller: 'backoffice-security-permissions-mobiles',
    viewModel: {
        type: 'backoffice-security-permissions-mobiles'
    },

    html: 'Hello, World!!'
});
