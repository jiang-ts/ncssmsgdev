Ext.define('Signout.view.windows.CurfewForm', {
    extend: 'Ext.window.Window',
    xtype: 'curfewwindow',
    requires: ['Ext.window.*'],
    title: '<b>Curfew Hours</b> Sign-Out Form',
    // how good is this?
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    closeAction: 'hide',
    constrainHeader: true,
    width: 600,
    minWidth: 350,
    height: 350,

});
                //tools: [{type: 'pin'}],
