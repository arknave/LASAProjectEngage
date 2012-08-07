function setup_block_accordians(){
	$("#accordion").accordion({
        header : "> section > h3",
        collapsible : true,
        autoHeight : false,
        active : false,
        icons : {
            "header" : "ui-icon-circle-triangle-e",
            "headerSelected" : "ui-icon-circle-triangle-s"
        }
    }).sortable({
        axis : "y",
        handle : "h3 > a",
        stop : function(event, ui) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children("h3").triggerHandler("focusout");
        }
    });
}

function setup_search(){
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _renderMenu : function(ul, items) {
            var self = this, currentCategory = "";
            $.each(items, function(index, item) {
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                self._renderItem(ul, item);
            });
        }
    });
    $("#search").catcomplete({
        source : window.blocknames,
    });
}
function setup_buttons(){
	$("#about").button({
        text : false,
        icons : {
            primary : "ui-icon-info"
        }
    }).click(function() {
        $('#about_dialog').dialog("open");
    });

    $("#restore_scripts").button({
        text : false,
        icons : {
            primary : "ui-icon-folder-open"
        }
    });
    $("#save_scripts").button({
        text : false,
        icons : {
            primary : "ui-icon-disk"
        }
    });
    $("#demo_scripts").button({
        text : false,
        icons : {
            primary : "ui-icon-notice"
        }
    });
    $("#clear_scripts").button({
        text : false,
        icons : {
            primary : "ui-icon-document"
        }
    });
    $("#clear_canvas").button({
        text : false,
        icons : {
            primary : "ui-icon-close"
        }
    });
    $("#compile_scripts").button({
        text : false,
        icons : {
            primary : "ui-icon-check"
        }
    });
    $("#execute_scripts").button({
        
    });
    $("#newsprite").button({
        text : false,
        icons : {
            primary : "ui-icon-arrowthick-1-s"
        }
    }).click(function() {
        $("#spritediag").dialog("open");
    });
}

function setup_tabs(){
	$("#blocktabs").tabs();
    $("#scripttabs").tabs();
}

function setup_dialog(){
	$("#about_dialog").dialog({
        autoOpen : false,
        modal : true,
        resizable : false,
    });

    $("#save_dialog").dialog({
        autoOpen : false,
        height : 300,
        width : 450,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Save",
            "class" : 'dialogbutton',
            click : function() {
                save_named_scripts();
            }
        }, {
            text : "Export",
            "class" : 'dialogbutton',
            click : function() {
                export_named_scripts();
            }
        }, {
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
        close : function() {
            $("#script_name").val("");
            $("#script_description").val("");
        }
    });
    $("#restore_dialog").dialog({
        autoOpen : false,
        height : 300,
        width : 450,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Import",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
                $("#imp").dialog("open");
            }
        }, {
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
        close : function() {
            $('#script_list').empty();
        }
    });
    $("#demos_dialog").dialog({
        autoOpen : false,
        height : 300,
        width : 450,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
    });
    /*Export Dialog*/
    $("#exp").dialog({
        autoOpen : false,
        height : 250,
        width : 325,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
    });
    /*Import Dialog*/
    $("#imp").dialog({
        autoOpen : false,
        height : 300,
        width : 325,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Import",
            "class" : 'dialogbutton',
            click : function() {
                restore_from_export();
            }
        }, {
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
    });
    /*Sprite creation dialog*/
    $("#spritediag").dialog({
        autoOpen : false,
        height : 300,
        width : 325,
        modal : true,
        resizable : false,
        buttons : [{
            text : "Add",
            "class" : 'dialogbutton',
            click : function() {
                var nam = $('#sprite_name').val();
                add_sprite(nam);
                $('#sprite_name').val('');
                $(this).dialog("close");
            }
        }, {
            text : "Cancel",
            "class" : 'dialogbutton',
            click : function() {
                $(this).dialog("close");
            }
        }],
    });
}