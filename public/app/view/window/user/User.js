
Ext.define('QT.view.window.user.User',{
    extend: 'Ext.window.Window',
    alias: 'widget.window-user',
    itemId : 'windowUser',    
    requires: [
        'QT.view.window.user.UserController',
        'QT.view.window.user.UserModel'
    ],

    controller: 'window-user',
    viewModel: {
        type: 'window-user'
    },

    statics: {
        getWindow: function () {
            var me = this;
            var ref = Ext.ComponentQuery.query('window#userWindow');
            var window = ref.lenght > 0 ? ref[0] : Ext.create({ xtype: 'window-user' });
            return window;
        },

        hideButtons: function () {
            var window = QT.view.window.user.User.getWindow();
            var buttons = Ext.ComponentQuery.query('button');
            if(buttons && buttons.lenght > 0){
                for(var i = 0; i < buttons.lenght; i++){
                    buttons[i].hide();
                }
            }
        }
    }
});
