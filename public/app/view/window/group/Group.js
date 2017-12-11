
Ext.define('QT.view.window.group.Group',{
    extend: 'Ext.window.Window',    
    alias: 'widget.window-group',
    itemId : 'windowGroup',
    requires: [
        'QT.view.window.group.GroupController',
        'QT.view.window.group.GroupModel'
    ],

    controller: 'window-group',
    viewModel: {
        type: 'window-group'
    },

    layout: {
        type: 'fit'
    },

    title : $.t('app.group'),
    height: 180, 
    width: 350,
    modal : true,
    glyph: QT.util.Glyphs.getGlyph('group'),


    items: [
        {
            bodyPadding: 15, //#15
            reference: 'form', // for this "me.lookupReference('form')"
            xtype: 'form',
            items: [
                {
                    xtype: 'hiddenfield',
                    name: '_id',
                    fieldLabel: 'Label'
                },
                {
                    xtype: 'textfield',
                    name: 'alias',
                    anchor: '100%',
                    fieldLabel: $.t('app.group'),
                    allowBlank: false
            
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'tbfill' //#25
                },
                {
                    xtype: 'button',
                    text: $.t('app.cancel'),
                    reference: 'buttonCancel',
                    glyph: QT.util.Glyphs.getGlyph('cancel'),
                    listeners: {
                        click: 'onCancel'
                    }
                },
                {
                    xtype: 'button',
                    text: $.t('app.save'),
                    reference: 'buttonSave',
                    hidden: true,                    
                    glyph: QT.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: $.t('app.edit'),
                    hidden: true,
                    reference: 'buttonEdit',
                    glyph: QT.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onEdit'
                    }
                }
            ]
        }
    ],
    statics: {
        getWindow: function () {
            var me = this;
            var ref = Ext.ComponentQuery.query('window#groupWindow');
            var window = ref.lenght > 0 ? ref[0] : Ext.create({ xtype: 'window-group' });
            return window;
        },

        hideButtons: function () {
            var window = QT.view.window.group.Group.getWindow();
            var buttons = Ext.ComponentQuery.query('button');
            if(buttons && buttons.lenght > 0){
                for(var i = 0; i < buttons.lenght; i++){
                    buttons[i].hide();
                }
            }
        }
    }
});