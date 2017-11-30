
Ext.define('QT.view.backoffice.Layout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.backoffice-layout',
    
    requires: [
        'QT.view.backoffice.security.Layout',
        'QT.util.TreeGroup'
    ],

    items: [
        {
            xtype: 'backoffice-security-layout' //,
            // tabConfig: {
            //     listeners: {
            //         click: function() {
            //             alert('Clicked!')
            //         }
            //     }
            // }
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
