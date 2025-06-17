/**
 * AMÉLIORATIONS MOBILES POUR LA GALERIE
 * Optimisations spécifiques pour la navigation tactile
 */

class MobileEnhancements {
    constructor() {
        this.isMobile = this.detectMobile();
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        this.currentLayout = 0;
        this.layouts = ['grid', 'line', 'circle'];
        this.touchFeedback = null;
        this.isZooming = false;
        this.initialScale = 1;
        this.currentScale = 1;
        
        if (this.isMobile) {
            this.init();
        }
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && 'ontouchstart' in window);
    }

    init() {
        console.log('🔧 Initialisation des améliorations mobiles...');
        
        this.setupMobileUI();
        this.setupTouchNavigation();
        this.setupPinchZoom();
        this.setupTouchFeedback();
        this.setupOrientationHandling();
        this.setupPerformanceOptimizations();
        
        console.log('📱 Améliorations mobiles activées !');
    }

    setupMobileUI() {
        // Ajouter les contrôles de navigation mobiles
        const navControls = document.createElement('div');
        navControls.className = 'mobile-nav-controls';
        navControls.innerHTML = `
            <button class="mobile-nav-btn" data-action="prev" title="Précédent">
                ←
            </button>
            <button class="mobile-nav-btn active" data-action="layout" title="Changer de vue">
                ⊞
            </button>
            <button class="mobile-nav-btn" data-action="next" title="Suivant">
                →
            </button>
            <button class="mobile-nav-btn" data-action="zoom" title="Zoom">
                🔍
            </button>
        `;

        // Ajouter les boutons d'action rapide
        const quickActions = document.createElement('div');
        quickActions.className = 'quick-action-btns';
        quickActions.innerHTML = `
            <button class="quick-action-btn" data-action="fullscreen" title="Plein écran">
                ⛶
            </button>
            <button class="quick-action-btn" data-action="info" title="Informations">
                ℹ
            </button>
        `;

        // Ajouter l'indicateur de swipe
        const swipeHint = document.createElement('div');
        swipeHint.className = 'mobile-swipe-hint';
        swipeHint.textContent = '← Glissez pour naviguer →';

        // Ajouter la barre de progression
        const progressBar = document.createElement('div');
        progressBar.className = 'mobile-progress-bar';
        progressBar.style.width = '33%'; // Layout initial grid

        // Ajouter la zone de swipe invisible
        const swipeZone = document.createElement('div');
        swipeZone.className = 'swipe-zone';

        document.body.appendChild(navControls);
        document.body.appendChild(quickActions);
        document.body.appendChild(swipeHint);
        document.body.appendChild(progressBar);
        document.body.appendChild(swipeZone);

        // Masquer l'indicateur après 5 secondes
        setTimeout(() => {
            swipeHint.style.opacity = '0';
            setTimeout(() => swipeHint.remove(), 500);
        }, 5000);

        this.setupButtonHandlers(navControls, quickActions);
    }

    setupButtonHandlers(navControls, quickActions) {
        // Gestionnaires pour les contrôles de navigation
        navControls.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            this.handleButtonAction(action);
            this.addTouchFeedback(e.target);
        });

        // Gestionnaires pour les actions rapides
        quickActions.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            this.handleQuickAction(action);
            this.addTouchFeedback(e.target);
        });
    }

    handleButtonAction(action) {
        switch (action) {
            case 'prev':
                this.navigateLayout(-1);
                break;
            case 'next':
                this.navigateLayout(1);
                break;
            case 'layout':
                this.cycleLayout();
                break;
            case 'zoom':
                this.toggleZoom();
                break;
        }
        
        // Vibration tactile si supportée
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    handleQuickAction(action) {
        switch (action) {
            case 'fullscreen':
                this.toggleFullscreen();
                break;
            case 'info':
                this.showInfo();
                break;
        }
    }

    setupTouchNavigation() {
        const swipeZone = document.querySelector('.swipe-zone') || document.body;
        
        // Gestion du swipe horizontal pour navigation
        swipeZone.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        swipeZone.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        }, { passive: true });

        // Gestion des tap sur les images
        document.addEventListener('touchend', (e) => {
            if (e.target.closest('.image-wrapper')) {
                const wrapper = e.target.closest('.image-wrapper');
                this.handleImageTap(wrapper);
            }
        });
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        
        // Déterminer si c'est un swipe horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe vers la droite - layout précédent
                this.navigateLayout(-1);
            } else {
                // Swipe vers la gauche - layout suivant
                this.navigateLayout(1);
            }
        }
        
        // Swipe vertical pour zoom
        else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > this.minSwipeDistance) {
            if (deltaY < 0) {
                // Swipe vers le haut - zoom in
                this.adjustZoom(1.2);
            } else {
                // Swipe vers le bas - zoom out
                this.adjustZoom(0.8);
            }
        }
    }

    navigateLayout(direction) {
        this.currentLayout = (this.currentLayout + direction + this.layouts.length) % this.layouts.length;
        this.switchToLayout(this.layouts[this.currentLayout]);
        this.updateProgressBar();
        this.updateActiveButton();
    }

    cycleLayout() {
        this.navigateLayout(1);
    }

    switchToLayout(layoutName) {
        // Interface avec les fonctions existantes
        if (window.switchToMode) {
            window.switchToMode(layoutName);
        } else {
            console.log(`Passage au layout: ${layoutName}`);
            // Fallback - déclencher directement les fonctions
            this.triggerLayoutFunction(layoutName);
        }
    }

    triggerLayoutFunction(layoutName) {
        // Essayer de déclencher les fonctions existantes
        const layoutFunctions = {
            'grid': () => window.applyGridLayout && window.applyGridLayout(),
            'line': () => window.applySingleLineLayout && window.applySingleLineLayout(),
            'circle': () => window.applyCircularLayout && window.applyCircularLayout()
        };

        if (layoutFunctions[layoutName]) {
            layoutFunctions[layoutName]();
        }
    }

    updateProgressBar() {
        const progressBar = document.querySelector('.mobile-progress-bar');
        if (progressBar) {
            const width = ((this.currentLayout + 1) / this.layouts.length) * 100;
            progressBar.style.width = `${width}%`;
        }
    }

    updateActiveButton() {
        const layoutBtn = document.querySelector('[data-action="layout"]');
        if (layoutBtn) {
            const icons = ['⊞', '—', '○'];
            layoutBtn.textContent = icons[this.currentLayout];
        }
    }

    setupPinchZoom() {
        let initialDistance = 0;
        let touches = [];

        document.addEventListener('touchstart', (e) => {
            touches = Array.from(e.touches);
            if (touches.length === 2) {
                initialDistance = this.getDistance(touches[0], touches[1]);
                this.isZooming = true;
            }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (this.isZooming && e.touches.length === 2) {
                e.preventDefault();
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                const scale = currentDistance / initialDistance;
                this.adjustZoom(scale, false);
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) {
                this.isZooming = false;
                initialDistance = 0;
            }
        }, { passive: true });
    }

    getDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    adjustZoom(scaleFactor, animated = true) {
        const galleryContainer = document.getElementById('galleryContainer');
        if (!galleryContainer) return;

        this.currentScale *= scaleFactor;
        this.currentScale = Math.max(0.5, Math.min(3, this.currentScale));

        if (animated) {
            galleryContainer.style.transition = 'transform 0.3s ease';
        } else {
            galleryContainer.style.transition = 'none';
        }

        galleryContainer.style.transform = `scale(${this.currentScale})`;

        if (animated) {
            setTimeout(() => {
                galleryContainer.style.transition = '';
            }, 300);
        }
    }

    toggleZoom() {
        const targetScale = this.currentScale === 1 ? 1.5 : 1;
        this.currentScale = targetScale;
        this.adjustZoom(1, true);
    }

    setupTouchFeedback() {
        // Créer l'élément de feedback tactile
        this.touchFeedback = document.createElement('div');
        this.touchFeedback.className = 'touch-feedback';
        document.body.appendChild(this.touchFeedback);
    }

    addTouchFeedback(element) {
        if (!this.touchFeedback) return;

        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        this.touchFeedback.style.left = `${x}px`;
        this.touchFeedback.style.top = `${y}px`;
        this.touchFeedback.classList.add('active');

        setTimeout(() => {
            this.touchFeedback.classList.remove('active');
        }, 300);
    }

    handleImageTap(wrapper) {
        // Double tap pour focus/zoom
        if (this.lastTapTime && Date.now() - this.lastTapTime < 300) {
            this.focusImage(wrapper);
        } else {
            // Simple tap - sélection
            this.selectImage(wrapper);
        }
        this.lastTapTime = Date.now();
    }

    focusImage(wrapper) {
        // Interface avec le système existant de focus d'image
        if (wrapper.click) {
            wrapper.click();
        }
    }

    selectImage(wrapper) {
        // Retour tactile visuel
        wrapper.style.transform = 'scale(0.95)';
        setTimeout(() => {
            wrapper.style.transform = '';
        }, 150);
    }

    setupOrientationHandling() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleOrientationChange();
            }, 100);
        });
    }

    handleOrientationChange() {
        // Rafraîchir le layout après changement d'orientation
        if (window.refreshGallery) {
            window.refreshGallery();
        }
        
        // Réajuster le zoom si nécessaire
        this.currentScale = 1;
        const galleryContainer = document.getElementById('galleryContainer');
        if (galleryContainer) {
            galleryContainer.style.transform = 'scale(1)';
        }
    }

    setupPerformanceOptimizations() {
        // Optimisations pour mobile
        document.body.style.webkitUserSelect = 'none';
        document.body.style.webkitTouchCallout = 'none';
        document.body.style.webkitTapHighlightColor = 'transparent';

        // Désactiver le zoom par défaut
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes';
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    showInfo() {
        // Afficher les informations de navigation
        const info = `
Navigation mobile :
• Glisser horizontalement pour changer de vue
• Glisser verticalement pour zoomer
• Pincer pour zoom manuel
• Double tap sur une image pour la focaliser
• Boutons en bas pour navigation rapide
        `;
        alert(info);
    }
}

// Initialisation automatique sur mobile
document.addEventListener('DOMContentLoaded', () => {
    const mobileEnhancements = new MobileEnhancements();
    
    // Exposer globalement pour debugging
    window.mobileEnhancements = mobileEnhancements;
    
    if (mobileEnhancements.isMobile) {
        console.log('📱 Navigation mobile optimisée activée');
    }
});

// Export pour utilisation externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileEnhancements;
} 