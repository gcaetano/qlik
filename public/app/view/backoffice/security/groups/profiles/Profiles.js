
Ext.define('QT.view.backoffice.security.groups.profiles.Profiles',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.backoffice-security-groups-profiles',
    requires: [
        'QT.view.backoffice.security.groups.profiles.ProfilesController',
        'QT.view.backoffice.security.groups.profiles.ProfilesModel'
    ],
    title: $.t('app.profiles'),
    flex: 1,
    controller: 'backoffice-security-groups-profiles',
    viewModel: {
        type: 'backoffice-security-groups-profiles'
    }
});
