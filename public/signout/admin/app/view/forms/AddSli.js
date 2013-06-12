//TODO put this in separate thing to link to. Need to go fast for now
var halls = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"ALL", "name":"All Halls"},
        {"abbr":"1BL", "name":"1 Beall"},
        {"abbr":"2BL", "name":"2 Beall"},
        {"abbr":"3BL", "name":"3 Beall"},
        {"abbr":"2BR", "name":"2 Bryan"},
        {"abbr":"3BR", "name":"3 Bryan"},
        {"abbr":"4BR", "name":"4 Bryan"},
        {"abbr":"1HL", "name":"1 Hill"},
        {"abbr":"2HLE", "name":"2 Hill East"},
        {"abbr":"2HLN", "name":"2 Hill North"},
        {"abbr":"1H", "name":"1 Hunt"},
        {"abbr":"2HE", "name":"2 Hunt East"},
        {"abbr":"2HW", "name":"2 Hunt West"},
        {"abbr":"3HE", "name":"3 Hunt East"},
        {"abbr":"3HW", "name":"3 Hunt West"},
        {"abbr":"4HE", "name":"4 Hunt East"},
        {"abbr":"4HW", "name":"4 Hunt West"},
        {"abbr":"CCD", "name":"1C2C1D"},
        {"abbr":"EED", "name":"1E2E1D"},
        {"abbr":"GdRe", "name":"Ground Reynolds"},
        {"abbr":"GdRo", "name":"Ground Royal"},
        {"abbr":"1Ro", "name":"1 Royal"},
    ]
});
Ext.define('Signout.view.forms.AddSli', {
    extend: 'Ext.form.Panel',
    xtype: 'addsli',

    layout: 'form',
    collapsible: false,
    //id: 'addsliform',
    //url: 'save-form.php',
    frame: true,
    title: 'Enter new SLI credentials',
    bodyPadding: '5 5 0',
    minheight: 200,
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    plugins: {
        ptype: 'datatip'
    },
    //TODO AUTH TOKEN
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        afterLabelTextTpl: required,
        name: 'first_name',
        allowBlank: false,
    },{
        fieldLabel: 'Middle Name',
        name: 'middle_name',
    },{
        fieldLabel: 'Last Name',
        afterLabelTextTpl: required,
        name: 'last_name',
        allowBlank: false,
    },{
        fieldLabel: 'Email',
        afterLabelTextTpl: required,
        vtype: 'email',
        name: 'email',
        allowBlank: false,
    },{
        fieldLabel: 'Password',
        afterLabelTextTpl: required,
        name: 'password',
        inputType: 'password',
        allowBlank: false,
    },{
        xtype: 'combobox',
        displayField: 'name',
        queryMode: 'local',
        valueField: 'name',
        store: halls,
        typeAhead: true,

        fieldLabel: 'Hall',
        afterLabelTextTpl: required,
        name: 'hall',
        allowBlank: false,
        typeAhead: true,
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
