Ext.define('QT.view.backoffice.security.groups.tree.TreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.backoffice-security-groups-tree',
    
    requires: [
        'QT.view.backoffice.security.groups.menu.Menu',
        'QT.store.TreeGroups'
    ],

    showContextMenu : function (view, record, item, index, event, eOpts){
        var menu =  Ext.create({xtype: 'backoffice-security-groups-menu'});
        // var isUser = record.get('user');
        // var hasChildren = record.get('children');
        // //not implemented.
        // var addSubGroupItem =  menu.lookupReference('addSubGroup');
        // addSubGroupItem.setDisabled(true);
        

        // var delGroupItem =  menu.lookupReference('delGroup');
        // delGroupItem.setDisabled(isUser || hasChildren && hasChildren.length > 0);

        // var editGroupItem =  menu.lookupReference('editGroup');
        // editGroupItem.setDisabled(isUser);
        
        // // It's supose to add a user inner a group.
        // var addUserItem =  menu.lookupReference('addUser');
        // addUserItem.setDisabled(isUser);

        // // It's supose to edit an specific user
        // var editUserItem =  menu.lookupReference('editUser');
        // editUserItem.setDisabled(!isUser);

        // // It's supose to delete an specific user
        // var deleteUserItem =  menu.lookupReference('delUser');
        // deleteUserItem.setDisabled(!isUser);

        menu.showAt(event.getXY());
        event.stopEvent();
    },
    statics : { 
        load : function(tree){
            var store = Ext.create('QT.store.TreeGroups');
            if (store !== undefined) {
                store.load(function (records, op, success) { //#3                    
                    Ext.each(records, function (item) { //#4    
                        var node = { 
                            user: false,
                            text: item.get('alias'),
                            glyph: QT.util.Glyphs.getGlyph('group'),
                            _id: item.get('_id'),
                            id: item.get('_id')
                        };
                        tree.getRootNode().appendChild(node); //#14
                    });
                });
            }
        },
        
        getSelectedItem: function () {
            var trees = Ext.ComponentQuery.query('treepanel#treeGroups');
            var selection;
            if (trees && trees.length > 0) {
                var treeGroups = trees[0];
                var items = treeGroups.getSelectionModel().selected.items;
                selection = items[0];
            }
            return selection;
        },

        reload : function(){
            var tree = Ext.ComponentQuery.query('treepanel#treeGroups')[0];
            var root = tree.getRootNode();
            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }
            QT.util.TreeGroup.load(tree);
        }
    }
});
