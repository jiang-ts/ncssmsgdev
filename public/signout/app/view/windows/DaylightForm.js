Ext.define('Signout.view.windows.DaylightForm', {
    extend: 'Ext.window.Window',
    xtype: 'daylightwindow',
    requires: [
        'Ext.window.*',
        'Signout.view.forms.Daylight'
    ],
    title: '<b>Daylight Hours</b> Sign-Out Form',
    // how good is this?
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    resizable: false,
    closeAction: 'hide',
    constrainHeader: true,
//    width: 600,
//    height: 350,

//    margins: '0',
//    autoScroll: true,
//    border: false,

    layout: {
        type : 'hbox',
        //align: 'middle',
        pack : 'center'
    },
    items:[
        {
            xtype: 'daylight',
//            margin: '30'
        }
    ]
});
