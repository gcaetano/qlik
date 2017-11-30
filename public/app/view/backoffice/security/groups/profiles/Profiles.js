
Ext.define('QT.view.backoffice.security.groups.profiles.Profiles',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.backoffice-security-groups-profiles',
    requires: [
        'QT.view.backoffice.security.groups.profiles.ProfilesController',
        'QT.view.backoffice.security.groups.profiles.ProfilesModel'
    ],
    bind: {
        store: '{Profiles}'
    },
    controller: 'backoffice-security-groups-profiles',
  
    viewModel: {
        type: 'backoffice-security-groups-profiles'
    },

    title: $.t('app.profiles'),
    reference: 'grid-profiles',
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'alias',
            text: $.t('app.profile'),
            flex: 1, // to stretch the column to the all available space
            headerAlign: 'center',
            align: 'left'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'level',
            text: $.t('app.level'),
            width: 50
        }
    ]
});
