Ext.define('Signout.view.formCards.Daylight', {
    extend: 'Ext.panel.Panel',
    xtype: 'daylightcard',
    requires: [
        'Signout.view.forms.Daylight'
    ],
    margins: '0',
    autoScroll: true,
    border: false,

    layout: {
        type : 'hbox',
        //align: 'middle',
        pack : 'center'
    },
    items:[
        {
            xtype: 'daylight',
            margin: '30'
        }
    ]
});
