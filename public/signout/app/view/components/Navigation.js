Ext.define('Signout.view.components.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewNavigation',

    /*
    config: {
        refs:{
            ref: 'mainView',
            selector: 'mainview'
        }
    },

    requires: [
        //'Ext.layout.container.Accordian'
    ],
    */

    title: 'Navigation',
    margins: '5 0',
    floatable: false,
    width: 200,
    minWidth: 100,
    maxWidth: 250,

    layout: 'accordion',

    items:[{
        layout: 'form',
        title: 'History',
        id: 'panel0',
        autoScroll: true,
        items:[
            {
                xtype: 'button',
                text: 'View History',
                handler: function(btn, e)
                    {
                        btn.up('viewNavigation').onFormSwitch(btn,e);
                        console.log('TODO');
                    }
                //tap: 'onFormSwitch'
            }
        ]
        //html: 'Every time you finish signing out, it should be added to your "virtual card"'
    },{
        title: 'Sign-Out',
        layout: 'form',
        id: 'panel1',
        items:[{
            xtype: 'button',
            text: 'Daylight',
            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
            }
        },{
            xtype: 'button',
            text: 'After 6 PM',
            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
            }
        },{
            xtype: 'button',
            text: 'Past Curfew',
            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
                        console.log('TODO');
            }
        },{
            xtype: 'button',
            text: 'Overnight',
            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
                        console.log('TODO');
            }
        }]
    },{
        title: 'Settings',
        layout: 'form',
        id: 'panel2',
        items:[{
            xtype: 'button',
            text: 'Modify Personal Settings',
            handler: function(btn, e){
                btn.up('viewNavigation').onFormSwitch(btn,e);
                        console.log('TODO');
            }
        }]
    },{
        title: 'Connect',
        id: 'panel3',
        html: 'just for fun. Maybe this accordian thing is too much. Simple tree grid should suffice'
    }],
    onFormSwitch: function(btn, e){
        var mainpanel = Ext.ComponentQuery.query('mainview')[0].getLayout();
        if(btn.getText() == 'Daylight')
            mainpanel.setActiveItem(0);
        else if(btn.getText() == 'After 6 PM')
            mainpanel.setActiveItem(1);
        else if(btn.getText() == 'Past Curfew')
            mainpanel.setActiveItem(2);
        else if(btn.getText() == 'Overnight')
            mainpanel.setActiveItem(3);
        else
            mainpanel.setActiveItem(4);
        /*
         * 0 daylightcard
         * 1 6pmcard
         * 2 curfewcard
         * 3 overnightcard
         * 4 registrationcard
        */
    }
});
