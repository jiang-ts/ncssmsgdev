Ext.define('Signout.view.windows.AddSliWindow', {
    extend: 'Ext.window.Window',
    xtype: 'sliwindow',
    requires: [
        'Signout.view.forms.AddSli'
    ],
    title: 'Add SLI Form',
    // how good is this?
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    resizable: false,
    closeAction: 'hide',
    constrainHeader: true,
    layout: {
        type : 'hbox',
        pack : 'center'
    },
    items:[
        {
            xtype: 'addsli',
        }
    ]
});
