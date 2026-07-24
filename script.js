document.addEventListener('DOMContentLoaded', () => {
    
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            console.log('Menu mobile clicado!');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5', 'py-4');
            header.classList.remove('py-6', 'bg-transparent');
        } else {
            header.classList.remove('bg-brand-dark/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/5', 'py-4');
            header.classList.add('py-6', 'bg-transparent');
        }
    });

});