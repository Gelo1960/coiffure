// Enhanced Features - Fonctionnalités avancées inspirées d'Apple
// Gestion des gestes, animations fluides, et interactions sophistiquées

class LiquidGlassEffects {
    constructor() {
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.isSwipeGesture = false;
        
        this.init();
    }

    init() {
        this.setupGestureHandling();
        this.setupScrollEffects();
        this.setupKeyboardNavigation();
        this.setupPerformanceOptimizations();
        this.setupAccessibilityFeatures();
        this.initSoundEffects();
    }

    // Gestion des gestes tactiles (iPhone/iPad style)
    setupGestureHandling() {
        const galleryContainer = document.getElementById('galleryContainer');
        
        // Support des gestes de balayage
        galleryContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
            this.isSwipeGesture = false;
        }, { passive: true });

        galleryContainer.addEventListener('touchmove', (e) => {
            if (!this.touchStartX || !this.touchStartY) return;
            
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            
            const diffX = this.touchStartX - touchX;
            const diffY = this.touchStartY - touchY;
            
            // Détecter la direction du swipe
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
                this.isSwipeGesture = true;
                e.preventDefault();
                
                if (diffX > 0) {
                    // Swipe gauche - changer de layout
                    this.triggerLayoutTransition('next');
                } else {
                    // Swipe droite - layout précédent
                    this.triggerLayoutTransition('prev');
                }
            }
        }, { passive: false });

        // Support des gestes de pincement (zoom)
        galleryContainer.addEventListener('gesturestart', (e) => {
            e.preventDefault();
        });

        galleryContainer.addEventListener('gesturechange', (e) => {
            e.preventDefault();
            const scale = Math.max(0.5, Math.min(2, e.scale));
            this.applyZoomEffect(scale);
        });
    }

    // Effets de scroll fluides
    setupScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollEffects();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    updateScrollEffects() {
        const scrollY = window.scrollY;
        const header = document.querySelector('.main-header');
        
        if (header && !this.isReducedMotion) {
            // Effet parallax subtil sur le header
            const parallaxOffset = scrollY * 0.5;
            header.style.transform = `translateY(${parallaxOffset}px)`;
            
            // Fade effect basé sur le scroll
            const opacity = Math.max(0, 1 - scrollY / 300);
            header.style.opacity = opacity;
        }
    }

    // Navigation au clavier (accessibilité)
    setupKeyboardNavigation() {
        let currentFocusIndex = -1;
        const imageWrappers = document.querySelectorAll('.image-wrapper');
        
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    currentFocusIndex = Math.min(currentFocusIndex + 1, imageWrappers.length - 1);
                    this.focusImage(currentFocusIndex);
                    break;
                    
                case 'ArrowLeft':
                    e.preventDefault();
                    currentFocusIndex = Math.max(currentFocusIndex - 1, 0);
                    this.focusImage(currentFocusIndex);
                    break;
                    
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (currentFocusIndex >= 0) {
                        imageWrappers[currentFocusIndex].click();
                    }
                    break;
                    
                case 'Escape':
                    this.closeAllModals();
                    break;
                    
                case '1':
                case '2':
                case '3':
                    e.preventDefault();
                    this.switchLayout(parseInt(e.key) - 1);
                    break;
            }
        });
    }

    focusImage(index) {
        const imageWrappers = document.querySelectorAll('.image-wrapper');
        
        // Retirer le focus précédent
        imageWrappers.forEach(wrapper => {
            wrapper.classList.remove('keyboard-focus');
        });
        
        // Ajouter le focus actuel
        if (imageWrappers[index]) {
            imageWrappers[index].classList.add('keyboard-focus');
            imageWrappers[index].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }

    // Optimisations de performance
    setupPerformanceOptimizations() {
        // Lazy loading amélioré
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Observer toutes les images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Préchargement intelligent
        this.preloadCriticalImages();
    }

    preloadCriticalImages() {
        // Précharger les 10 premières images pour une expérience plus fluide
        const criticalImages = Array.from(document.querySelectorAll('.image-wrapper img')).slice(0, 10);
        
        criticalImages.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        });
    }

    // Fonctionnalités d'accessibilité
    setupAccessibilityFeatures() {
        // Respect des préférences utilisateur
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addListener((e) => {
            this.isReducedMotion = e.matches;
            this.updateAnimationsBasedOnPreference();
        });

        // Support du mode sombre
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.addListener((e) => {
            this.updateTheme(e.matches ? 'dark' : 'light');
        });

        // Annonces pour les lecteurs d'écran
        this.setupScreenReaderAnnouncements();
    }

    updateAnimationsBasedOnPreference() {
        const root = document.documentElement;
        
        if (this.isReducedMotion) {
            root.style.setProperty('--animation-duration', '0.01s');
            root.style.setProperty('--transition-duration', '0.01s');
        } else {
            root.style.setProperty('--animation-duration', '0.8s');
            root.style.setProperty('--transition-duration', '0.4s');
        }
    }

    setupScreenReaderAnnouncements() {
        // Créer une zone d'annonce pour les lecteurs d'écran
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(announcer);
        
        this.announcer = announcer;
    }

    announce(message) {
        if (this.announcer) {
            this.announcer.textContent = message;
        }
    }

    // Effets sonores subtils
    initSoundEffects() {
        // Créer des sons pour les interactions (optionnel)
        this.audioContext = null;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio Context non supporté');
        }
    }

    playInteractionSound(type = 'click') {
        if (!this.audioContext || this.isReducedMotion) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Fréquences pour différents types d'interactions
        const frequencies = {
            click: 800,
            hover: 400,
            focus: 600
        };
        
        oscillator.frequency.setValueAtTime(frequencies[type] || 400, this.audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }

    // Transitions de layout fluides
    triggerLayoutTransition(direction) {
        const layouts = ['grid', 'line', 'circle'];
        let currentLayout = 0; // À implémenter selon votre logique
        
        if (direction === 'next') {
            currentLayout = (currentLayout + 1) % layouts.length;
        } else {
            currentLayout = (currentLayout - 1 + layouts.length) % layouts.length;
        }
        
        this.switchLayout(currentLayout);
        this.announce(`Layout changé vers ${layouts[currentLayout]}`);
    }

    switchLayout(layoutIndex) {
        const layouts = ['grid', 'line', 'circle'];
        const layoutName = layouts[layoutIndex];
        
        // Animation de transition fluide
        const galleryContainer = document.getElementById('galleryContainer');
        galleryContainer.style.opacity = '0.7';
        galleryContainer.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            // Appliquer le nouveau layout (à connecter avec votre logique existante)
            this.applyLayout(layoutName);
            
            galleryContainer.style.opacity = '1';
            galleryContainer.style.transform = 'scale(1)';
        }, 200);
    }

    applyLayout(layoutName) {
        // À connecter avec vos fonctions existantes
        // applyGridLayout(), applySingleLineLayout(), applyCircularLayout()
        console.log(`Applying ${layoutName} layout`);
    }

    applyZoomEffect(scale) {
        const galleryContainer = document.getElementById('galleryContainer');
        if (galleryContainer && !this.isReducedMotion) {
            galleryContainer.style.transform = `scale(${scale})`;
        }
    }

    closeAllModals() {
        const focusedImage = document.querySelector('.image-wrapper.focused-image');
        if (focusedImage) {
            focusedImage.click();
        }
    }

    updateTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.announce(`Thème changé vers ${theme}`);
    }
}

// Initialiser les effets améliorés
document.addEventListener('DOMContentLoaded', () => {
    const liquidGlass = new LiquidGlassEffects();
    
    // Exposer globalement pour debugging
    window.liquidGlass = liquidGlass;
    
    console.log('🎨 Liquid Glass Effects initialized');
}); 