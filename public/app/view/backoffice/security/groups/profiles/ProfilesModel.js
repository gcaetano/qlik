Ext.define('QT.view.backoffice.security.groups.profiles.ProfilesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.backoffice-security-groups-profiles',
    request : [
        'QT.model.Profiles'
    ],

    stores: {
        Profiles: {
            autoLoad: false,
            model: 'QT.model.Profiles'
        }
    }
});
