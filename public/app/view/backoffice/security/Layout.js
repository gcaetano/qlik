
Ext.define('QT.view.backoffice.security.Layout',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.backoffice-security-layout',
    
    requires: [
        'QT.view.backoffice.security.groups.Layout',
        'QT.view.backoffice.security.panel.Layout',
        'QT.util.Glyphs'
    ],

    layout: {
        type: 'border'
    },
    border: false,
    title : $.t('app.security'),
    glyph: QT.util.Glyphs.getGlyph('shield'),
    items: [
        {
            xtype: 'backoffice-security-groups-layout'
            // xtype: 'panel'
        },
        {            
            // xtype: 'backoffice-security-panel-layout'
            xtype: 'panel',
            region: 'center',
            html: 'Permissions'
        }
    ]
});
