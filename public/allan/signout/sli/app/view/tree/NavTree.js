var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Home", leaf: true },
            { text: "Sign-Out Records", expanded: true, children: [
                { text: "All Current Sign-Outs", leaf: true },
                { text: "All Students", leaf: true },
            ] },
            { text: "Student Sign-Out", expanded: false, children: [
                { text: "Daylight", leaf: true },
                { text: "6PM", leaf: true},
                { text: "Curfew", leaf: true},
                { text: "Overnight", leaf: true}
            ] },
            { text: "Settings", expanded: false, children: [
                { text: "Change Personal Info", leaf: true },
                { text: "Add Students", leaf: true},
            ] },
        ]
    }
});

var treenode;
var win;
var wintype;

Ext.define('Signout.view.tree.NavTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'navtree',
    requires: [
        'Ext.form.field.HtmlEditor',
        //'Ext.form.field.TextArea'
        'Ext.tab.*',
        'Ext.window.*',
        'Ext.tip.*',
        'Ext.layout.container.Border',
        'Signout.view.windows.*'
    ],
    border: 0,
    width: 640,
    height: 150,
    store: store,
    rootVisible: false,
    useArrows: true,
    colspan: 2,
    listeners: {
        itemclick: function(node, model, item, idx, e){
            var name = model.data.text;
            console.log(name);
            if(name=='Daylight' ||name=='6PM' || name=='Curfew' || name=='Overnight')
            {this.openForm(name);}
            treenode = this;
        }
    },
    openForm: function(nom){
        //var win; this must be global
        if (!win) {
            var str = 'Signout.view.windows.' + nom + 'Form';
            win = Ext.create(str);
            wintype=nom;
        }
        if (nom!=wintype) {
            var str = 'Signout.view.windows.' + nom + 'Form';
            win.hide(this, function() {
                //button.dom.disabled = false;
            });
            win = Ext.create(str);
            wintype=nom;
        }
        //button.dom.disabled = true;
        if (win.isVisible()) {
            win.hide(this, function() {
                //button.dom.disabled = false;
            });
        } else {
            win.show(this, function() {
                //button.dom.disabled = false;
            });
        }
    }
    /*
     * 0 All current signouts
     * 1 
     * 2 
     * 3
     * 4
     * 5
     * 6
     */
});


/*
    onFormSwitch: function(btn, e){
        var mainpanel = Ext.ComponentQuery.query('mainview')[0].getLayout();
        if(btn.getText() == 'Daylight')
            mainpanel.setActiveItem(0);
        else if(btn.getText() == 'After 6 PM')
            mainpanel.setActiveItem(1);
        else if(btn.getText() == 'Past Curfew')
            mainpanel.setActiveItem(2);
        else if(btn.getText() == 'Overnight')
            mainpanel.setActiveItem(3);
        else
            mainpanel.setActiveItem(4);
        /*
         * 0 daylightcard
         * 1 6pmcard
         * 2 curfewcard
         * 3 overnightcard
         * 4 registrationcard
    }

            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
            }
                layout: {
                    type: 'border',
                    padding: 5
                },
                items: [{
                    region: 'west',
                    title: 'Navigation',
                    width: 200,
                    split: true,
                    collapsible: true,
                    floatable: false
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                        // LTR even when example is RTL so that the code can be read
                        rtl: false,
                        title: 'Bogus Tab',
                        html: '<p>Window configured with:</p><pre style="margin-left:20px"><code>header: {\n    titlePosition: 2,\n    titleAlign: "center"\n},\ntools: [{type: "pin"}],\nclosable: true</code></pre>'
                    }, {
                        title: 'Another Tab',
                        html: 'Hello world 2'
                    }, {
                        title: 'Closable Tab',
                        html: 'Hello world 3',
                        closable: true
                    }]
                }]
*/

