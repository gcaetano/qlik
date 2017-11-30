
Ext.define('QT.view.backoffice.security.permissions.reports.Reports',{
    extend: 'Ext.panel.Panel',

    requires: [
        'QT.view.backoffice.security.permissions.reports.ReportsController',
        'QT.view.backoffice.security.permissions.reports.ReportsModel'
    ],

    controller: 'backoffice-security-permissions-reports-reports',
    viewModel: {
        type: 'backoffice-security-permissions-reports-reports'
    },

    html: 'Hello, World!!'
});
