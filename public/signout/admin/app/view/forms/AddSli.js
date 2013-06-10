Ext.define('Signout.view.forms.AddSli', {
    extend: 'Ext.form.Panel',
    xtype: 'addsli',

    layout: 'form',
    collapsible: false,
    id: 'addsliform',
    //url: 'save-form.php',
    frame: true,
    title: 'Enter new SLI credentials',
    bodyPadding: '5 5 0',
    height: 200,
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    plugins: {
        ptype: 'datatip'
    },
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Destination',
        afterLabelTextTpl: required,
        name: 'destination',
        allowBlank: false,
        tooltip: 'Enter Destination'
    },{
        xtype: 'combobox',
        displayField: 'type',
        store: transportation,
        typeAhead: true,

        fieldLabel: 'Transportation',
        afterLabelTextTpl: required,
        name: 'transportation',
        allowBlank: false,
        tooltip: 'Enter Mode of Transportation'
    },{
        fieldLabel: 'Companions',
        afterLabelTextTpl: required,
        name: 'companions',
        allowBlank: false,
        tooltip: 'Enter Companions'
    },{
        xtype: 'timefield',
        fieldLabel: 'Return Time',
        name: 'time',
        minValue: '6:00pm',
        maxValue: '8:00pm',
        tooltip: 'Enter a time',
        plugins: {
            ptype: 'datatip',
            tpl: 'Select time {date:date("G:i")}'
        },
        afterLabelTextTpl: required,
        allowBlank: false
    }],

    buttons: [{
        text: 'Save',
        handler: function() {
            this.up('form').getForm().isValid();
        }
    },{
        text: 'Cancel',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }],
    

});
