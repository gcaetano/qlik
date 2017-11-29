
Ext.define('QT.view.fleet.grid.Grid',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.fleet-grid',
    requires: [
        'QT.view.fleet.grid.GridController',
        'QT.view.fleet.grid.GridModel'
    ],
    controller: 'fleet-grid',
    viewModel: {
        type: 'fleet-grid'
    },
    id: 'south-region-container',   
    region: 'south',    
    split: true,
    html: 'Grid!!'
});
