Ext.define('Signout.store.Halls', {
    extend: 'Ext.data.Store',
    model: 'Signout.model.Hall',
    
    //I have no clue how this part works.
    fields: ['name'],
    data: [
            /*
            {"gender":"AL", "name":"Alabama"},
            {"id":"AK", "name":"Alaska"},
            {"id":"AZ", "name":"Arizona"}
            */
    ],
                            
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'resources/json/halls.json'
    }
});
