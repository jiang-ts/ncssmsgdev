Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', '../../../../ext/examples/ux');

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
var halls = Ext.create('Signout.store.Halls');
var transportation = Ext.create('Signout.store.Transportations');
//var studentlist = Ext.create('Signout.store.SignedOutStudents');

Ext.define('Signout.view.components.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    
    requires: [
        'Ext.ux.DataTip',
        //'Signout.store.Halls',
        'Signout.view.formCards.AddSliCard',
        'Signout.view.tables.CurrentSignouts',
    ],

    title: 'Main',
    margins: '5 0',

    layout: 'card',
    
    items:[
        {
            xtype: 'signedoutlist',
        },
    ]
});
