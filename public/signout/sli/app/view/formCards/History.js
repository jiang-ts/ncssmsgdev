Ext.define('Signout.view.formCards.History', {
    extend: 'Ext.panel.Panel',
    xtype: 'historycard',
    requires: [
        'Signout.view.forms.History'
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
        /*
        {
            xtype: 'daylight',
            margin: '30'
        }
        */
    ]
});
