Ext.define('Signout.view.components.Notes', {
    extend: 'Ext.panel.Panel',
    xtype: 'infoview',

    title: 'Notes',
    margins: '0',
    floatable: true,
    requires: [
        'Ext.form.field.HtmlEditor',
        //'Ext.form.field.TextArea',
    ],

    layout: 'fit',
    items: [
        {
            xtype: 'htmleditor',
            //xtype: 'textarea',
            id: 'notepad-editor',
            value: [
                'You can write <b>fancy</b> <span style="color: rgb(255, 0, 0)">notes</span> about <u>students</u> here<br>',
                'Give it a try!<br>',
                'Beware, I\'m slightly buggy!'
            ].join(''),
            bodyBorder: 'false'
        }
     ],
     bbar: [
         {xtype: 'button', text: 'Save'},
         {xtype: 'button', text: 'Cancel'},
         {xtype: 'button', text: 'Refresh'}
     ]
});
