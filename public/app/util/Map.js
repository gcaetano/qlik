Ext.define('QT.util.Map', {
    config: {
        markers: []
    },

    statics : {
        addMarker: function (_marker) {
            var mid = _marker.mid;
            var markers = QT.map.getMarkers();
            if (markers) {
                markers[mid] = _marker;
            }
        },

        updateMap: function(_map){
            var markers = QT.map.getMarkers();
            markers.forEach(function(_marker){
                _map.addMarker(_marker);
            });
            // _map.setZoom(7);
        }
    }
});
