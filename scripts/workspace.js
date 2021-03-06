// UI Chrome Section

function accordion(event){
    // console.log('accordion');
    var self = $(this);
    if (self.hasClass('selected')){
        self.removeClass('selected').siblings('.option').slideUp('slow');
        return;
    }
    $('.select.selected').removeClass('selected').siblings('.option').slideUp('slow');
    self.addClass('selected').siblings('.option').slideDown('slow');
    $('#block_menu').trigger('open', self);
}
$('#block_menu').delegate('.select', 'click', accordion);


function test_block(block){
    var name = block.data('klass') + ': ' + block.data('label');
    try{
        eval(block.wrap_script());
        // console.log('passed: %s', name);
        return true;
    }catch(e){
        if (e.name === 'SyntaxError'){
            console.error('failed: %s, %o', name, e);
            return false;
        }else{
            // console.warn('passed with error: %s, %o', name, e);
            return true;
        }
    }
}

function test(){
    var blocks = $('#accordion .wrapper');
    var total = blocks.length;
    var success = 0;
    var fail = 0;
    console.log('running %d tests', total);
    blocks.each(function(idx, elem){
        setTimeout(function(){
            // console.log('running test %d', idx);
            test_block($(elem)) ? success++ : fail++;
            if( success + fail === total){
                console.log('Ran %d tests, %d successes, %s failures', total, success, fail);
            }
        }, 10);
    });
}
window.test = test;

function clear_scripts(event, force){
    if (force || confirm('Throw out the current script?')){
        $('.workspace:visible > *').empty();
        $('.stage').replaceWith('<div class="stage"></div>');
    }
}

function confirm_clear_canvas(event, force){
	if(force || confirm('Clear the stage?')){
		clear_canvas();
	}
}

function add_stage(){
	$("#spritecontainer").append('<canvas id="listsprite0" class="listsprite" height="'+spriteheight+'" width="'+spritewidth+'"></canvas>');
	var ctx = $("#listsprite0")[0].getContext('2d');
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(1, 1, 45, 45);
	$('.listsprite').removeClass('currentsprite');
	$('#listsprite0').addClass('currentsprite');
}

function draw_stage(){
	var glob = new Global();
	var canvas = $('canvas')[0];
	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = glob.stage_width;
	canvas.height = glob.stage_height;
	var ctx = canvas.getContext('2d');
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillRect(0,0,canvas.width-50,canvas.height);
}

function clear_canvas(event){
	$('#stage').empty().append('<canvas><p>Sorry, but your browser doesn\'t support canvas. Please use the latest version of Firefox </p></canvas>');
	draw_stage();
	$("#spritecontainer").empty();
}

$('#clear_scripts').click(clear_scripts);
$('.goto_script').click(function(){$('#accordion')[0].scrollIntoView();});
$('.goto_stage').click(function(){$('.stage')[0].scrollIntoView();});
$('#clear_canvas').click(confirm_clear_canvas);
// Load and Save Section

function scripts_as_object(){
    var blocks = $('.workspace:visible .scripts_workspace > .wrapper');
    if (blocks.length){
        return blocks.map(function(){return $(this).block_description();}).get();
    }else{
        return [];
    }   
}

// Expose this for dragging and saving functionality
/*window.show_workspace = function(){
    $('.workspace:visible .scripts_text_view').hide();
    $('.workspace:visible .scripts_workspace').show();
}*/	

function save_current_scripts(){
    //show_workspace();
    $('#accordion')[0].scrollIntoView();
    localStorage['__current_scripts'] = JSON.stringify(scripts_as_object());
}
$(window).unload(save_current_scripts);


function save_named_scripts(){
    var title = $('#script_name').val();
    var description = $('#script_description').val();
    var date = Date.now();
    if (title){
        if (localStorage[title]){
            if (!confirm('A script with that title exist. Overwrite?')){
                return;
            }
        }
        localStorage[title] = JSON.stringify({
            title: title,
            description: description,
            date: date,
            scripts: scripts_as_object()
        });
        $("#save_dialog").dialog("close");
    }else   
        alert("You must enter a name");
}

function export_named_scripts(){
    console.log("here");
    var title = $('#script_name').val();    
    var description = $('#script_description').val();
    var date = Date.now();
    if (title){
		var exp = JSON.stringify({
			title: title,
			description: description,
			date: date,
			scripts: scripts_as_object()
		});
		console.log("EXP: "+exp);
		$("#save_dialog").dialog("close");
		$('#exp').dialog("open");
		$('#exp textarea').html(exp);
    }
    else
    alert("You must enter a name");
}
    
function restore_from_export(){
    var script = $('#imp textarea').val();
    console.log(script);
    $('#imp').dialog("close");
    clear_scripts();

    var ps = JSON.parse(script);
    console.log(ps.scripts);

    load_scripts_from_object(ps.scripts); 
}

function toggle_description(event){
    $(this).siblings('.description').toggleClass('hidden');
}

