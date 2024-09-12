// Function to animate counting up to a target number
function animateValue(id, start, end, duration, plusSign = false) {
    let current = start;
    const range = end - start;
    const increment = end > start ? Math.ceil(range / (duration / 16)) : Math.floor(range / (duration / 16));
    const stepTime = 16; // 60 fps
    const obj = document.getElementById(id);
    
    const timer = setInterval(function() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            obj.innerHTML = plusSign ? end.toLocaleString() + '+' : end.toLocaleString();
            clearInterval(timer);
        } else {
            obj.innerHTML = plusSign ? current.toLocaleString() + '+' : current.toLocaleString();
        }
    }, stepTime);
}

// Function to animate rating
function animateRating(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 16);
    const stepTime = 16; // 60 fps
    const obj = document.getElementById(id);
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= end) {
            obj.innerHTML = end.toFixed(1);
            clearInterval(timer);
        } else {
            obj.innerHTML = current.toFixed(1);
        }
    }, stepTime);
}

// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to trigger animations when elements are in the viewport
function triggerAnimations() {
    const userCountElement = document.getElementById('userCount');
    const ratingElement = document.getElementById('rating');
    const hospitalsElement = document.getElementById('hospitals');
    const inventoryItemsElement = document.getElementById('inventoryItems');

    if (isInViewport(userCountElement)) {
        animateValue("userCount", 0, 50000, 1000, true);
    }

    if (isInViewport(ratingElement)) {
        animateRating("rating", 0, 4.8, 1000);
    }

    if (isInViewport(hospitalsElement)) {
        animateValue("hospitals", 0, 500, 1000, true);
    }

    if (isInViewport(inventoryItemsElement)) {
        animateValue("inventoryItems", 0, 1000000, 1000, true);
    }
}

// Run animations on page load
document.addEventListener('DOMContentLoaded', (event) => {
    triggerAnimations();  // Trigger animations when the page loads
});

// Run animations when the user scrolls
window.addEventListener('scroll', () => {
    triggerAnimations();  // Trigger animations on scroll
});
