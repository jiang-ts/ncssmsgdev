Ext.define('Signout.view.windows.AddStudentsForm', {
    extend: 'Ext.window.Window',
    xtype: 'addstudentswindow',
    requires: ['Ext.window.*', 'Signout.view.forms.AddStudents'],
    title: 'Add Students',
    // how good is this?
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    closable: true,
    closeAction: 'hide',
    constrainHeader: true,
    layout: {
        type : 'hbox',
        pack : 'center'
    },
    items:[
        {
            xtype: 'add-stud',
        }
    ]

});
                //tools: [{type: 'pin'}],
