Ext.define('Signout.view.forms.Reg1', {
    extend: 'Ext.form.Panel',
    requires: [
        'Signout.store.Halls',
//        'Ext.ux.DataTip'
    ],
    xtype: 'reg1',
    //TODO switch layout back to form
    layout: 'form',
    collapsible: false,
    id: 'simpleForm',
    //url: 'save-form.php',
    frame: true,
    title: 'Registration Form',
    bodyPadding: '5 5 0',
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75
    },
    plugins: {
        ptype: 'datatip'
    },
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        afterLabelTextTpl: required,
        name: 'first',
        allowBlank: false,
        tooltip: 'Enter your first name'
    },{
        fieldLabel: 'Last Name',
        afterLabelTextTpl: required,
        name: 'last',
        allowBlank: false,
        tooltip: 'Enter your last name'
    },{
        xtype: 'combobox',
        fieldLabel: 'Hall',
        name: 'hall',
        displayField: 'name',
        store: halls,
        tooltip: "Enter your hall",
        allowBlank: false,
        typeAhead: true,
        //forceSelection: true,
        afterLabelTextTpl: required
    },{
        fieldLabel: 'Room',
        name: 'roomnu',
        tooltip: "Enter your room number",
        allowBlank: false,
        afterLabelTextTpl: required
    },{
        fieldLabel: 'Email',
        afterLabelTextTpl: required,
        name: 'email',
        allowBlank: false,
        vtype:'email',
        tooltip: 'Enter your email address'
    }, {
        fieldLabel: 'Cell',
        name: 'cell',
        afterLabelTextTpl: required,
        allowBlank: false,
        tooltip: 'Enter your cellphone number. Enter N/A if applicable'
    }, {
        fieldLabel: 'DOB',
        name: 'dob',
        // this xtype has the date picker!!
        xtype: 'datefield',
        tooltip: 'Enter your date of birth'
    }, {
        fieldLabel: 'Age',
        name: 'age',
        xtype: 'numberfield',
        minValue: 0,
        maxValue: 100,
        tooltip: 'Enter your age'
    }, {
        xtype: 'timefield',
        fieldLabel: 'Time',
        name: 'time',
        minValue: '8:00am',
        maxValue: '6:00pm',
        tooltip: 'Enter a time',
        plugins: {
            ptype: 'datatip',
            tpl: 'Select time {date:date("G:i")}'
        }
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
