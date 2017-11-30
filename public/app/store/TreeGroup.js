Ext.define('QT.store.TreeGroups', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'QT.util.Util'
    ],

    alias: 'store.groups',

    storeId: 'treeStore',

    fields: [
        '_id', 'alias'
    ],

    autoLoad: false,

    proxy: {
        type: 'ajax',
        api: {
            read: '/groups'
        },
        reader: {
            type: 'json',
            rootProperty: 'children'
        }
    },
    listeners: {
        exception: function (proxy, response, operation) { //#6
            QT.util.Util.showErrorMsg(response.responseText);
        }
    }
});