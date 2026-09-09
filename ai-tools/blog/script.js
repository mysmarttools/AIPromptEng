/* =========================================================
   AIPROMPTENG BLOG
   PROFESSIONAL RESPONSIVE DESIGN
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: #f8fafc;
    color: #172033;
    line-height: 1.8;
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    width: min(1180px, 92%);
    margin: auto;
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    width: min(1180px, 92%);
    margin: auto;
    min-height: 74px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
    color: #111827;
}

.logo span {
    color: #635bff;
}

.navbar {
    display: flex;
    align-items: center;
    gap: 30px;
}

.navbar a {
    font-size: 14px;
    font-weight: 600;
    color: #4b5563;
    transition: 0.25s ease;
}

.navbar a:hover,
.navbar a.active {
    color: #635bff;
}

.menu-toggle {
    display: none;
    border: none;
    background: transparent;
    font-size: 26px;
    cursor: pointer;
    color: #111827;
}


/* =========================================================
   BREADCRUMB
========================================================= */

.breadcrumb-wrapper {
    background: #ffffff;
    border-bottom: 1px solid #edf0f4;
}

.breadcrumb {
    padding: 16px 0;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;

    font-size: 13px;
    color: #7b8494;
}

.breadcrumb a {
    color: #635bff;
    font-weight: 600;
}


/* =========================================================
   HERO
========================================================= */

.article-hero {
    background:
        radial-gradient(circle at top right, rgba(99, 91, 255, .12), transparent 35%),
        linear-gradient(135deg, #ffffff, #f5f7ff);

    padding: 75px 0 70px;

    border-bottom: 1px solid #e9ecf3;
}

.category-badge {
    display: inline-block;

    padding: 7px 14px;

    border-radius: 50px;

    background: #edeaff;
    color: #5b50d6;

    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;

    margin-bottom: 20px;
}

.article-hero h1 {
    max-width: 900px;

    font-size: clamp(34px, 5vw, 58px);

    line-height: 1.12;

    letter-spacing: -2px;

    color: #101828;

    margin-bottom: 24px;
}

.hero-description {
    max-width: 800px;

    font-size: 18px;

    color: #667085;

    margin-bottom: 25px;
}

.article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    color: #667085;

    font-size: 13px;

    font-weight: 500;
}


/* =========================================================
   ARTICLE LAYOUT
========================================================= */

.article-layout {
    display: grid;

    grid-template-columns: minmax(0, 1fr) 300px;

    gap: 55px;

    padding-top: 60px;
    padding-bottom: 80px;
}

.article-content {
    background: #ffffff;

    border: 1px solid #e7eaf0;

    border-radius: 18px;

    padding: clamp(25px, 5vw, 55px);

    box-shadow: 0 8px 30px rgba(15, 23, 42, .04);
}

.article-content p {
    font-size: 16px;
    color: #4b5563;

    margin-bottom: 20px;
}

.article-content .lead {
    font-size: 19px;

    color: #374151;

    line-height: 1.85;

    border-left: 4px solid #635bff;

    padding-left: 20px;

    margin-bottom: 28px;
}

.article-content strong {
    color: #111827;
}


/* =========================================================
   HEADINGS
========================================================= */

.article-content h2 {
    font-size: 31px;

    line-height: 1.3;

    letter-spacing: -.7px;

    color: #111827;

    margin-top: 52px;
    margin-bottom: 20px;
}

.article-content h3 {
    font-size: 21px;

    line-height: 1.4;

    color: #1f2937;

    margin-top: 32px;
    margin-bottom: 13px;
}


/* =========================================================
   LIST
========================================================= */

.article-content ul {
    margin: 0 0 25px 23px;
}

.article-content li {
    padding: 5px 0;

    color: #4b5563;

    font-size: 16px;
}


/* =========================================================
   PROMPT BOX
========================================================= */

