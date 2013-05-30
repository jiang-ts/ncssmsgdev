Ext.define('Signout.view.formCards.6PM', {
    extend: 'Ext.panel.Panel',
    xtype: '6pmcard',
    requires: [
        'Signout.view.forms.6PM'
    ],
    margins: '0',
    autoScroll: true,
    border: false,
    html: 'Note*: SLI approval needed',
    layout: {
        type : 'hbox',
        //align: 'middle',
        pack : 'center'
    },
    items:[
        {
            xtype: '6pm',
            margin: '30'
        }
    ]
});
