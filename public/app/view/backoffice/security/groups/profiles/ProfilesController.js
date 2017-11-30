Ext.define('QT.view.backoffice.security.groups.profiles.ProfilesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.backoffice-security-groups-profiles',
    
    init: function(application) {
        this.control({
            'backoffice-security-groups-profiles': {
                render: this.onGroupsProfilesRender
            }
        });
    },
    onGroupsProfilesRender: function(view) {
        var store = view.getStore();
        store.load();
    }
});
