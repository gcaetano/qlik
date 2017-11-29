
Ext.define('QT.view.fleet.map.Map',{
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.fleet-map',
    region: 'center',
    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Fit',
        'QT.view.fleet.map.MapController',
        'QT.view.fleet.map.MapModel'
    ],

    controller: 'fleet-map',
    viewModel: {
        type: 'fleet-map'
    },

    border: false,
    center: {
        lat: 15,
        lng: 10
    },

    mapOptions: {
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        zoom: 3
    }
});