.prompt-box {
    background: #111827;

    color: #f8fafc;

    padding: 20px 22px;

    border-radius: 12px;

    margin: 18px 0 25px;

    font-family: Consolas, Monaco, monospace;

    font-size: 14px;

    line-height: 1.8;

    border: 1px solid #263244;

    overflow-x: auto;
}


/* =========================================================
   TIP BOX
========================================================= */

.tip-box {
    background: #f0f7ff;

    border-left: 4px solid #3b82f6;

    padding: 18px 20px;

    border-radius: 10px;

    margin: 25px 0;

    color: #334155;
}


/* =========================================================
   FORMULA
========================================================= */

.formula-box {
    background: #f5f3ff;

    border: 1px solid #ddd6fe;

    color: #4c1d95;

    padding: 22px;

    text-align: center;

    border-radius: 12px;

    margin: 22px 0 28px;

    font-size: 18px;
}


/* =========================================================
   INTERNAL LINK BOX
========================================================= */

.inline-link-box {
    margin: 38px 0;

    padding: 25px;

    border-radius: 14px;

    background: #f8f7ff;

    border: 1px solid #ddd9ff;
}

.inline-link-box h3 {
    margin-top: 0;
}

.inline-link-box a {
    color: #5b50d6;

    text-decoration: underline;

    text-decoration-thickness: 1px;
}


/* =========================================================
   CTA
========================================================= */

