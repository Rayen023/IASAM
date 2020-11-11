/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Gallery


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	setHeader();
	initMenu();
	initGallery();
	

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

	4. Init Gallery

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