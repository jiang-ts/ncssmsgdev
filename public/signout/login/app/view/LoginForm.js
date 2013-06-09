/*
var actypes = Ext.create('Ext.data.Store', {
    fields: ['actype'],
    data : [
        {"actype":"Student"},
        {"actype":"SLI"},
        {"actype":"Admin"}
    ]
});
*/
function submitOnEnter(field, event) {
    if (event.getKey() == event.ENTER) {
        loginPressed(Ext.getCmp('uname').getValue(), Ext.getCmp('pword').getValue());
        //console.log(Ext.getCmp('uname').getValue()+ ' '+ Ext.getCmp('pword').getValue());
    }
}
function loginPressed(uname, pword){
    Ext.Ajax.request({
        url:"http://ncssmsgdev.herokuapp.com/api/v1/tokens.json",
        waitMsg: 'Loading...',
        method: 'POST',
        params: 'email=' + uname + '&password=' + pword,
        success: function (response) {
           console.log(response.responseText);                                   
           var time = 1/96;
           setCookie('token', response.responseText, time);
           var responseobj = Ext.decode(response.responseText);
           console.log('success');
           /*
            * if type==student 
            * go to student view etc.
            * 
            * Put token into cookie.
            * 
           */
           if(responseobj.type=='sli')
           {
                location.href = '../sli/index.html';
           }
           if(responseobj.type=='admin')
           {
                location.href = '../admin/index.html';
           }
        },
        failure: function (response) {
           console.log(response.status);                                   
           console.log('fail');
        }
    });
}

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
            listeners: {
                specialkey: submitOnEnter
            },
            id: 'uname'
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'password',
            emptyText: 'password',
            inputType: 'password',
            listeners: {
                specialkey: submitOnEnter
            },
            id: 'pword'
        },
        /*
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
            listeners: {
                specialkey: submitOnEnter
            }
        }
        */
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
                if(this.up('form').getForm().isValid()==true){
                    loginPressed(Ext.getCmp('uname').getValue(), Ext.getCmp('pword').getValue());
                    //this.up('form').getForm().submit({
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

