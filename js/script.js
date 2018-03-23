jQuery(document).ready(function () {
        $(".photo_styles li a").colorbox
        ({ opacity:0.5 , 
        	transition:"fade",
        	overlayClose:true,
        	returnFocus:false,
        	rel:'group1',
        	 Width:600,
        Height:500,
        fixed:true
        });

        $(".send").colorbox({
        inline:true,
        height: 430,
        width:600,
        returnFocus:false,
        href:"#myform",
        fixed:true
        });

});






