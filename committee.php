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
    <title>Committee</title>
    <link rel="shortcut icon" href="iasam.ico" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="IAS Tunisia Annual Meeting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="styles/bootstrap-4.1.2/bootstrap.min.css">
    <link rel="stylesheet" type="text/css"  href="plugins/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="plugins/colorbox/colorbox.css">
    <link rel="stylesheet" type="text/css" href="styles/blog.css">
    <link rel="stylesheet" type="text/css" href="styles/blog_responsive.css">
    <link rel="stylesheet" type="text/css" href="styles/header.css">
    <link rel="stylesheet" type="text/css" href="styles/footer.css">
    <link rel="stylesheet" type="text/css" href="styles/menu.css">
    <link rel="stylesheet" type="text/css" href="styles/CTA.css">
    <link rel="stylesheet" type="text/css" href="styles/teams.css">
    <link rel="stylesheet" type="text/css" href="styles/commun.css">

</head>

<body>

    <div class="super_container">

        <!-- Header -->

        <?php include "header.php" ?>


        <!-- Menu -->
        <?php include "menu.php" ?>

        <!-- Home -->

        <div class="home">
            <div class="parallax_background parallax-window"
                data-parallax="scroll" data-image-src="images/team.webp" data-speed="0.8"></div>
            <div class="home_container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="home_content">
                                <div class="home_title">
                                    <h1>Committee</h1>
                                </div>
                                <div class="breadcrumbs">
                                    <ul class="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="index">Home</a></li>
                                        <li>Committee</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Blog1 -->


        <!-- teams -->
        <?php include "team.php"; ?>
        
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
    <script src="js/blog.js"></script>
    <script src="js/commun.js"></script>
    <script>
    $(document).ready(function() {


        $('li.active').removeClass('active');
        $('a[href="' + decodeURI(location.pathname).substring(1) + '"]').closest('li').addClass('active');
    })
    </script>
</body>

</html>