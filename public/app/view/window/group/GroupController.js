Ext.define('QT.view.window.group.GroupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.window-group',

    requires: [
        'QT.util.Util',
        'QT.util.TreeGroup'
    ],

    onSave: function (button, e, options) {
        Ext.getBody().mask('Please whait!');
        var form = button.up('panel').down('form');
        var me = this;

        if (form && form.isValid()) {
            form.submit({
                clientValidation: true,
                url: '/groups',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },


    onEdit: function (button, e, options) {
        Ext.getBody().mask('Please whait!');
        var form = button.up('panel').down('form');

        if (form && form.isValid()) {
            var me = this;
            var id = form.getForm().findField('_id').getValue();
            form.submit({
                clientValidation: true,
                url: '/groups/' + id,
                method: 'PUT',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function (form, action) {
        me = this;
        Ext.getBody().unmask();
        QT.util.Util.showToast('The group was created!');
        QT.util.TreeGroup.reload();
        me.onCancel();
    },

    onSaveFailure: function (form, action) {
        Ext.getBody().unmask();
        QT.util.Util.showErrorMsg('There was a server error!');
    },

    onCancel: function (button, e, options) {
        var me = this;
        me.getView().destroy();
    }

});
