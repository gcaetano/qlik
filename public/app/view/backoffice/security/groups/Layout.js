
Ext.define('QT.view.backoffice.security.groups.Layout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.backoffice-security-groups-layout',
    requires: [
        'QT.view.backoffice.security.groups.tree.Tree',
        'QT.view.backoffice.security.groups.profiles.Profiles'
    ],
    width: 350,
    region: 'west',
    items: [
        {
            xtype: 'backoffice-security-groups-tree' //,
            // tabConfig: {
            //     listeners: {
            //         click: function() {
            //             alert('Clicked!')
            //         }
            //     }
            // }
        },
        {
            xtype: 'backoffice-security-groups-profiles'
            // tabConfig: {
            //     listeners: {
            //         click: function() {
            //             // var me = this;
            //             // debugger;
            //             // var grid = me.lookupReference('grid-profiles');
            //             // console.log(grid);
            //         }
            //     }
            // }
        }
    ]
});
