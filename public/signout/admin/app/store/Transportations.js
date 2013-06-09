Ext.define('Signout.store.Transportations', {
    extend: 'Ext.data.Store',
    model: 'Signout.model.Transportation',
    
    //I have no clue how this part works.
    fields: ['type'],
    data: [
    ],
                            
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'resources/json/transportation.json'
    }
});
