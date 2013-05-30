Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', '../../../../ext/examples/ux');

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
var halls = Ext.create('Signout.store.Halls');
var transportation = Ext.create('Signout.store.Transportations');

Ext.define('Signout.view.components.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    /*
    refs: [
        {ref: 'daylightcard'
    ]
    */
    
    requires: [
    //'Ext.form.*',
    //'Ext.layout.container.Column',
    //'Ext.tab.Panel'
    'Ext.ux.DataTip',
    'Signout.store.Halls',
    'Signout.view.formCards.Daylight',
    'Signout.view.formCards.6PM',
    'Signout.view.formCards.Curfew',
    'Signout.view.formCards.Overnight',
    'Signout.view.formCards.Registration'
    ],

    title: 'Main',
    margins: '5 0',

    layout: 'card',
    /*
    {
        type : 'card',
    },
    */
    
    items:[
        {
            xtype: 'daylightcard',
        },
        {
            xtype: '6pmcard',
        },
        {
            xtype: 'curfewcard',
        },
        {
            xtype: 'overnightcard',
        },
        {
            xtype: 'registrationcard',
        }
    ]
});
