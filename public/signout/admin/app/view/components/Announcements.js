Ext.define('Signout.view.components.Announcements', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewAnnouncements',
    requires: [
        'Signout.view.components.Notes',
        'Signout.view.components.Detail',
    ],
    title: 'Additional Information',
    margins: '5 0',
    width: 300,
    minWidth: 175,
    maxWidth: 350,
    autoScroll: true,
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
        bodyPadding:0,
        scrollable: true
    },

    items: [{
        xtype: 'detailview',
        region: 'center',
        bodyPadding: 15,
    },{
        xtype: 'infoview',
        region: 'south',
        height: 200,
        minHeight: 150,
        maxHeight: 300,
//        collapsible: true,
    }]
});
