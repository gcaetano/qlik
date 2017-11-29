
Ext.define('QT.view.fleet.Layout',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.fleet-layout',
    requires: [
        'QT.view.fleet.LayoutController',
        'QT.view.fleet.grid.Grid',
        'QT.view.fleet.map.Map'
    ],

    controller: 'fleet-layout',
    viewModel: {
        type: 'fleet-layout'
    },
    layout: {
        type: 'border'
    },
    border: false,
    items:[
        {
            xtype: 'fleet-map'
        },
        {
            xtype: 'fleet-grid'
        }
    ]
});