function populate_and_show_restore_dialog(){
    var list = $('#script_list');
    var script_obj;
    var idx, value, key, script_li;
    for (idx = 0; idx < localStorage.length; idx++){
        key = localStorage.key(idx);
        if (key === '__current_scripts') continue;
        value = localStorage[key];
        script_obj = JSON.parse(value);
        if (script_obj.description){
            script_li = $('<li><span class="title hasdesc">' + script_obj.title + '</span><button class="restore action">Restore</button><button class="delete action">Delete</button><br /><span class="timestamp">Saved on ' + new Date(script_obj.date).toDateString() + '</span><p class="description hidden">' + script_obj.description + '<p></li>');
        }else{
            script_li = $('<li><span class="title">' + script_obj.title + '</span><button class="restore action">Restore</button><button class="delete action">Delete</button><br /><span class="timestamp">Saved on ' + new Date(script_obj.date).toDateString() + '</span></li>');
        }
        script_li.data('scripts', script_obj.scripts); // avoid re-parsing later
        list.append(script_li);
    }
	$("#script_list button").button();
    $('#restore_dialog').dialog("open");
}

var allDemos = {};

function populate_demos_dialog(demos){
    var list = $('#demo_list');
    var idx, value, key, script_li;
    $.each(demos, function(){
        allDemos[this.title] = this.scripts;
        if (this.description){
            script_li = $('<li><span class="title">' + this.title + ' </span><button class="load action">Load</button><button class="show_description action">Description</button><p class="description hidden">' + this.description + '<p></li>');
        }else{
            script_li = $('<li><span class="title">' + this.title + ' </span><button class="load action">Load</button></li>');
        }
        script_li.data('scripts', this.scripts); // avoid re-parsing later
        list.append(script_li);
    });
	$("#demo_list button").button();
}

function restore_named_scripts(event){
    clear_scripts();
    load_scripts_from_object($(this).closest('li').data('scripts'));
    $("#restore_dialog").dialog('close');
}

function restore_demo_scripts(event){
    clear_scripts();
    load_scripts_from_object($(this).closest('li').data('scripts'));
    $('#demos_dialog').dialog("close");
}
function restore_demo_by_name(name){
    clear_scripts();
    load_scripts_from_object(allDemos[name]);
}
function delete_named_scripts(event){
    if (confirm('Are you sure you want to delete this script?')){
        var title = $(this).siblings('.title').text();
        $(this).parent().remove();
        console.log('remove %s', title);
        localStorage.removeItem(title);
    }
}


/*$('#save_dialog .save').click(save_named_scripts);
$('#save_dialog .export').click(export_named_scripts);
$('#save_dialog .cancel').click(reset_and_close_save_dialog);
$('.save_scripts').click(function(){$('#save_dialog').bPopup();});*/

$('#save_scripts').click(function(){$('#save_dialog').dialog("open");});

$('#restore_scripts').click( populate_and_show_restore_dialog );
/*$('#restore_dialog .cancel').click(reset_and_close_restore_dialog);
$('#restore_dialog .exp').click(restore_from_export);*/
$('#restore_dialog').delegate('.restore', 'click', restore_named_scripts)
                    .delegate('.title', 'click', toggle_description)
                    .delegate('.delete', 'click', delete_named_scripts);

$('#demos_dialog').delegate('.load', 'click', restore_demo_scripts)
                  .delegate('.show_description', 'click', toggle_description);
				  
//$('#demos_dialog .cancel').click(function(){$('#demos_dialog').bPopup().close();});
$('#demo_scripts').click(function(){$('#demos_dialog').dialog("open");});
//$('.layout_blocks').click(layout_blocks);

function layout_blocks(){
    var blocks = $('.workspace:visible .scripts_workspace > .wrapper');
    blocks.each(function(idx){
        var stagger = (idx + 1) * 30;
        $(this).css({position:'absolute', left: stagger, top: stagger});
    });
}

function load_scripts_from_object(blocks){
    var workspace = $('.workspace:visible .scripts_workspace');
    $.each(blocks, function(idx, value){
        console.log('restoring block %s', idx);
        var block = Block(value);
        workspace.append(block);
        block.css({position: 'relative', left: 0, top: 0, display: 'block'});
        block.trigger('add_to_workspace');
        $('.scripts_workspace').trigger('add');

    });
}

window.load_current_scripts = function(){
    if (localStorage.__current_scripts){
        var blocks = JSON.parse(localStorage['__current_scripts']);
        if (blocks.length){
            console.log('restoring %s blocks', blocks.length);
            load_scripts_from_object(blocks);
        }
    }
}
// $(document).ready(load_current_scripts);

// Tab UI

// UI Section

/*$("input[name='scriptview']").change(function () {
	//alert(""+($("#sblock").attr('checked'))+" "+($("#stext").attr('checked')));
    var self = $(this);
    $('.tab_bar .selected').removeClass('selected');
    self.addClass('selected');
    $('.workspace:visible > div:visible').hide();
	if($("#sblock").attr('checked') === 'checked'){
        $('.workspace:visible .scripts_workspace').show();
	}
	else if($("#stext").attr('checked') === 'checked'){
        $('.workspace:visible .scripts_text_view').show();
        update_scripts_view();
	}
}).change();
*/

