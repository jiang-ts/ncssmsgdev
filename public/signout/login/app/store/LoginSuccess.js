Ext.define('Signout.store.LoginSuccess', {
    extend: 'Ext.data.Store',
    model: 'Signout.model.LoginStatus',

    //I have no clue how this part works.
    fields: ['token'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        method: 'POST',
//        jsonData: dude,
        jsonData: "email=adm@adm.in&password=admin123",
        url : 'http://ncssmsgdev.herokuapp.com/api/v1/tokens.json',
/*
        success: function(response, opts) {
           var obj = Ext.decode(response.responseText);
           console.dir(obj);
        },
        failure: function(response, opts) {
           console.log('server-side failure with status code ' + response.status);
        }
*/
    }
});
/*
var myObj = {
 email : 'admin.in',
 password : 'admin123'
}
Ext.Ajax.request({
        url: 'http://ncssmsgdev.herokuapp.com/api/v1/tokens.json',
        method: 'POST',
            params: { 
                    ajax_req: Ext.util.JSON.encode(myObj)
            },
        success: function(transport){
                  // do something
        },
        failure: function(transport){
                alert("Error: " - transport.responseText);
        }
    });
*/


/*
Ext.Ajax.request({
   url: 'ajax_demo/sample.json',
   success: function(response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
   },
   failure: function(response, opts) {
      console.log('server-side failure with status code ' + response.status);
   }
});`
*/
