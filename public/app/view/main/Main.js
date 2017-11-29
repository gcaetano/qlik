/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QT.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'QT.view.main.MainController',
        'QT.view.main.MainModel',
        'QT.view.fleet.Layout',
        'QT.view.backoffice.Layout'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    layout: 'card',
    defaults: {
        border: false
    },
    border: false,

    items: [
        {
            xtype: 'fleet-layout'
        },         
        {
            xtype: 'backoffice-layout'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'label',
                    text: 'QlikT'
                },
                '|',
                {
                    xtype: 'button',
                    itemId: 'fleet',
                    text: $.t('app.title'),
                    reference: 'fleet',
                    glyph: 'xf278@FontAwesome',
                    listeners: {
                        click: 'onMapClick'
                    }
                },
                // {
                //     xtype: 'button',
                //     itemId: 'reports',
                //     text: 'Reports',
                //     reference: 'reports',
                //     iconCls: 'icon-black',
                //     glyph: 'xf0f6@FontAwesome',
                //     listeners: {
                //         click: 'onReportsClick'
                //     }
                // },
                {
                    xtype: 'button',
                    itemId: 'backOffice',
                    text: 'Backoffice',
                    reference: 'backOffice',
                    glyph: 'xf085@FontAwesome',
                    listeners: {
                        click: 'onBackOfficeClick'
                    }
                },
                '->',
                {
                    xtype: 'button',
                    itemId: 'user',
                    text: 'Giuliano',
                    reference: 'user',
                    glyph: 'xf007@FontAwesome',
                    listeners: {
                        click: 'onUserClick'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'logout',
                    reference: 'logout',
                    glyph: 'xf08b@FontAwesome',
                    listeners: {
                        click: 'onLogout'
                    }
                }
            ]
        }
    ]
});
