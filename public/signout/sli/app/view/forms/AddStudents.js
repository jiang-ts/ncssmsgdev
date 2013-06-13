var tok = Ext.decode(getCookie('token')).token;
Ext.define('Signout.view.forms.AddStudents', {
    extend: 'Ext.form.Panel',
    xtype: 'add-stud',

    layout: 'form',
    collapsible: false,
    frame: true,
    bodyPadding: '5 5 0',
    minheight: 200,
    width: 400,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    plugins: {
        ptype: 'datatip'
    },
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
        maxLengthText: 'Password must contains at least 8 characters',
        id:'firstpw'
    },{
        fieldLabel: 'Confirm Password',
        afterLabelTextTpl: required,
        inputType: 'password',
        allowBlank: false,
        id:'confirmpw'
    },{
        xtype: 'numberfield',
        fieldLabel: 'Room Number',
        afterLabelTextTpl: required,
        name: 'room',
        allowBlank: false,
    }],
    buttons: [{
        text: 'Save',
        handler: function() {
            var theform = this.up('form').getForm();
            theform.isValid();
            if(theform.findField('firstpw').getValue()!=theform.findField('confirmpw').getValue()){
                alert('Error: Passwords do not match!');
            }
            else{
                theform.submit({
                    url: '/sli/users/add_student.json',
                    waitMsg: 'Loading...',
                    method: 'POST',
                    params: {
                        auth_token: tok,
                    },
                    success: function (form, action) {
                        console.log(action.response.responseText);                                   
                    }
                    /*failure: function (response){
                        alert('Failed');
                    }*/
                });
            }
        }
    },{
        text: 'Cancel',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }],
    

});
