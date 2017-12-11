Ext.define('QT.view.backoffice.security.groups.menu.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.backoffice-security-groups-menu',

    requires: [
        'QT.view.window.group.Group',
        'QT.util.Glyphs'
    ],

    onAddGroup: function () {
        var me = this;
        var window = QT.view.window.group.Group.getWindow();
        var title = $.t('app.new group');
        var glyph = QT.util.Glyphs.getGlyph('group');
        window.setTitle(title);
        window.setGlyph(glyph);
        
        QT.view.window.group.Group.hideButtons(window);
        var button = window.lookupReference('buttonSave');
        if (button) button.show();

        window.show();
    },

    onEditGroup: function (nenu, item, e, eOpts) {
        // var me = this;
        // var group = Owl.util.TreeGroup.getSelectedItem();
        // if (group) {
        //     var data = group.getData();

        //     var window = QT.util.Windows.getGroupWindow();
        //     var title = Ext.String.format('{0} [{1}]', $.t('app.edit group'), data.text);
        //     var glyph = QT.util.Glyphs.getGlyph('edit');
        //     window.setTitle(title);
        //     window.setGlyph(glyph);

        //     QT.util.Windows.hideButtons(window);
        //     var button = window.lookupReference('buttonEdit');
        //     if (button) button.show();

        //     var form = window.down('form').getForm();
        //     var selection = me.getTreeSelectedItem();
        //     form.loadRecord(selection);

        //     window.show();
        // }
    },

    onAddSubGroup: function (menu, item, e, eOpts) {
        console.log('onAddSubGroup not implemented');
    },

    onAddUser: function (menu, item, e, eOpts) {
        // var me = this;
        // var glyph = Owl.util.Glyphs.getGlyph('add_user');
        // var window = Owl.util.Windows.getUserWindow(title, glyph);

        // me.hideButtons(window);
        // var save = window.lookupReference('buttonSave');
        // if (save) save.show();

        // // set the selected group to combo
        // var selection = me.getTreeSelectedItem();
        // var tab = window.lookupReference('userBasicPanel');
        // if (selection && tab) {
        //     var cbxGroup = tab.lookupReference('group');
        //     cbxGroup.setValue(selection.get("_id"));

        //     var title = Ext.String.format("{0} [{1}]", $.t('app.add user'), selection.get("alias"));

        //     window.setTitle(title);
        //     window.setGlyph(glyph);
        //     window.show();
        // }
    },

    onEditUser: function (menu, item, e, eOpts) {
        // var me = this;
        // var glyph = Owl.util.Glyphs.getGlyph('edit');
        // var title = $.t('app.edit user')
        // var window = QT.util.Windows.getUserWindow();

        // window.setTitle(title);
        // window.setGlyph(glyph);
        // window.show();

        // me.hideButtons(window);
        // var edit = window.lookupReference('buttonEdit');
        // if (edit) edit.show();

        // var form = window.down('form').getForm();
        // var selection = me.getTreeSelectedItem();
        // form.loadRecord(selection);
    },

    onDelUser: function (menu, item, e, eOpts) {
        var me = this;

        // Ext.Msg.show({
        //     title: 'Remove',
        //     width: 320,
        //     height: 120,
        //     msg: 'Removing user, do you confirm?',
        //     closable: false,
        //     buttons: Ext.Msg.YESCANCEL,
        //     buttonText: { yes: 'Yes', cancel: 'Cancel' },
        //     fn: function (btn, inputText, showConfig) {
        //         if (btn === 'yes') {
        //             Ext.getBody().mask('Please whait!');
        //             var user = QT.util.TreeGroup.getSelectedItem(); // here is the group   
        //             if (user) {
        //                 var idUser = user.data._id;
        //                 var idGroup = user.parentNode.data._id;
        //                 Ext.Ajax.request({
        //                     url: Ext.String.format('/users/{0}/{1}', idUser, idGroup),
        //                     method: 'DELETE',
        //                     scope: me,
        //                     success: 'onRemoveUserSuccess',
        //                     failure: 'onRemoveUserFailure'
        //                 });
        //             }
        //         }
        //     }
        // });
    }
});