.cta-box {
    background:
        linear-gradient(135deg, #635bff, #4f46e5);

    color: #ffffff;

    padding: 35px;

    border-radius: 18px;

    margin: 45px 0;
}

.cta-box h3 {
    color: #ffffff;

    font-size: 27px;

    margin-top: 10px;
}

.cta-box p {
    color: rgba(255,255,255,.85);
}

.cta-label {
    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1px;

    opacity: .8;
}

.cta-button {
    display: inline-block;

    padding: 12px 20px;

    background: #ffffff;

    color: #4f46e5;

    border-radius: 9px;

    font-size: 14px;

    font-weight: 700;

    transition: .25s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
}


/* =========================================================
   FAQ
========================================================= */

.faq-container {
    margin-top: 25px;
}

.faq-item {
    border: 1px solid #e5e7eb;

    border-radius: 11px;

    margin-bottom: 12px;

    overflow: hidden;

    background: #ffffff;
}

.faq-question {
    width: 100%;

    padding: 18px 20px;

    border: none;

    background: #ffffff;

    cursor: pointer;

    display: flex;

    justify-content: space-between;

    align-items: center;

    text-align: left;

    font-family: inherit;

    font-size: 15px;

    font-weight: 700;

    color: #1f2937;
}

.faq-question span {
    font-size: 21px;

    color: #635bff;

    transition: .2s ease;
}

.faq-item.open .faq-question span {
    transform: rotate(45deg);
}

.faq-answer {
    display: none;

    padding: 0 20px 18px;
}

.faq-item.open .faq-answer {
    display: block;
}

.faq-answer p {
    margin: 0;

    font-size: 14px;
}


/* =========================================================
   BOTTOM CTA
========================================================= */

.bottom-cta {
    margin-top: 55px;

    padding: 35px;

    background: #f8fafc;

    border: 1px solid #e5e7eb;

    border-radius: 16px;

    text-align: center;
}

.bottom-cta h2 {
    margin-top: 0;
}

.cta-buttons {
    display: flex;

    justify-content: center;

    gap: 12px;

    flex-wrap: wrap;

    margin-top: 20px;
}

.primary-button,
.secondary-button {
    padding: 12px 20px;

    border-radius: 9px;

    font-size: 14px;

    font-weight: 700;
}

.primary-button {
    background: #635bff;

    color: #ffffff;
}

.secondary-button {
    background: #ffffff;

    color: #635bff;

    border: 1px solid #cfcaff;
}


/* =========================================================
   SIDEBAR
========================================================= */

.article-sidebar {
    position: relative;
}

.sidebar-card {
    background: #ffffff;

    border: 1px solid #e7eaf0;

    border-radius: 15px;

    padding: 23px;

    margin-bottom: 20px;

    position: sticky;

    top: 100px;
}

.sidebar-card + .sidebar-card {
    position: static;
}

.sidebar-card h3 {
    margin: 0 0 16px;

    font-size: 17px;
}

.sidebar-card a {
    display: block;

    padding: 9px 0;

    color: #667085;

    font-size: 13px;

    border-bottom: 1px solid #f0f1f4;

    transition: .2s ease;
}

.sidebar-card a:hover {
    color: #635bff;

    padding-left: 4px;
}

.highlight-card {
    background: #f5f3ff;

    border-color: #ddd6fe;
}

.sidebar-icon {
    font-size: 27px;

    margin-bottom: 8px;
}

.highlight-card p {
    font-size: 13px;

    color: #667085;

    margin-bottom: 15px;
}

.sidebar-button {
    background: #635bff;

    color: #ffffff !important;

    text-align: center;

    border-radius: 8px;

    padding: 10px !important;

    margin-bottom: 9px;

    border: none !important;
}

.sidebar-button.outline {
    background: #ffffff;

    color: #635bff !important;

    border: 1px solid #cfcaff !important;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    background: #101828;

    color: #ffffff;
}

.footer-container {
    width: min(1180px, 92%);

    margin: auto;

    padding: 55px 0 40px;

    display: grid;

    grid-template-columns: 2fr 1fr 1fr;

    gap: 50px;
}

.footer-logo {
    color: #ffffff;
}

.footer-brand p {
    max-width: 450px;

    color: #98a2b3;

    font-size: 14px;

    margin-top: 15px;
}

.footer-links {
    display: flex;

    flex-direction: column;

    gap: 10px;
}

.footer-links h3 {
    font-size: 14px;

    margin-bottom: 7px;
}

.footer-links a {
    color: #98a2b3;

    font-size: 13px;

    transition: .2s ease;
}

.footer-links a:hover {
    color: #ffffff;
}

.footer-bottom {
    border-top: 1px solid #253044;

    padding: 20px;

    text-align: center;

    color: #667085;

    font-size: 12px;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {

    .article-layout {
        grid-template-columns: 1fr;

        gap: 30px;
    }

    .article-sidebar {
        display: none;
    }

    .footer-container {
        grid-template-columns: 1fr 1fr;
    }

}


@media (max-width: 700px) {

    .header-container {
        min-height: 65px;
    }

    .navbar {
        display: none;

        position: absolute;

        top: 65px;

        left: 0;

        right: 0;

        background: #ffffff;

        border-bottom: 1px solid #e5e7eb;

        padding: 15px 5%;

        flex-direction: column;

        align-items: flex-start;

        gap: 0;
    }

    .navbar.show {
        display: flex;
    }

    .navbar a {
        width: 100%;

        padding: 12px 0;

        border-bottom: 1px solid #f1f2f4;
    }

    .menu-toggle {
        display: block;
    }

    .article-hero {
        padding: 48px 0 45px;
    }

    .article-hero h1 {
        letter-spacing: -1px;

        font-size: 34px;
    }

    .hero-description {
        font-size: 16px;
    }

    .article-layout {
        padding-top: 25px;
    }

    .article-content {
        border-radius: 12px;

        padding: 23px 18px;
    }

    .article-content h2 {
        font-size: 27px;

        margin-top: 42px;
    }

    .article-content h3 {
        font-size: 19px;
    }

    .article-content p {
        font-size: 15px;
    }

    .article-content .lead {
        font-size: 17px;
    }

    .prompt-box {
        font-size: 13px;

        padding: 17px;
    }

    .cta-box {
        padding: 26px 20px;
    }

    .bottom-cta {
        padding: 25px 18px;
    }

    .footer-container {
        grid-template-columns: 1fr;

        gap: 30px;
    }

}


@media (max-width: 450px) {

    .logo {
        font-size: 21px;
    }

    .breadcrumb {
        font-size: 11px;
    }

    .article-hero h1 {
        font-size: 29px;
    }

    .article-meta {
        font-size: 11px;
    }

}
