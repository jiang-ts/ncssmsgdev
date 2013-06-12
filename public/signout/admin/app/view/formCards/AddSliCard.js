Ext.define('Signout.view.formCards.AddSliCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'addslicard',
    requires: [
        'Signout.view.forms.AddSli'
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
            xtype: 'addsli',
            margin: '30'
        }
    ]
});
