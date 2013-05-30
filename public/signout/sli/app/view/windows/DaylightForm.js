Ext.define('Signout.view.windows.DaylightForm', {
    extend: 'Ext.window.Window',
    xtype: 'daylightwindow',
    requires: ['Ext.window.*'],
    title: '<b>Daylight Hours</b> Sign-Out Form',
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
