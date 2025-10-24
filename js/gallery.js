// ================================
// Gallery & Lightbox Functionality
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

// ================================
// Gallery Initialization
// ================================
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentImageIndex = 0;
    let images = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const imageData = {
            src: item.dataset.image || img.src,
            alt: img.alt,
            index: index
        };
        images.push(imageData);

        // Click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });

        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View image: ${img.alt}`);

        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        showImage(currentImageIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management for accessibility
        lightboxClose.focus();
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';

        // Return focus to the clicked gallery item
        if (galleryItems[currentImageIndex]) {
            galleryItems[currentImageIndex].focus();
        }
    }

    // Show image
    function showImage(index) {
        if (images[index]) {
            lightboxImg.src = images[index].src;
            lightboxImg.alt = images[index].alt;
            lightboxCaption.textContent = images[index].alt;
            currentImageIndex = index;

            // Update navigation button states
            lightboxPrev.disabled = index === 0;
            lightboxNext.disabled = index === images.length - 1;

            // Add fade-in animation
            lightboxImg.style.opacity = '0';
            setTimeout(() => {
                lightboxImg.style.opacity = '1';
                lightboxImg.style.transition = 'opacity 0.3s ease';
            }, 10);
        }
    }

    // Previous image
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    }

    // Next image
    function showNextImage() {
        if (currentImageIndex < images.length - 1) {
            showImage(currentImageIndex + 1);
        }
    }

    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPreviousImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox when clicking on background
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // Touch gestures for mobile
    initTouchGestures(lightbox);

    // Preload adjacent images
    function preloadAdjacentImages() {
        if (images[currentImageIndex - 1]) {
            const prevImg = new Image();
            prevImg.src = images[currentImageIndex - 1].src;
        }
        if (images[currentImageIndex + 1]) {
            const nextImg = new Image();
            nextImg.src = images[currentImageIndex + 1].src;
        }
    }

    // Call preload when showing image
    lightboxImg.addEventListener('load', preloadAdjacentImages);
}

// ================================
// Touch Gestures for Mobile
// ================================
function initTouchGestures(lightbox) {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const minSwipeDistance = 50;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistanceX = touchEndX - touchStartX;
        const swipeDistanceY = touchEndY - touchStartY;

        // Horizontal swipe (left/right)
        if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
            if (Math.abs(swipeDistanceX) > minSwipeDistance) {
                if (swipeDistanceX > 0) {
                    // Swipe right - previous image
                    const prevButton = document.getElementById('lightbox-prev');
                    if (prevButton && !prevButton.disabled) {
                        prevButton.click();
                    }
                } else {
                    // Swipe left - next image
                    const nextButton = document.getElementById('lightbox-next');
                    if (nextButton && !nextButton.disabled) {
                        nextButton.click();
                    }
                }
            }
        }
        // Vertical swipe down - close lightbox
        else if (swipeDistanceY > minSwipeDistance * 2) {
            const closeButton = document.querySelector('.lightbox-close');
            if (closeButton) {
                closeButton.click();
            }
        }
    }
}

// ================================
// Gallery Filtering (Optional Enhancement)
// ================================
function initGalleryFiltering() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ================================
// Image Lazy Loading Enhancement
// ================================
function enhancedLazyLoading() {
    const images = document.querySelectorAll('.gallery-item img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src || img.src;

                // Load image
                const tempImg = new Image();
                tempImg.onload = () => {
                    img.src = src;
                    img.classList.add('loaded');
                    img.style.opacity = '1';
                };
                tempImg.src = src;

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

// ================================
// Gallery Grid Animation
// ================================
function animateGalleryOnScroll() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.95)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// Initialize gallery animations if on page
if (document.querySelector('.gallery-grid')) {
    animateGalleryOnScroll();
}

// ================================
// Utility: Download Image
// ================================
function downloadImage(imageUrl, filename) {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => console.error('Download failed:', error));
}

// ================================
// Gallery Performance Monitoring
// ================================
if (performance.mark) {
    performance.mark('gallery-init-start');
    window.addEventListener('load', () => {
        performance.mark('gallery-init-end');
        performance.measure('gallery-init', 'gallery-init-start', 'gallery-init-end');

        const measure = performance.getEntriesByName('gallery-init')[0];
        console.log(`Gallery initialized in ${measure.duration.toFixed(2)}ms`);
    });
}
