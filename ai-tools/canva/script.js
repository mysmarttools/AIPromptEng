* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: #172033;
    background: #fff;
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

.container {
    width: min(1120px, calc(100% - 40px));
    margin: auto;
}

.narrow {
    max-width: 850px;
}

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255,255,255,.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #edf0f5;
}

.header-inner {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -.7px;
}

.logo span {
    color: #635bff;
}

.desktop-nav {
    display: flex;
    gap: 28px;
}

.desktop-nav a {
    font-size: 14px;
    font-weight: 600;
    color: #536075;
}

.desktop-nav a:hover {
    color: #635bff;
}

.menu-toggle {
    display: none;
    border: 0;
    background: transparent;
    font-size: 27px;
    cursor: pointer;
}

.mobile-nav {
    display: none;
}

.breadcrumb-section {
    background: #fafbff;
    border-bottom: 1px solid #eef0f5;
}

.breadcrumb {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 13px;
    color: #7b8496;
}

.hero-section {
    padding: 80px 0;
    background:
        radial-gradient(circle at 85% 15%,rgba(99,91,255,.1),transparent 30%),
        linear-gradient(135deg,#fbfbff,#fff);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.25fr .75fr;
    gap: 70px;
    align-items: center;
}

.tool-label,
.section-heading span,
.cta-box > div > span {
    color: #635bff;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.hero-content h1 {
    margin-top: 14px;
    font-size: clamp(44px,6vw,68px);
    line-height: 1.05;
    letter-spacing: -2.5px;
    color: #101828;
}

.hero-content h2 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.35;
    color: #374151;
}

.hero-description {
    margin-top: 22px;
    max-width: 700px;
    font-size: 17px;
    color: #667085;
}

.hero-buttons {
    display: flex;
    gap: 13px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.primary-btn,
.secondary-btn,
.cta-button,
.directory-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 23px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    transition: .25s;
}

.primary-btn {
    background: #635bff;
    color: #fff;
    box-shadow: 0 10px 25px rgba(99,91,255,.2);
}

.primary-btn:hover {
    background: #5148e5;
    transform: translateY(-2px);
}

.secondary-btn {
    border: 1px solid #dfe3ea;
    background: #fff;
    color: #344054;
}

.secondary-btn:hover {
    border-color: #635bff;
    color: #635bff;
}

.hero-card {
    padding: 35px;
    border: 1px solid #e6e9f0;
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 20px 60px rgba(16,24,40,.08);
    text-align: center;
}

.hero-icon {
    width: 82px;
    height: 82px;
    margin: 0 auto 20px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0efff;
    font-size: 42px;
}

.hero-card h3 {
    font-size: 24px;
}

.hero-card-text {
    color: #667085;
    font-size: 14px;
}

.stars {
    margin: 17px 0 24px;
    color: #635bff;
    letter-spacing: 3px;
}

.hero-info {
    border-top: 1px solid #edf0f4;
    padding-top: 20px;
    display: grid;
    gap: 15px;
    text-align: left;
}

.hero-info div {
    display: flex;
    justify-content: space-between;
    gap: 15px;
}

.hero-info span {
    color: #8a93a3;
    font-size: 13px;
}

.hero-info strong {
    font-size: 13px;
    text-align: right;
}

.content-section {
    padding: 85px 0;
}

.light-section,
.features-section,
.faq-section,
.related-section {
    background: #f8f9fc;
}

.section-heading {
    margin-bottom: 35px;
}

.section-heading h2 {
    margin-top: 8px;
    font-size: 38px;
    line-height: 1.2;
    letter-spacing: -1px;
}

.section-heading p {
    margin-top: 12px;
    color: #667085;
}

.section-heading.center {
    text-align: center;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}

.content-section p {
    margin-bottom: 20px;
    color: #667085;
    font-size: 16px;
}

.features-section,
.faq-section,
.related-section {
    padding: 90px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}

.feature-card {
    padding: 28px;
    background: #fff;
    border: 1px solid #e7eaf0;
    border-radius: 16px;
    transition: .25s;
}

.feature-card:hover {
    transform: translateY(-4px);
    border-color: #d9d6ff;
    box-shadow: 0 14px 35px rgba(16,24,40,.07);
}

.feature-icon {
    font-size: 28px;
    margin-bottom: 16px;
}

.feature-card h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.feature-card p,
.use-case-card p {
    color: #667085;
    font-size: 14px;
}

.use-cases-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 18px;
}

.use-case-card {
    padding: 28px 22px;
    border: 1px solid #e6e9ef;
    border-radius: 16px;
    background: #fff;
}

.use-case-card > span {
    font-size: 30px;
}

.use-case-card h3 {
    margin-top: 14px;
    font-size: 17px;
}

.use-case-card p {
    margin-top: 9px;
}

.pros-cons-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
}

