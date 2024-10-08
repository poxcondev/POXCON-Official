document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.service-item', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('.project-item', {
        delay: 200,
        scale: 0.85,
        distance: '0px',
        interval: 200
    });

    ScrollReveal().reveal('.contact-form', {
        delay: 200,
        distance: '50px',
        origin: 'left'
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // JSONデータをJavaScript内に定義  
    const data = [
        {
            "title": "Invoice Search",
            "description": "国税庁のインボイスAPIを使用した<br/>インボイス検索",
            "image": "./img/InvoiceSearch.png",
            "url": "https://github.com/poxcondev/Invoice-Search"
        },
        {
            "title": "Slack Post Manager",
            "description": "Slackの投稿取得および<br/>OCR表示用クライアント",
            "image": "./img/UnderConstruction.png",
            "url": "https://github.com/poxcondev/Slack-Post-Manager"
        },
        {
            "title": "AOAI Chatbot",
            "description": "Azure OpenAIのチャットボット",
            "image": "./img/UnderConstruction.png",
            "url": "https://github.com/poxcondev/AOAI-Chatbot"
        },
        {
            "title": "MiPre",
            "description": "Minecraft環境一括セットアップツール",
            "image": "./img/UnderConstruction.png",
            "url": "https://github.com/poxcondev/MiPre"
        }
    ];

    const track = document.querySelector('.carousel-track');
    data.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `  
            <div class="project-image" style="background-image: url('${project.image}');"></div>  
            <h3><a href=${project.url} target="_blank">${project.title}</a></h3>  
            <p>${project.description}</p>  
        `;
        track.appendChild(projectItem);
    });

    // メニュートグル機能の追加
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // カルーセル機能の実装  
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function updateCarousel() {
        const isMobile = window.innerWidth <= 768;
        const totalSlides = data.length;
        const maxVisibleSlides = isMobile ? 1 : 3;
        const trackWidth = track.getBoundingClientRect().width;
        const slideWidth = isMobile ? trackWidth : (trackWidth - (20 * (maxVisibleSlides - 1))) / maxVisibleSlides;

        track.style.transform = `translateX(-${currentSlide * (slideWidth + (isMobile ? 0 : 20))}px)`;

        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide >= totalSlides - maxVisibleSlides;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = Math.max(currentSlide - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768;
        const maxVisibleSlides = isMobile ? 1 : 3;
        currentSlide = Math.min(currentSlide + 1, data.length - maxVisibleSlides);
        updateCarousel();
    });

    // ウィンドウのリサイズ時にカルーセルを更新
    window.addEventListener('resize', updateCarousel);

    // 初期化時にカルーセルを更新
    updateCarousel();
});  
