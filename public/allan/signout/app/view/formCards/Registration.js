Ext.define('Signout.view.formCards.Registration', {
    extend: 'Ext.panel.Panel',
    xtype: 'registrationcard',
    requires: [
        'Signout.view.forms.Reg1'
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
            xtype: 'reg1',
            margin: '30'
        }
    ]
});
