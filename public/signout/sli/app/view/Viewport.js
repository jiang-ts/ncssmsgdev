var tok = getCookie('token');
var tokobj = Ext.decode(tok);
if(tok==null||tokobj.type!='sli'){
    location.href='../login/index.html';
    alert("session timed out!");
};
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
        split: true,
        bodyPadding: 0
    }, {
        xtype: 'viewNavigation',
        region:'west',
        collapsible: true,
        bodyPadding: 0
    },{
        xtype: 'mainview',
        region: 'center',
        bodyPadding: 10
    }]
});
