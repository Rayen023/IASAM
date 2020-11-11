/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Timer
6. Init Tabs
7. Init Gallery


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initHomeSlider();
	initTimer();
	initTabs();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');

		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{

		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var menuCont = $('.menu_content');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');
			
			var Element = document.getElementById('menuId');

			hamburger.on('click', function()
			{	
				Element.style.display= "block";
					hideOnClickOutside(Element)
			});

			close.on('click', function()
			{	
				Element.style.display= "none";
			});

			const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )
			
			function hideOnClickOutside(Element) {
				const outsideClickListener = event => {
					if ( (Element.contains(event.target)) && isVisible(Element)) { 
					Element.style.display = 'none'
					removeClickListener()
					}
				}
			
				const removeClickListener = () => {
					document.removeEventListener('click', outsideClickListener)
				}
			
				document.addEventListener('click', outsideClickListener)
			}

			


		}

}	
		
	


	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				autoplayTimeout:8000,
				loop:true,
				smartSpeed:1200,
				nav:false
			});

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

	/* 

	5. Init Timer

	*/

	function initTimer()
    {
    	if($('.timer').length)
    	{
    		// Uncomment line below and replace date
	    	var target_date = new Date("12 20 2020").getTime();

	    	// comment lines below
	    	//var date = new Date();
	    	//date.setDate(date.getDate() + 3);
	    	//var target_date = date.getTime();
	    	//----------------------------------------
	 
			// variables for time units
			var days, hours, minutes, seconds;

			var d = $('#day');
			var h = $('#hour');
			var m = $('#minute');
			var s = $('#second');

			setInterval(function ()
			{
			    // find the amount of "seconds" between now and target
			    var current_date = new Date().getTime();
			    var seconds_left = (target_date - current_date) / 1000;
			 
			    // do some time calculations
			    days = parseInt(seconds_left / 86400);
			    seconds_left = seconds_left % 86400;
			     
			    hours = parseInt(seconds_left / 3600);
			    seconds_left = seconds_left % 3600;
			     
			    minutes = parseInt(seconds_left / 60);
			    seconds = parseInt(seconds_left % 60);

			    // display result
			    d.text(days);
			    h.text(hours);
			    m.text(minutes);
			    s.text(seconds); 
			 
			}, 1000);
    	}	
    }

    /* 

	6. Init Tabs

	*/

	function initTabs()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);

				var panels = $('.tab_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	}

	/* 

	7. Init Gallery

	*/

});