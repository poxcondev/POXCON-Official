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
            "image": "./img/InvoiceSearch.png"
        },
        {
            "title": "Slack Post Manager",
            "description": "Slackの投稿取得および<br/>OCR表示用クライアント",
            "image": "./img/UnderConstruction.png"
        },
        {
            "title": "AOAI Chatbot",
            "description": "Azure OpenAIのチャットボット",
            "image": "./img/UnderConstruction.png"
        },
        {
            "title": "MiPre",
            "description": "Minecraft環境一括セットアップツール",
            "image": "./img/UnderConstruction.png"
        }
    ];

    const track = document.querySelector('.carousel-track');
    data.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `  
            <div class="project-image" style="background-image: url('${project.image}');"></div>  
            <h3>${project.title}</h3>  
            <p>${project.description}</p>  
        `;
        track.appendChild(projectItem);
    });

    // カルーセル機能の実装  
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function updateCarousel() {
        const totalSlides = data.length;
        const maxVisibleSlides = 3;
        const trackWidth = track.getBoundingClientRect().width;
        const slideWidth = (trackWidth - (20 * (maxVisibleSlides - 1))) / maxVisibleSlides;
        track.style.transform = `translateX(-${currentSlide * (slideWidth + 20)}px)`;

        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide >= totalSlides - maxVisibleSlides;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = Math.max(currentSlide - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = Math.min(currentSlide + 1, data.length - 3);
        updateCarousel();
    });

    updateCarousel();
});  
