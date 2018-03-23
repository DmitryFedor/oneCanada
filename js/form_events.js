
$(document).ready(function(){


    // Make ColorBox responsive
    $.colorbox.settings.maxWidth = '95%';
    $.colorbox.settings.maxHeight = '95%';

    // ColorBox resize function
    var resizeTimer;

    function resizeColorBox() {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (jQuery('#cboxOverlay').is(':visible')) {
                $.colorbox.load(true);
            }
        }, 300);
    }

    // Resize ColorBox when resizing window or changing mobile device orientation
    jQuery(window).resize(resizeColorBox);

    window.addEventListener("orientationchange", resizeColorBox, false);


$(".send").bind("click", function(){

var x  = this.text;

$("#formheader").text(x);

});

$("#name").bind("focus",function(){

$(this).attr("placeholder","");

}).bind("blur",function(){
 
 $(this).attr("placeholder","Your name");

});

$("#phone").bind("focus",function(){

	$(this).attr("placeholder","");
	
}).bind("blur",function(){

 $(this).attr("placeholder","+44 xxxx xxxxxx");

});

$("#send").bind("click",function(event){

var str = $.trim($("#name").val());

if(str.search(/^[a-zа-я]{2,}((\.|\s|-)?[a-zа-я]+){0,}$/i) == -1)
{


if($("#nm").length)
{

$("#name").animate({borderColor:"red"});

$("#name").animate({borderColor:"#dddddd"});

}
else{

 $("#nm").remove();

$('#formheader').after("<p class=note id=nm>неверно заполнено поле name</p>");
}
}


else $("#nm").remove();


var str2 = $("#phone").val();


if(str2.search(/^\+4{2}(\s|-)?\d{4}(\s|-)?\d{5}$/) ==-1)
{ 


	if($("#pn").length)
	{
		$("#phone").animate({borderColor:"red"});

		$("#phone").animate({borderColor:"#dddddd"});
	
	}

else{		

		$("#pn").remove();

		$("#phone").before("<p class=note id=pn>неверно заполнено поле phone</p>");
	}
}

else $("#pn").remove();

event.preventDefault();
});

$(document).bind('cbox_closed',function(){

$(".note").remove();

$("#phone").val("");

$("#name").val("");

});

if($(window).width() <=1000)
{
	$('.item:odd').each(

		function()
		{
		
		$(this).find(".item_text2:first-child").css("display","none");
		$(this).find(".item_text2:last-child").css("display","block");

		}
						);

}

else {


	$('.item:odd').each(

		function()
		{

		$(this).find(".item_text2:first-child").css("display","block");

		$(this).find(".item_text2:last-child").css("display","none");
		
		}
						);
	}


});


$(window).resize(function(){
 
if($(window).width() <=1000)
{

	$('.item:odd').each(

		function()
		{
		
		$(this).find(".item_text2:first-child").css("display","none");

		$(this).find(".item_text2:last-child").css("display","block");


		}
						);
}

else {


	$('.item:odd').each(

		function()
		{

		$(this).find(".item_text2:first-child").css("display","block");
		$(this).find(".item_text2:last-child").css("display","none");
		
		}
						);
	}


var x = $(window).width()/1.6;

x > 600 ? x = 600 : x = x;

$(".send").colorbox.resize({width:x,height:398} );

$(window).width() < 673 ? $(".input_wrap input").css("width","200px") : $(".input_wrap input").css("width","50%") ;

$(window).width() < 673  ? $("#send").css("width","200px") : $("#send").css("width","50%");


});