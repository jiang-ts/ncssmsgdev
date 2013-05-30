/*var map = new Ext.util.KeyMap({
    target: "my-element",
    key: 13, // or Ext.EventObject.ENTER
    fn: function(){ alert("Return was pressed"); },
    scope: 'searchField',
});
*/
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


Ext.define('Signout.view.tables.CurrentSignouts', {
    extend: 'Ext.grid.Panel',
    xtype: 'signedoutlist',
    title: 'Student Sign-Out Record',
    collapsible: true,
    multiSelect: true,
    store: Ext.data.StoreManager.lookup('signedoutstudentsstore'),
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.ux.grid.FiltersFeature'
    ],
    columns: [
        { 
            text: 'Name',  dataIndex: 'name', hideable: false, 
            //filter: {type:'string'}, 
            flex: 2
        },
        {  
            text: 'Destination', dataIndex: '', flex: 2 
        },
        {  
            text: 'Transportation', dataIndex: '' , flex: 1
        },
        {  
            text: 'Companions', dataIndex: '' , flex: 1
        },
        /* 
        // Place in Detail View
        { 
            text: 'Email', dataIndex: 'email', flex: 1, 
                renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            }
        },
        {  
            text: 'Phone', dataIndex: 'phone' 
        },*/
        {  
            text: 'Time Out', dataIndex: '' , flex: 1
        },
        {  
            text: 'Expected Return', dataIndex: '' , flex: 1
        },
        
    ],
    // make the table searchable
    searchValue: null,
    indexes: [],
    currentIndex: null,
    searchRegExp: null,
    caseSensitive: false,
    regExpMode: false,
    matchCls: 'x-livesearch-match',
    
    defaultStatusText: 'Nothing Found',
    
    // Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = ['Display: ',{
                 xtype: 'combobox',
                 store: halls,
                 queryMode: 'local',
                 displayField: 'name',
                 valueField: 'abbr', 
                 value: 'All Halls',
                 allowBlank: false,
                 typeAhead: true,
             }, 'Search',{
                 xtype: 'textfield',
                 name: 'searchField',
                 hideLabel: true,
                 enableKeyEvents: true,
                 width: 300,
                 flex: 1,
                 listeners: {
                     change: {
                         fn: me.onTextFieldChange,
                         scope: this,
                         buffer: 100
                     },
                     keydown: function(tf, e){
                         if(e.getKey() == Ext.EventObject.ENTER)
                            alert("fooment!");
                         //fn: me.
                     }
                 }
            }, {
                xtype: 'button',
                text: '&lt;',
                tooltip: 'Find Previous Row',
                handler: me.onPreviousClick,
                scope: me
            },{
                xtype: 'button',
                text: '&gt;',
                tooltip: 'Find Next Row',
                handler: me.onNextClick,
                scope: me
            }, '-', /*{
                xtype: 'checkbox',
                hideLabel: true,
                margin: '0 0 0 4px',
                handler: me.regExpToggle,
                scope: me                
            }, 'Regular expression',*/ {
                xtype: 'checkbox',
                hideLabel: true,
                margin: '0 0 0 4px',
                handler: me.caseSensitiveToggle,
                scope: me
            }, 'Case sensitive'];

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });
        
        me.callParent(arguments);
    },
    // afterRender override: it adds textfield and statusbar reference and start monitoring keydown events in textfield input 
    afterRender: function() {
        var me = this;
        me.callParent(arguments);
        me.textField = me.down('textfield[name=searchField]');
        me.statusBar = me.down('statusbar[name=searchStatusBar]');
    },
    // detects html tag
    tagsRe: /<[^>]*>/gm,
    
    // DEL ASCII code
    tagsProtect: '\x0f',
    
    // detects regexp reserved word
    regExpProtect: /\\|\/|\+|\\|\.|\[|\]|\{|\}|\?|\$|\*|\^|\|/gm,
    
    /**
     * In normal mode it returns the value with protected regexp characters.
     * In regular expression mode it returns the raw value except if the regexp is invalid.
     * @return {String} The value to process or null if the textfield value is blank or invalid.
     * @private
     */
    getSearchValue: function() {
        var me = this,
            value = me.textField.getValue();
            
        if (value === '') {
            return null;
        }
        if (!me.regExpMode) {
            value = value.replace(me.regExpProtect, function(m) {
                return '\\' + m;
            });
        } else {
            try {
                new RegExp(value);
            } catch (error) {
                me.statusBar.setStatus({
                    text: error.message,
                    iconCls: 'x-status-error'
                });
                return null;
            }
            // this is stupid
            if (value === '^' || value === '$') {
                return null;
            }
        }

        return value;
    },
    
    /**
     * Finds all strings that matches the searched value in each grid cells.
     * @private
     */
     onTextFieldChange: function() {
         var me = this,
             count = 0;

         me.view.refresh();
         // reset the statusbar
         me.statusBar.setStatus({
             text: me.defaultStatusText,
             iconCls: ''
         });

         me.searchValue = me.getSearchValue();
         me.indexes = [];
         me.currentIndex = null;

         if (me.searchValue !== null) {
             me.searchRegExp = new RegExp(me.searchValue, 'g' + (me.caseSensitive ? '' : 'i'));
             
             
             me.store.each(function(record, idx) {
                 var td = Ext.fly(me.view.getNode(idx)).down('td'),
                     cell, matches, cellHTML;
                 while(td) {
                     cell = td.down('.x-grid-cell-inner');
                     matches = cell.dom.innerHTML.match(me.tagsRe);
                     cellHTML = cell.dom.innerHTML.replace(me.tagsRe, me.tagsProtect);
                     
                     // populate indexes array, set currentIndex, and replace wrap matched string in a span
                     cellHTML = cellHTML.replace(me.searchRegExp, function(m) {
                        count += 1;
                        if (Ext.Array.indexOf(me.indexes, idx) === -1) {
                            me.indexes.push(idx);
                        }
                        if (me.currentIndex === null) {
                            me.currentIndex = idx;
                        }
                        return '<span class="' + me.matchCls + '">' + m + '</span>';
                     });
                     // restore protected tags
                     Ext.each(matches, function(match) {
                        cellHTML = cellHTML.replace(me.tagsProtect, match); 
                     });
                     // update cell html
                     cell.dom.innerHTML = cellHTML;
                     td = td.next();
                 }
             }, me);

             // results found
             if (me.currentIndex !== null) {
                 me.getSelectionModel().select(me.currentIndex);
                 me.statusBar.setStatus({
                     text: count + ' match(es) found.',
                     iconCls: 'x-status-valid'
                 });
             }
         }

         // no results found
         if (me.currentIndex === null) {
             me.getSelectionModel().deselectAll();
         }

         // force textfield focus
         me.textField.focus();
     },
    
    /**
     * Selects the previous row containing a match.
     * @private
     */   
    onPreviousClick: function() {
        var me = this,
            idx;
            
        if ((idx = Ext.Array.indexOf(me.indexes, me.currentIndex)) !== -1) {
            me.currentIndex = me.indexes[idx - 1] || me.indexes[me.indexes.length - 1];
            me.getSelectionModel().select(me.currentIndex);
         }
    },
    
    /**
     * Selects the next row containing a match.
     * @private
     */    
    onNextClick: function() {
         var me = this,
             idx;
             
         if ((idx = Ext.Array.indexOf(me.indexes, me.currentIndex)) !== -1) {
            me.currentIndex = me.indexes[idx + 1] || me.indexes[0];
            me.getSelectionModel().select(me.currentIndex);
         }
    },
    
    /**
     * Switch to case sensitive mode.
     * @private
     */    
    caseSensitiveToggle: function(checkbox, checked) {
        this.caseSensitive = checked;
        this.onTextFieldChange();
    },
    
    /**
     * Switch to regular expression mode
     * @private
     */
    regExpToggle: function(checkbox, checked) {
        this.regExpMode = checked;
        this.onTextFieldChange();
    }
});
