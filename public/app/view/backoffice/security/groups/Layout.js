
Ext.define('QT.view.backoffice.security.groups.Layout',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.backoffice-security-groups-layout',
    requires: [
        'QT.view.backoffice.security.groups.tree.Tree',
        'QT.view.backoffice.security.groups.profiles.Profiles'
    ],
    controller: 'backoffice-security-groups-menu',
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
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    itemId: 'refreshGroups',
                    reference: 'refreshGroups',
                    glyph: QT.util.Glyphs.getGlyph('refresh'),
                    listeners: {
                        click: 'onRefreshGroups'
                    }
                },
                '->',
                {
                    xtype: 'button',
                    itemId: 'addGroup',
                    reference: 'addGroup',
                    glyph: QT.util.Glyphs.getGlyph('plus'),
                    listeners: {
                        click: 'onAddGroup'
                    }
                }
            ]
        }
    ]
});