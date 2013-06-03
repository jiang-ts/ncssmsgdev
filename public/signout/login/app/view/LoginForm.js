var actypes = Ext.create('Ext.data.Store', {
    fields: ['actype'],
    data : [
        {"actype":"Student"},
        {"actype":"SLI"},
        {"actype":"Admin"}
    ]
});

Ext.define('Signout.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    
    
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
            name: 'user',
            emptyText: 'username'
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
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
                this.up('form').getForm().isValid();
            Ext.Ajax.request({
            url:"http://ncssmsgdev.herokuapp.com/api/v1/tokens.json",
            method: "POST",
            params: 'email=adm@adm.in&password=admin123',
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
            } 
        }
    ]
});

