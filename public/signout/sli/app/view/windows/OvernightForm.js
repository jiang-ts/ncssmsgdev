Ext.define('Signout.view.windows.OvernightForm', {
    extend: 'Ext.window.Window',
    xtype: 'overnightwindow',
    requires: ['Ext.window.*'],
    title: 'Overnight Sign-Out Form',
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
