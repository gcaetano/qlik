
Ext.define('QT.view.backoffice.security.groups.tree.Tree',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.backoffice-security-groups-tree',
    requires: [
        'QT.view.backoffice.security.groups.tree.TreeController',
        'QT.view.backoffice.security.groups.tree.TreeModel',
        'QT.view.backoffice.security.groups.menu.Menu'
    ],
    title: $.t('app.groups'),
    controller: 'backoffice-security-groups-tree',
    viewModel: {
        type: 'backoffice-security-groups-tree'
    },
    rootVisible: false,
    border: 0,
    autoScroll: true,
    listeners : {
        itemcontextmenu: 'showContextMenu'
    }
});
