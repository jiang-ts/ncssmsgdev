
//Signout.store.SignedOutStudents
Ext.define('Signout.store.SignedOutStudents', {
    extend: 'Ext.data.Store',
    storeId:'signedoutstudentsstore',
    model: 'Signout.model.SignedOutStudent',
    
    //I have no clue how this part works.
    fields: ['id','name', 'email', 'phone'],
    data: {'items':[
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]},
                            
    autoLoad: true,
    proxy: {
        //type: 'ajax',
        type: 'memory',
        url : 'resources/json/signedoutstudentdata.json',
        reader: {
            type: 'json',
            root: 'items'
        }

    }
});

