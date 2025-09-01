// Set the date for the countdowns
const countdownDateSingle = new Date("Sep 12, 2025 00:00:00").getTime();
const countdownDateMerch = new Date("Oct 1, 2025 00:00:00").getTime(); // Example date

// Update the countdown every 1 second
const countdownFunction = (countdownId, countdownDate) => {
    const countdownElement = document.getElementById(countdownId);

    if (countdownElement) {
        const interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countdownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element
            countdownElement.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "RELEASED";
            }
        }, 1000);
    }
};

// Initialize the countdowns
countdownFunction("countdown-timer-single", countdownDateSingle);
countdownFunction("countdown-timer-merch", countdownDateMerch);

// Music Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('musicCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (carousel) {
        let currentIndex = 0;
        const totalItems = 3;
        
        // Function to update carousel position
        function updateCarousel() {
            const translateX = -currentIndex * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Next button functionality
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            });
        }
        
        // Previous button functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            });
        }
        
        // Indicator functionality
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next
                    currentIndex = (currentIndex + 1) % totalItems;
                } else {
                    // Swipe right - previous
                    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                }
                updateCarousel();
            }
        }
        
        // Auto-play functionality (optional)
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }, 5000); // Change slide every 5 seconds
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }
        
        // Start auto-play and stop on user interaction
        startAutoPlay();
        
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        if (prevBtn) prevBtn.addEventListener('mouseenter', stopAutoPlay);
        if (nextBtn) nextBtn.addEventListener('mouseenter', stopAutoPlay);
    }
});