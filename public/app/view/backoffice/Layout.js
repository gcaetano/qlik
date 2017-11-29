
Ext.define('QT.view.backoffice.Layout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.backoffice-layout',
    
    requires: [
        'QT.view.backoffice.security.Layout'
    ],

    items: [
        {
            xtype: 'backoffice-security-layout'
        },
        {
            xtype: 'panel',
            title: 'Make'
        },
        {
            xtype: 'panel',
            title: 'Events'
        }
    ]
});