function sprite_drag(){
	var glob = new Global();
	var oset = $("#stage").offset();
	var bounds = [oset.left, oset.top, oset.left+glob.stage_width-90, oset.top+glob.stage_height-40];
	//console.log(bounds);
	$(".stagesprite").draggable({
		containment: bounds,
		scroll: false,
		stack: ".stagesprite",
	});
}

window.spriteid = 1;
var spriteheight = 50;
var spritewidth = 50;
var img = new Image();


function add_tab(number) {
	$("#scripttabs").tabs("add", "#script"+number, "Sprite "+number);
    $("#scripttabs").tabs("select", number);
    $("#script"+number).addClass('scriptspace');
}

function spritemenu(){
	$(".listsprite").click(function() {
		//TODO, see if it's more efficient to use more variables or not
		var me = $(this);
		var name = me.attr('id');
		var number = parseInt(name.charAt(name.length-1), 10);
		$('.listsprite').removeClass('currentsprite');
		me.addClass('currentsprite');
		$("#scripttabs").tabs("select", number);
	});
}

function add_sprite(filename) {
	//Add to the list of sprites
	var spritebox = $('#spritecontainer');
	spritebox.append('<canvas id="listsprite'+spriteid+'" class="listsprite" height="'+spriteheight+'" width="'+spritewidth+'"></canvas>');
	var ctx = document.getElementById('listsprite'+spriteid).getContext('2d');
	img.src = 'images/sprites/'+filename;
	$('.listsprite').removeClass('currentsprite');
	$('#listsprite'+spriteid).addClass('currentsprite');
	spritemenu();
	//Add version on stage
	$("#stage").append('<div id="stagesprite'+spriteid+'" class="stagesprite"><canvas height="'+spriteheight+'" width="'+spritewidth+'"></canvas></div>');
	var ctx2 = $('#stagesprite'+spriteid+' > canvas')[0].getContext('2d');
	img.onload = function(){
		ctx.drawImage(img, 0, 0, spriteheight, spritewidth);
		ctx2.drawImage(img, 0, 0, spriteheight, spritewidth);
	}
	$('#stagesprite'+spriteid).css('top', function(){
		return Math.random()*235; //0 to 235
	}).css('left', function(){
		return Math.random()*190; // 0 to 190
	});
	sprite_drag();
	//Add new tab
	add_tab(spriteid);
	spriteid++;
}

function delete_sprite(id){
	$('#stagesprite'+id).remove();
	$('#listsprite'+id).remove();
	$('#spritetab'+id).remove();
	$('span:contains("Sprite '+id+'")').parent().parent().remove();
}

/*$("#scripttabs").bind( "tabsselect", function() {
	update_scripts_view();
});*/

/*Runs every time tab is changed*/
$("#scripttabs").bind( "tabsselect", function() {
	var $tabs = $('#scripttabs').tabs();
	tab_index = $tabs.tabs('option', 'selected'); // => 0
});

function is_stage(){
	return get_active_tab().is($('#scripts_workspace'));
}
/*For completeness. THE TABS CHANGE THEIR INDEX WHEN A NEW SPRITE IS ADDED. THE STAGE WILL NOT ALWAYS BE INDEX 0.*/
function get_active_tab_index(){
	return tab_index;
}
function get_active_tab(){
	return $(get_active_tab_key()); //All tabs without the .ui-tabs-hide class
}
function get_active_tab_key(){
	return '#scripttabs div.ui-tabs-panel:not(.ui-tabs-hide)';
}
function move_sprite(id,x,y){
	$('stagesprite' + id).css("left",x).css("top",	y);
}

this.blocknames = new Array();
// Build the Blocks menu, this is a public method
function menu(title, specs, show) {
	var klass = title.toLowerCase();
	var body = $('<section class="submenu"></section>');
	var select = $('<h3 class="select"><a href="#">' + title + '</a></h3>').appendTo(body);
	var options = $('<div class="option"></div>').appendTo(body);

	$.each(specs, function(idx, spec) {
		if (spec !== undefined) {
			spec.klass = klass;
			var name = spec.label;
			//changes the name to look "nicer"
			while (name.indexOf('[') != -1) {
				name = name.replace('[', '(');
				name = name.replace(']', ')');
			}
			while (name.indexOf('#') != -1) {
				name = name.replace('#', '');
			}
			options.append(Block(spec));
			blocknames.push({
				label : name,
				category : spec.klass
			});
			nameMap[name] = Block(spec);
			//nameMap is used inside search.js
		}
	});
	$('#accordion').append(body);
	/*if (show){
	 select.addClass('selected');
	 }else{
	 options.hide();
	 }*/
	return;
}

window.menu = menu;
window.blocknames = this.blocknames;
