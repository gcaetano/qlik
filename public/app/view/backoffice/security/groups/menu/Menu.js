
Ext.define('QT.view.backoffice.security.groups.menu.Menu',{
    extend: 'Ext.menu.Menu',    
    alias: 'widget.backoffice-security-groups-menu',
    
    requires: [
        'QT.view.backoffice.security.groups.menu.MenuController',
        'QT.view.backoffice.security.groups.menu.MenuModel',
        'QT.util.Glyphs'
    ],

    controller: 'backoffice-security-groups-menu',
    viewModel: {
        type: 'backoffice-security-groups-menu'
    },

    items: [
        {
            xtype: 'tbseparator'
        },
        {
            itemId: 'addSubGroup',
            reference: 'addSubGroup',
            text: $.t('app.new sub-group'),
            glyph: QT.util.Glyphs.getGlyph('group'),
            listeners : {
                click: 'onAddSubGroup'
            }
        },
        {
            itemId: 'editGroup',
            reference: 'editGroup',
            text: $.t('app.edit group'),
            glyph: QT.util.Glyphs.getGlyph('edit'),
            listeners : {
                click: 'onEditGroup'
            }
        },
        {
            itemId: 'delGroup',
            reference: 'delGroup',
            text: $.t('app.delete group'),
            glyph: QT.util.Glyphs.getGlyph('remove'),
            listeners : {
                click: 'onDeleteGroup'
            }
        }, {
            itemId: 'addUser',
            reference: 'addUser',
            text: $.t('app.add user'),
            glyph: QT.util.Glyphs.getGlyph('add_user'),
            listeners : {
                click: 'onAddUser'
            }
        }, {
            itemId: 'editUser',
            reference: 'editUser',
            text: $.t('app.edit user'),
            glyph: QT.util.Glyphs.getGlyph('edit'),
            listeners : {
                click: 'onEditUser'
            }
        },{ 
            itemId: 'delUser',
            reference: 'delUser',
            text: $.t('app.delete user'),
            glyph: QT.util.Glyphs.getGlyph('del_user'),
            listeners : {
                    click: 'onDelUser'
            }
        }
    ]
});