Ext.define('Signout.view.windows.6PMForm', {
    extend: 'Ext.window.Window',
    xtype: '6pmwindow',
    requires: ['Ext.window.*'],
    title: '6PM Sign-Out Form',
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
