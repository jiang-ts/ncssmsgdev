Ext.define('Signout.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Signout.view.LoginForm',
    ],

    layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
    },
    items: [{
        xtype: 'loginform',
        region: 'center',
    }]
});
/*
Ext.Ajax.on('beforerequest', this.showSpinner, this);
Ext.Ajax.on('requestcomplete', this.hideSpinner, this);
Ext.Ajax.on('requestexception', this.hideSpinner, this);
*/
