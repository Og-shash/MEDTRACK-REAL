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

// Animate stats when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    animateValue("userCount", 0, 50000, 1000, true);
    animateRating("rating", 0, 4.8, 1000);
    animateValue("hospitals", 0, 500, 1000, true);
    animateValue("inventoryItems", 0, 1000000, 1000, true);
});
