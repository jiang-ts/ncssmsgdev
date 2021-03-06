Ext.define('Signout.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Signout.view.components.Main',
        'Signout.view.components.Announcements',
        'Signout.view.components.Navigation',
        'Signout.view.components.Header',
        'Ext.layout.container.Border'
    ],

    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        // resizable!
        split: false,
        bodyPadding: 15
    },

    items: [{
        xtype: 'appheader',
        region: 'north'
    },{
        xtype: 'viewAnnouncements',
        region: 'east',
        collapsible: true,
        split: true
    }, {
        xtype: 'viewNavigation',
        split: false,
        region:'west',
        collapsible: true,
        bodyPadding: 0
    },{
        xtype: 'mainview',
        region: 'center',
    }]
});