.pros-box,
.cons-box {
    padding: 32px;
    border-radius: 18px;
    border: 1px solid #e5e8ee;
    background: #fff;
}

.pros-box h3 {
    color: #16803c;
}

.cons-box h3 {
    color: #d64545;
}

.pros-box ul,
.cons-box ul {
    list-style: none;
    margin-top: 15px;
}

.pros-box li,
.cons-box li {
    padding: 8px 0 8px 25px;
    color: #667085;
    font-size: 14px;
    position: relative;
}

.pros-box li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #16803c;
}

.cons-box li::before {
    content: "×";
    position: absolute;
    left: 0;
    color: #d64545;
}

.worth-section {
    padding: 90px 0;
    background: linear-gradient(135deg,#f7f6ff,#fff);
}

.center-button {
    text-align: center;
    margin-top: 30px;
}

.cta-section {
    padding: 70px 0;
}

.cta-box {
    padding: 45px;
    border-radius: 22px;
    background: #635bff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.cta-box > div > span {
    color: rgba(255,255,255,.75);
}

.cta-box h2 {
    margin-top: 8px;
    font-size: 34px;
}

.cta-box p {
    margin-top: 8px;
    color: rgba(255,255,255,.8);
}

.cta-button {
    flex-shrink: 0;
    background: #fff;
    color: #5148e5;
}

.faq-list {
    display: grid;
    gap: 12px;
}

.faq-item {
    background: #fff;
    border: 1px solid #e5e8ee;
    border-radius: 12px;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 20px 22px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
}

.faq-question span {
    font-size: 22px;
    color: #635bff;
}

.faq-item.active .faq-question span {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease;
}

.faq-answer p {
    padding: 0 22px 20px;
    color: #667085;
    font-size: 14px;
}

.directory-section {
    padding: 80px 0;
}

.directory-box {
    padding: 55px 40px;
    text-align: center;
    border-radius: 22px;
    border: 1px solid #e4e1ff;
    background: linear-gradient(135deg,#f8f7ff,#fff);
}

.directory-label {
    color: #635bff;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.directory-box h2 {
    margin-top: 10px;
    font-size: 35px;
}

.directory-box p {
    margin: 12px auto 25px;
    max-width: 650px;
    color: #667085;
}

.directory-button {
    background: #635bff;
    color: #fff;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 16px;
}

.related-card {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 20px;
    border: 1px solid #e5e8ee;
    border-radius: 14px;
    background: #fff;
    transition: .25s;
}

.related-card:hover {
    transform: translateY(-3px);
    border-color: #cfcaff;
}

.related-icon {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0efff;
    font-size: 22px;
}

.related-card h3 {
    font-size: 15px;
}

.related-card p {
    font-size: 12px;
    color: #8992a3;
}

.related-card > span:last-child {
    margin-left: auto;
    color: #635bff;
}

.site-footer {
    background: #101828;
    color: #fff;
    padding-top: 65px;
}

.footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 60px;
    padding-bottom: 55px;
}

.footer-brand .logo {
    color: #fff;
}

.footer-brand p {
    max-width: 430px;
    margin-top: 15px;
    color: #98a2b3;
    font-size: 14px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.footer-links h3 {
    font-size: 15px;
}

.footer-links a {
    color: #98a2b3;
    font-size: 13px;
}

.footer-links a:hover {
    color: #fff;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,.08);
    padding: 20px 0;
    color: #667085;
    font-size: 12px;
}

@media (max-width:900px) {

    .desktop-nav {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .mobile-nav {
        display: none;
        flex-direction: column;
        padding: 12px 20px 20px;
        background: #fff;
    }

    .mobile-nav.active {
        display: flex;
    }

    .mobile-nav a {
        padding: 11px 0;
        border-bottom: 1px solid #f0f1f4;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        gap: 45px;
    }

    .hero-content {
        text-align: center;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .features-grid,
    .use-cases-grid,
    .related-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .cta-box {
        flex-direction: column;
        text-align: center;
    }

    .footer-inner {
        grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
        grid-column: 1/-1;
    }
}

@media (max-width:600px) {

    .container {
        width: min(100% - 28px,1120px);
    }

    .hero-section {
        padding: 55px 0;
    }

    .hero-content h1 {
        font-size: 44px;
    }

    .hero-content h2 {
        font-size: 20px;
    }

    .hero-description {
        font-size: 15px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
    }

    .features-grid,
    .use-cases-grid,
    .pros-cons-grid,
    .related-grid {
        grid-template-columns: 1fr;
    }

    .section-heading h2 {
        font-size: 30px;
    }

    .cta-box {
        padding: 35px 22px;
    }

    .cta-button {
        width: 100%;
    }

    .directory-box {
        padding: 40px 20px;
    }

    .directory-box h2 {
        font-size: 29px;
    }

    .footer-inner {
        grid-template-columns: 1fr;
    }

    .footer-brand {
        grid-column: auto;
    }
}
