var actypes = Ext.create('Ext.data.Store', {
    fields: ['actype'],
    data : [
        {"actype":"Student"},
        {"actype":"SLI"},
        {"actype":"Admin"}
    ]
});
/*
function submitOnEnter(field, event) {
    if (event.getKey() == event.ENTER) {
        var form = field.up('form').getForm();
        form.submit();
    }
}
*/

Ext.define('Signout.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    
    
    require: [
        'Ext.form.*',
        'Ext.data.*'
    ],
    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,
    
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    
    items: [
        {
            allowBlank: false,
            fieldLabel: 'Username',
            name: 'email',
            emptyText: 'username',
            /*
            listeners: {
                specialkey: submitOnEnter
            }
            */
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'password',
            emptyText: 'password',
            inputType: 'password',
            /*
            listeners: {
                specialkey: submitOnEnter
            }
            */
        },
        {
            xtype:'combobox',
            fieldLabel: 'User Type',
            name: 'actype',
            displayField: 'actype',
            store: actypes,
            queryMode: 'local',
            allowBlank: false,
            typeAhead: true,
            forceSelection: true,
            /*
            listeners: {
                specialkey: submitOnEnter
            }
            */
        }
    ],
    
    buttons: [
        {
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        },{ 
            text:'Login',
            handler: function() {
                    console.log('checking');
                if(this.up('form').getForm().isValid()==true){
                    console.log('loading');
                    this.up('form').getForm().submit({
                        url:"http://ncssmsgdev.herokuapp.com/api/v1/tokens.json",
                        waitMsg: 'Loading...',
                        method: 'POST',
                        success: function (form, action) {
                           console.log(action.responseText);                                   
                        }
                    });
                }
/*
                Ext.Ajax.request({
                url:"http://ncssmsgdev.herokuapp.com/api/v1/tokens.json",
                method: "POST",
                params: {email: "adm@adm.in", password: "admin123"},
                success: function(){
                    console.log("ok");
                    var objhtml = response.responseText; //content returned from server side
                        console.log(objhtml);
                },
                failure: function(response, opts){
                    console.log("failed");
                },
                headers: { 'Content-Type': 'application/json' }
                });
*/
            }
        }
    ]
});
/*
                Ext.Ajax.request({
                    url: 'http://ncssmsgdev.herokuapp.com/api/v1/tokens.json',
                    method: 'POST',
                    jsonData: 'email=adm@adm.in&password=admin123',
                    success: function() {
                        console.log('success');
                    },
                    failure: function() {
                        console.log('woops');
                    }
                });
*/

