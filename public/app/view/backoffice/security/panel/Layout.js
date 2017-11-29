
Ext.define('QT.view.backoffice.security.panel.Layout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.backoffice-security-panel-layout',

    requires: [

    ],
    region: 'center',
    items: [
        {
            xtype: 'panel',
            title: 'panel 11',
            html:'foo'
        },
        {
            xtype: 'panel',
            title: 'panel 12',
            html:'bar'
        }
    ]
});
