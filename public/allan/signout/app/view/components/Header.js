Ext.define('Signout.view.components.Header', {
    extend: 'Ext.Component',//panel.Panel',
    xtype: 'appheader',

    dock: 'top',
    baseCls: 'app-header',
    width: 0,
    margins: '20',

    initComponent: function() {
        Ext.apply(this, {
            align: 'center',
            html: 'NCSSM Sign-Out Portal'
        });

        this.callParent(arguments);
    }
    
});
