<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="NIOS Career Point Berhampur - Leading academic guidance and educational consultancy center since 2011. Complete support for Direct 10th, +2 (Arts, Science, Commerce), Graduation, and Post Graduation programs in Odisha.">
    <meta name="theme-color" content="#3158D8">
    <title>NIOS Career Point Berhampur | Academic Guidance &amp; Admissions Since 2011</title>
    
    <!-- Google Fonts: Plus Jakarta Sans & Manrope (Matching Reference Design) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- GSAP & Lenis Smooth Motion Engine -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>

    <!-- Core Stylesheets -->
    <link rel="stylesheet" href="assets/css/splash.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body<?php echo (!isset($page_title) || basename($_SERVER['PHP_SELF']) === 'index.php') ? ' class="intro-active"' : ''; ?>>

    <!-- Floating / Contained Navigation System (Matching Reference Image 1) -->
    <header id="main-header" class="site-header">
        <div class="header-container">
            <a href="index.php" class="brand-link" id="header-brand-link" title="NIOS Career Point Berhampur - Home">
                <!-- Target logo measured by splash.js for seamless handoff -->
                <img
                    id="header-brand-logo"
                    class="header-logo-img"
                    src="assets/images/nios-career-point.svg"
                    alt="NIOS Career Point Berhampur"
                    width="220"
                    height="44"
                >
            </a>

            <!-- Desktop & Mobile Navigation Links -->
            <nav class="main-nav" id="main-nav" aria-label="Main Navigation">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="index.php" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.php" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="programs.php" class="nav-link">Programs</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.php#facilities" class="nav-link">Facilities</a>
                    </li>
                    <li class="nav-item">
                        <a href="why-us.php" class="nav-link">Why Us</a>
                    </li>
                    <li class="nav-item">
                        <a href="contact.php" class="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>

            <!-- Header Action Controls -->
            <div class="header-actions">
                <a href="contact.php" class="btn btn-nav-cta">
                    <span>Contact Us</span>
                </a>

                <!-- Mobile Menu Hamburger -->
                <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
