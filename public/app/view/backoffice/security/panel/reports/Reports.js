
Ext.define('QT.view.backoffice.security.panel.reports.Reports',{
    extend: 'Ext.panel.Panel',

    requires: [
        'QT.view.backoffice.security.panel.reports.ReportsController',
        'QT.view.backoffice.security.panel.reports.ReportsModel'
    ],

    controller: 'backoffice-security-panel-reports-reports',
    viewModel: {
        type: 'backoffice-security-panel-reports-reports'
    },

    html: 'Hello, World!!'
});
