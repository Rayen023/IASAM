<!DOCTYPE html>
<html lang="en">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EFM7KDK600"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EFM7KDK600');
</script>
<title>Contact</title>
<link rel="shortcut icon" href="iasam.ico" type="image/x-icon">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="IAS Tunisia Annual Meeting">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/bootstrap-4.1.2/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="plugins/font-awesome-4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="plugins/colorbox/colorbox.css">
<link rel="stylesheet" type="text/css" href="styles/contact.css">
<link rel="stylesheet" type="text/css" href="styles/contact_responsive.css">
<link rel="stylesheet" type="text/css" href="styles/header.css">
<link rel="stylesheet" type="text/css" href="styles/footer.css">
<link rel="stylesheet" type="text/css" href="styles/menu.css">
<link rel="stylesheet" type="text/css" href="styles/CTA.css">
<link rel="stylesheet" type="text/css" href="styles/commun.css">
</head>
<body>

<div class="super_container">
	
	<!-- Header -->

	<?php include "header.php"?>

	<!-- Menu -->
	<?php include "menu.php" ?>
	

	<!-- Home -->

	<div class="home">
		<div class="parallax_background parallax-window"  data-parallax="scroll" data-image-src="images/contact_page.webp" data-speed="0.8"></div>
		<div class="home_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="home_content">
							<div class="home_title"><h1>Contact</h1></div>
							<div class="breadcrumbs">
								<ul class="d-flex flex-row align-items-center justify-content-start">
									<li><a href="index">Home</a></li>
									<li>Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Contact -->

	<div class="contact container_wrapper">
		<div class="container">
			<div class="row row-eq-height">
				
				<!-- Map -->
				<div class="col-xl-6 order-xl-1 order-2">
					<div class="contact_map_container">
						<div class="map">
							<!--<div id="google_map" class="google_map">
								<div class="map_container">
									<div id="map"></div>
								</div>
							</div>-->
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9825912095375!2d10.194013314932276!3d36.8428929799398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sInstitut%20national%20des%20sciences%20appliqu%C3%A9es%20et%20de%20technologie!5e0!3m2!1sfr!2stn!4v1571176548414!5m2!1sfr!2stn" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

						</div>
					</div>
				</div>

				<!-- Contact Content -->
				<div class="col-xl-6 order-xl-2 order-1">
					<div class="contact_content">
						<div class="contact_title">Get in touch</div>
						<div class="contact_text">
						</div>
						<div class="contact_list">
							<ul>
							
								<li>1080 Tunis Cedex, Tunis 1080</li>
								<li>+216 96 671 872 </li>
								<li>ieee.ias.insat@gmail.com</li>
							</ul>
						</div>
						<div class="contact_form_container">
							<form action="mailto:ieee.ias.insat@gmail.com" class="contact_form" id="contact_form">
								<div class="d-flex flex-md-row flex-column align-items-start justify-content-between">
									<div><input type="text" class="contact_input" placeholder="Your name" required="required"></div>
									<div><input type="email" class="contact_input" placeholder="Your email" required="required"></div>
								</div>
								<input type="text" class="contact_input" placeholder="Subject">
								<textarea class="contact_textarea contact_input" placeholder="Message"></textarea>
								<button class="contact_button"><span>send<img src="images/arrow.webp" alt="fleche symbol"></span></button>
							</form>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<!-- CTA -->
	<?php include "CTA.html"; ?>


	<!-- Footer -->

	<?php include "footer.php"; ?>

</div>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="styles/bootstrap-4.1.2/popper.js"></script>
<script src="styles/bootstrap-4.1.2/bootstrap.min.js"></script>
<script src="plugins/greensock/TweenMax.min.js"></script>
<script src="plugins/greensock/TimelineMax.min.js"></script>
<script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
<script src="plugins/greensock/animation.gsap.min.js"></script>
<script src="plugins/greensock/ScrollToPlugin.min.js"></script>
<script src="plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/progressbar/progressbar.min.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA"></script>
<script src="js/contact.js"></script>
<script src="js/commun.js"></script>
<script>

$(document).ready(function () {


$('li.active').removeClass('active');
$('a[href="' + decodeURI(location.pathname).substring(1) + '"]').closest('li').addClass('active'); 
})

</script>
</body>
</html>