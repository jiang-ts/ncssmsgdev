Ext.define('Signout.view.components.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewNavigation',
    requires: [
        'Signout.view.tree.NavTree'
    ],

    title: 'Navigation',
    margins: '5 0',
    floatable: false,
    width: 200,
    minWidth: 100,
    maxWidth: 250,
    layout: 'card',
    items:{
        xtype: 'navtree'
    }
});
