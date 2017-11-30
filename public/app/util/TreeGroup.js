Ext.define('QT.util.TreeGroup', {
    statics : {         
        load : function(tree){
            var store = Ext.create('QT.store.TreeGroups');
            if (store !== undefined) {
                store.load(function (records, op, success) { //#3                    
                    Ext.each(records, function (item) { //#4
                        debugger;
                        var node = { 
                            user: false,
                            text: item.get('alias'),
                            alias: item.get('alias'),
                            // leaf: item.get('users').length === 0,
                            glyph: QT.util.Glyphs.getGlyph('group'),
                            id: item.get('_id')
                        };
    
                        // if(item.data.users !== undefined) {                        
                        //     node.children = [];
                        //     Ext.each(item.data.users, function (user) { //#4
                        //         node.children.push({
                        //             user: true,
                        //             leaf: true, //#12
                        //             text: Ext.String.format("{0} {1}", user.first_name, user.last_name),
                        //             id: user._id,
                        //             username  : user.username,
                        //             first_name : user.first_name,
                        //             last_name : user.last_name,
                        //             email : user.email,
                        //             timezone : user.timezone,
                        //             profile : user.profile,
                        //             culture : user.culture,
                        //             group : user.group,
    
                        //             glyph: QT.util.Glyphs.getGlyph('user')
                        //         });
                        //     });
                        // }
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