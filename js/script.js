// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.querySelector(".icon-menu");
    const headerNavigation = document.querySelector(".header__navigation");
    
    if (iconMenu && headerNavigation) {
        iconMenu.addEventListener("click", function (event) {
            event.preventDefault();
            iconMenu.classList.toggle("active");
            headerNavigation.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
        
        // Close menu when clicking on a link
        const menuLinks = headerNavigation.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                iconMenu.classList.remove("active");
                headerNavigation.classList.remove("active");
                document.body.classList.remove("menu-open");
            });
        });
    }
});

// FAQ Spoller Functionality
const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const currentItem = button.closest("[data-spoller]");
        const content = currentItem.querySelector(".spollers-faq__text");

        const parent = currentItem.parentNode;
        const isOneSpoller = parent.hasAttribute("data-one-spoller");

        if (isOneSpoller) {
            const allItems = parent.querySelectorAll("[data-spoller]");
            allItems.forEach((item) => {
                if (item !== currentItem) {
                    const otherContent = item.querySelector(".spollers-faq__text");
                    item.classList.remove("active");
                    otherContent.style.maxHeight = null;
                }
            });
        }

        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active");
            content.style.maxHeight = null;
        } else {
            currentItem.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Debug and ensure links work
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wolf Finances website loaded successfully!');
    
    // Ensure all links work properly
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked:', this.href);
        });
    });
    
    // Specifically ensure hero buttons work
    const heroButtons = document.querySelectorAll('.main__cta-group a');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Hero button clicked:', this.href);
            // Ensure the link works
            window.location.href = this.href;
        });
    });
    
    // Ensure floating CTA works
    const floatingCTA = document.querySelector('.floating-cta__button');
    if (floatingCTA) {
        floatingCTA.addEventListener('click', function(e) {
            console.log('Floating CTA clicked:', this.href);
            window.location.href = this.href;
        });
    }
});
