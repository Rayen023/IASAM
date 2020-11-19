/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Tabs
5. Init Scrolling
6. Init Gallery


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initTabs();
	initScrolling();

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

	4. Init Tabs

	*/

	function initTabs()
	{$('.tab').removeClass('active');
	$('.tab1').addClass('active');
	
		if($('.tab').length)
		{	$('.tab').on('click', function()
			{	$('.tab').removeClass('active');
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

	5. Init Scrolling

	*/

	function initScrolling()
	{
		if($('.scroll_link').length)
    	{
    		var links = $('.scroll_link');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -75, easing: 'easeInOutQuart'});
	    		});
	    	});
    	}
	}

	/* 

	6. Init Gallery

	*/

	function initGallery()
	{
		if($('.gallery_item').length)
		{
			$('.colorbox').colorbox(
			{
				rel:'colorbox',
				photo: true,
				maxWidth:'95%',
				maxHeight:'95%'
			});
		}
	}

});