Ext.define('QT.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'QT.util.Util',
        'QT.util.Globals'
    ],

    alias: 'controller.main',

    init: function(application) {
        var me = this;
        var loggedIn = localStorage.getItem('owl-logged-in');
        if (loggedIn === "true"){
            // Ext.Ajax.request({
            //     url: '/security/touch/',
            //     scope: me,                  
            //     success: 'onTouchSuccess', 
            //     failure: 'onTouchFailure'  
            // });
            QT.util.SessionMonitor.start();
        } else {
           // window.location.href = "http://localhost:3000/login.html";
        }        
    },

    onLogout: function(button, e, options){
        var me = this;                  
        Ext.Ajax.request({
            url: '/security/logout',    
            scope: me,                  
            success: 'onLogoutSuccess', 
            failure: 'onLogoutFailure'  
        });
    },

    onTouchSuccess: function(conn, response, options, eOpts){
        localStorage.setItem("owl-logged-in", true);
        var data = QT.util.Util.decodeJSON(conn.responseText); 
        QT.globals = Ext.create('QT.util.Globals');
        QT.globals.setUser(data.user);
        var user = this.lookupReference('user')
        user.setText(data.user.first_name);
    },

    onTouchFailure: function(conn, response, options, eOpts){
        console.log("Session Touch Failure");
        //QT.util.Util.showErrorMsg(conn.responseText);
    },

    onLogoutFailure: function(conn, response, options, eOpts){
        QT.util.Util.showErrorMsg(conn.responseText);
    },

    onLogoutSuccess: function(conn, response, options, eOpts){ 
        localStorage.setItem("owl-logged-in", false);
        var result = QT.util.Util.decodeJSON(conn.responseText);
        if (result.success) {           
            this.getView().destroy();   
            // window.location.reload();   
            // window.location.href = "http://localhost:3000/login.html";
        } else {
            QT.util.Util.showErrorMsg(result.msg); 
        }
    },

    onMapClick: function(button, e, options){
        button.up("panel").layout.setActiveItem(0);
    },

    onBackOfficeClick : function(button, e, options){
        button.up("panel").layout.setActiveItem(1);

        // load tree groups here!
    }
});

