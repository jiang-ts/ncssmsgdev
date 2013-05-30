Ext.define('Signout.view.components.Header', {
    extend: 'Ext.Container',
    //extend: 'Ext.Component',//panel.Panel',
    xtype: 'appheader',
    id: 'app-header',

    dock: 'top',
    baseCls: 'app-header',
    width: 0,
    margins: '20',

    layout: {
        type: 'hbox',
        align: 'middle'
    },
    initComponent: function() {
        this.items = [{
            xtype: 'component',
            id: 'app-header-title',
            html: 'NCSSM Sign-Out Portal: SLI View',
            flex: 1
        }];


        this.callParent(arguments);
    }
    
});
/*
Ext.define('KitchenSink.view.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',
    id: 'app-header',
    height: 52,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    initComponent: function() {
        this.items = [{
            xtype: 'component',
            id: 'app-header-title',
            html: 'Ext JS Kitchen Sink',
            flex: 1
        }];

        if (!Ext.getCmp('options-toolbar')) {
            this.items.push({
                xtype: 'themeSwitcher'
            });
        }

        this.callParent();
    }
});
*/
