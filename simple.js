// Enhanced JavaScript avec micro-interactions Apple-style et nouvelles fonctionnalités
console.log('Enhanced simple.js chargé avec Liquid Glass effects et UI moderne');

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) {
        console.error("Le conteneur de la galerie n'a pas été trouvé.");
        return;
    }
    const imageFiles = [
        "048a68e7-6d68-441e-beaf-2df8fb072878.png", "0559abc8-612a-4029-ab11-94fa7addae42.png",
        "0ee7be81-0e68-4395-8d7d-ebc12cd5b34b.png", "105fae53-5078-4219-b680-6e95b68fcbe5.png",
        "12b22a5c-cf0e-4368-a301-dc00fbbba8e6.png", "133f5cfc-d3d6-4619-9128-13564a70d1a5.png",
        "193d6ddb-56c2-4428-9419-46eb026535ed.png", "1adaf727-ef73-4c82-9848-7b69bdfe13a5.png",
        "213f9864-1021-4291-87d0-711c60d926ca.png", "233b357d-0350-4174-b320-cf729e7da468.png",
        "2e5b5d56-07cf-4bd4-b8b8-11d8bc7cc9bf.png", "337046c4-031d-42bc-9a09-49b18b8853ee.png",
        "374bd60c-c35d-4396-b19c-746657c252a1.png", "3e5a2bb4-1e9f-4579-95d0-a08f4daae8c3.png",
        "3e5e22ce-f43f-4edf-8036-c1d24e12c6d2.png", "50f6a168-715f-467f-9f52-ce08398d6cea.png",
        "51b615f7-6a32-4bf3-b3c8-7b2598fe8ee9.png", "54d49991-c607-4223-b549-fe8d08cc97fe.png",
        "56905e4d-4496-4241-8c1e-18ebd9876195.png", "5f7fd6b4-1531-41ee-aa27-20d0dedae753.png",
        "66041364-62c8-415a-9c35-dab10345c28d.png", "664a4222-b9ed-41f6-93b3-51c373203c6a.png",
        "6684df14-bf64-4e1a-b422-2dbdec5b7c03.png", "6cbf57d2-a298-478f-a892-a157807dc8e4.png",
        "71810122-7844-47c1-aa8c-1e7186ed075f.png", "71a775f1-db13-4d19-8aff-ddb8f45e18f7.png",
        "75e863cd-ab70-42bb-a4e0-addc0bfa3e6f.png", "775d11be-f907-403f-a6a9-d2348da8ad36.png",
        "7ce8e36d-a4c8-4076-a498-3bf89c0ef98d.png", "7dafe693-b94b-4876-b850-46b74f907f7d.png",
        "7e9d423b-948e-49a3-b6e6-c3edec7cfc19.png", "8d4920dd-a2cf-445a-bf73-a1a22f20c978.png",
        "8f814cb6-ed98-4f21-af15-d63d565e8db3.png", "9240b764-b37e-418b-8526-0ac3524082a6.png",
        "9497ead6-5e9a-45d8-84ab-6f1694276f02.png", "98807c75-8e19-45b3-95f4-5ffd1dcc6940.png",
        "9a01a209-bd03-4fcc-9801-bbfb57c549a8.png", "a1548b68-4652-4815-9169-133f2fe53610.png",
        "a9359946-d2ef-4443-a269-144e4eec4235.png", "af49d2ae-96cc-466a-bc4a-68ccc9091322.png",
        "b5b8baf0-56d9-46a1-a7bb-6fec91984111.png", "b6ee79eb-58e7-4fbb-bccb-e373ba24084a.png",
        "bb72d7d2-8079-446c-b824-996d09223f7c.png", "bd5c34ba-f73a-4d87-8366-04271e204b1b.png",
        "c49ef9e9-1e9a-4b88-a8f3-d69a9070165c.png", "c8241bf9-43b7-4e91-98b1-66c3229b1c10.png",
        "c9dc96e1-25e2-4eab-b8c2-7a42816034d8.png", "cac1daf7-115c-45c4-82cf-fce0cc0ac1ad.png",
        "cb1f055a-b3ed-459e-b572-1ff97b7b10df.png", "d011c66c-cab0-4d58-9cc0-04d09453e0b6.png",
        "d0896f68-7113-4b7d-9dac-45c2863844a8.png", "d37ce9df-6761-43dc-892d-cfb21308c1cd.png",
        "d7d6906e-ae27-4ef6-becb-95fc00e37cf1.png", "d8cd9691-ad65-48dc-a903-8497d2612c20.png",
        "e72c0550-8324-4cc0-9f3a-38caf6f4862c.png", "e9974373-243f-468b-93d0-bb8436021b6f.png",
        "f10e668f-8c42-464d-9cec-3f5b5436f779.png", "f2e0d5f7-2bcf-4d0d-a24c-24cc4fb3dedc.png",
        "fb72dfba-3ddb-4d5d-9598-e80357b63ad3.png"
    ];

    const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isMobile) {
        document.body.classList.add('mobile-active');
        initMobileGallery();
        return;
    }
    
    function initMobileGallery() {
        galleryContainer.innerHTML = ''; // Vider le conteneur
        imageFiles.forEach(fileName => {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'image-wrapper';
            const img = document.createElement('img');
            img.src = `images-inspiration-coiffures-africain/${fileName}`;
            img.alt = `Inspiration coiffure`;
            img.loading = 'lazy';
            imgWrapper.appendChild(img);
            galleryContainer.appendChild(imgWrapper);
        });
    }

    const IMG_WIDTH = 220;
    const IMG_HEIGHT = 220;
    const GRID_IMAGE_SCALE = 0.8;
    const LINE_IMAGE_SCALE = 0.9;
    const CIRCLE_IMAGE_SCALE = 0.8;
    const IMAGE_SPACING_X = 10;
    const IMAGE_SPACING_Y = 10;
    const cssTransitionDuration = 800;
    const staggerDelayGrid = 60;
    const staggerDelaySingleLine = 25;

    // Variables pour le carrousel circulaire dynamique
    const VISIBLE_IMAGES_IN_CIRCLE = 12;
    const REPLACEMENT_INTERVAL_DEGREES = 360 / VISIBLE_IMAGES_IN_CIRCLE;
    let currentSlotToReplaceIndex = 0;
    let nextImageFromFilePoolIndex = 0;
    let lastReplacementAngle = 0;

    // Variables pour les dimensions et positions
    let radius, centerX, centerY;

    // Constantes pour la grille initiale
    const GRID_ROWS = 5;
    const GRID_COLS = 8;

    // Variables pour les effets Apple-style
    let mouseX = 0;
    let mouseY = 0;
    let isScrolling = false;
    let scrollTimeout;

    // Variables pour les nouvelles fonctionnalités
    let currentMode = 'grid';
    let isPlaying = false;
    let searchTerm = '';
    let activeFilter = 'all';
    let filteredImages = [];

    // Métadonnées des images avec descriptions et catégories
    const imageMetadata = {
        "048a68e7-6d68-441e-beaf-2df8fb072878.png": { title: "Tresses Bohème", description: "Style bohème avec tresses lâches", category: "tresse" },
        "0559abc8-612a-4029-ab11-94fa7addae42.png": { title: "Afro Naturel", description: "Cheveux naturels volumineux", category: "naturel" },
        "0ee7be81-0e68-4395-8d7d-ebc12cd5b34b.png": { title: "Coupe Courte", description: "Coupe moderne et élégante", category: "court" },
        "105fae53-5078-4219-b680-6e95b68fcbe5.png": { title: "Tresses Colorées", description: "Tresses avec mèches colorées", category: "colore" },
        "12b22a5c-cf0e-4368-a301-dc00fbbba8e6.png": { title: "Locs Longs", description: "Dreadlocks longs et stylés", category: "long" },
        "133f5cfc-d3d6-4619-9128-13564a70d1a5.png": { title: "Twist Out", description: "Boucles définies naturelles", category: "naturel" },
        "193d6ddb-56c2-4428-9419-46eb026535ed.png": { title: "Bantu Knots", description: "Coiffure traditionnelle moderne", category: "court" },
        "1adaf727-ef73-4c82-9848-7b69bdfe13a5.png": { title: "Tresses Box", description: "Tresses protectrices classiques", category: "tresse" },
        "213f9864-1021-4291-87d0-711c60d926ca.png": { title: "Afro Coloré", description: "Cheveux naturels avec couleur", category: "colore" },
        "233b357d-0350-4174-b320-cf729e7da468.png": { title: "Cornrows", description: "Tresses collées artistiques", category: "tresse" },
        "2e5b5d56-07cf-4bd4-b8b8-11d8bc7cc9bf.png": { title: "Wash and Go", description: "Style naturel simple", category: "naturel" },
        "337046c4-031d-42bc-9a09-49b18b8853ee.png": { title: "Faux Locs", description: "Locs temporaires stylés", category: "long" },
        "374bd60c-c35d-4396-b19c-746657c252a1.png": { title: "Pixie Cut", description: "Coupe très courte moderne", category: "court" },
        "3e5a2bb4-1e9f-4579-95d0-a08f4daae8c3.png": { title: "Ombre Braids", description: "Tresses avec effet ombré", category: "colore" },
        "3e5e22ce-f43f-4edf-8036-c1d24e12c6d2.png": { title: "Tresses Bohème", description: "Style bohème avec tresses lâches", category: "tresse" },
        "50f6a168-715f-467f-9f52-ce08398d6cea.png": { title: "Afro Naturel", description: "Cheveux naturels volumineux", category: "naturel" },
        "51b615f7-6a32-4bf3-b3c8-7b2598fe8ee9.png": { title: "Coupe Courte", description: "Coupe moderne et élégante", category: "court" },
        "54d49991-c607-4223-b549-fe8d08cc97fe.png": { title: "Tresses Colorées", description: "Tresses avec mèches colorées", category: "colore" },
        "56905e4d-4496-4241-8c1e-18ebd9876195.png": { title: "Locs Longs", description: "Dreadlocks longs et stylés", category: "long" },
        "5f7fd6b4-1531-41ee-aa27-20d0dedae753.png": { title: "Twist Out", description: "Boucles définies naturelles", category: "naturel" },
        "66041364-62c8-415a-9c35-dab10345c28d.png": { title: "Bantu Knots", description: "Coiffure traditionnelle moderne", category: "court" },
        "664a4222-b9ed-41f6-93b3-51c373203c6a.png": { title: "Tresses Box", description: "Tresses protectrices classiques", category: "tresse" },
        "6684df14-bf64-4e1a-b422-2dbdec5b7c03.png": { title: "Afro Coloré", description: "Cheveux naturels avec couleur", category: "colore" },
        "6cbf57d2-a298-478f-a892-a157807dc8e4.png": { title: "Cornrows", description: "Tresses collées artistiques", category: "tresse" },
        "71810122-7844-47c1-aa8c-1e7186ed075f.png": { title: "Wash and Go", description: "Style naturel simple", category: "naturel" },
        "71a775f1-db13-4d19-8aff-ddb8f45e18f7.png": { title: "Faux Locs", description: "Locs temporaires stylés", category: "long" },
        "75e863cd-ab70-42bb-a4e0-addc0bfa3e6f.png": { title: "Pixie Cut", description: "Coupe très courte moderne", category: "court" },
        "775d11be-f907-403f-a6a9-d2348da8ad36.png": { title: "Ombre Braids", description: "Tresses avec effet ombré", category: "colore" },
        "7ce8e36d-a4c8-4076-a498-3bf89c0ef98d.png": { title: "Tresses Bohème", description: "Style bohème avec tresses lâches", category: "tresse" },
        "7dafe693-b94b-4876-b850-46b74f907f7d.png": { title: "Afro Naturel", description: "Cheveux naturels volumineux", category: "naturel" },
        "7e9d423b-948e-49a3-b6e6-c3edec7cfc19.png": { title: "Coupe Courte", description: "Coupe moderne et élégante", category: "court" },
        "8d4920dd-a2cf-445a-bf73-a1a22f20c978.png": { title: "Tresses Colorées", description: "Tresses avec mèches colorées", category: "colore" },
        "8f814cb6-ed98-4f21-af15-d63d565e8db3.png": { title: "Locs Longs", description: "Dreadlocks longs et stylés", category: "long" },
        "9240b764-b37e-418b-8526-0ac3524082a6.png": { title: "Twist Out", description: "Boucles définies naturelles", category: "naturel" },
        "9497ead6-5e9a-45d8-84ab-6f1694276f02.png": { title: "Bantu Knots", description: "Coiffure traditionnelle moderne", category: "court" },
        "98807c75-8e19-45b3-95f4-5ffd1dcc6940.png": { title: "Tresses Box", description: "Tresses protectrices classiques", category: "tresse" },
        "9a01a209-bd03-4fcc-9801-bbfb57c549a8.png": { title: "Afro Coloré", description: "Cheveux naturels avec couleur", category: "colore" },
        "a1548b68-4652-4815-9169-133f2fe53610.png": { title: "Cornrows", description: "Tresses collées artistiques", category: "tresse" },
        "a9359946-d2ef-4443-a269-144e4eec4235.png": { title: "Wash and Go", description: "Style naturel simple", category: "naturel" },
        "af49d2ae-96cc-466a-bc4a-68ccc9091322.png": { title: "Faux Locs", description: "Locs temporaires stylés", category: "long" },
        "b5b8baf0-56d9-46a1-a7bb-6fec91984111.png": { title: "Pixie Cut", description: "Coupe très courte moderne", category: "court" },
        "b6ee79eb-58e7-4fbb-bccb-e373ba24084a.png": { title: "Ombre Braids", description: "Tresses avec effet ombré", category: "colore" },
        "bb72d7d2-8079-446c-b824-996d09223f7c.png": { title: "Tresses Bohème", description: "Style bohème avec tresses lâches", category: "tresse" },
        "bd5c34ba-f73a-4d87-8366-04271e204b1b.png": { title: "Afro Naturel", description: "Cheveux naturels volumineux", category: "naturel" },
        "c49ef9e9-1e9a-4b88-a8f3-d69a9070165c.png": { title: "Coupe Courte", description: "Coupe moderne et élégante", category: "court" },
        "c8241bf9-43b7-4e91-98b1-66c3229b1c10.png": { title: "Tresses Colorées", description: "Tresses avec mèches colorées", category: "colore" },
        "c9dc96e1-25e2-4eab-b8c2-7a42816034d8.png": { title: "Locs Longs", description: "Dreadlocks longs et stylés", category: "long" },
        "cac1daf7-115c-45c4-82cf-fce0cc0ac1ad.png": { title: "Twist Out", description: "Boucles définies naturelles", category: "naturel" },
        "cb1f055a-b3ed-459e-b572-1ff97b7b10df.png": { title: "Bantu Knots", description: "Coiffure traditionnelle moderne", category: "court" },
        "d011c66c-cab0-4d58-9cc0-04d09453e0b6.png": { title: "Tresses Box", description: "Tresses protectrices classiques", category: "tresse" },
        "d0896f68-7113-4b7d-9dac-45c2863844a8.png": { title: "Afro Coloré", description: "Cheveux naturels avec couleur", category: "colore" },
        "d37ce9df-6761-43dc-892d-cfb21308c1cd.png": { title: "Cornrows", description: "Tresses collées artistiques", category: "tresse" },
        "d7d6906e-ae27-4ef6-becb-95fc00e37cf1.png": { title: "Wash and Go", description: "Style naturel simple", category: "naturel" },
        "d8cd9691-ad65-48dc-a903-8497d2612c20.png": { title: "Faux Locs", description: "Locs temporaires stylés", category: "long" },
        "e72c0550-8324-4cc0-9f3a-38caf6f4862c.png": { title: "Pixie Cut", description: "Coupe très courte moderne", category: "court" },
        "e9974373-243f-468b-93d0-bb8436021b6f.png": { title: "Ombre Braids", description: "Tresses avec effet ombré", category: "colore" },
        "f10e668f-8c42-464d-9cec-3f5b5436f779.png": { title: "Tresses Bohème", description: "Style bohème avec tresses lâches", category: "tresse" },
        "f2e0d5f7-2bcf-4d0d-a24c-24cc4fb3dedc.png": { title: "Afro Naturel", description: "Cheveux naturels volumineux", category: "naturel" },
        "fb72dfba-3ddb-4d5d-9598-e80357b63ad3.png": { title: "Coupe Courte", description: "Coupe moderne et élégante", category: "court" }
    };

    // Initialiser les images filtrées
    filteredImages = [...imageFiles];

    let imageWrappers = [];
    let currentRotationAngle = 0;
    const ROTATION_SPEED_DEGREES = 0.8;
    let animationFrameId = null;
    let isHovering = false;
    let isImageFocused = false;
    let focusedImageWrapper = null;

    // Effet de parallax subtil pour le curseur
    function initCursorEffects() {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Effet parallax très subtil sur les éléments
            const moveX = (mouseX - window.innerWidth / 2) * 0.02;
            const moveY = (mouseY - window.innerHeight / 2) * 0.02;
            
            if (!isImageFocused) {
                galleryContainer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            }
        });
    }

    // Effet de "breathing" pour les éléments au repos
    function addBreathingEffect(element, index) {
        const delay = index * 0.1;
        element.style.animation = `breathing 4s ease-in-out infinite ${delay}s`;
    }

    // Ajouter les animations CSS dynamiquement
    function addDynamicStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes breathing {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
            
            .image-wrapper {
                will-change: transform, opacity;
            }
            
            .image-wrapper:hover {
                animation: none;
            }
            
            .liquid-glass-blur {
                backdrop-filter: blur(20px) saturate(150%);
                -webkit-backdrop-filter: blur(20px) saturate(150%);
            }
        `;
        document.head.appendChild(style);
    }

    // Créer et configurer les wrappers d'images avec des effets améliorés
    function createImageWrappers() {
        // Vider la galerie d'abord
        galleryContainer.innerHTML = '';
        imageWrappers.length = 0;
        
        console.log(`Création de ${filteredImages.length} images`); // Debug
        
        filteredImages.forEach((fileName, index) => {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'image-wrapper entering';
            imgWrapper.style.width = `${IMG_WIDTH}px`;
            imgWrapper.style.height = `${IMG_HEIGHT}px`;
            imgWrapper.style.opacity = '0';
            imgWrapper.style.transform = 'translateY(30px) scale(0.9)';

            const img = document.createElement('img');
            img.src = `images-inspiration-coiffures-africain/${fileName}`;
            img.alt = imageMetadata[fileName]?.title || `Inspiration coiffure ${index + 1}`;
            img.loading = 'lazy';
            
            // Créer l'overlay d'information
            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';
            
            const title = document.createElement('div');
            title.className = 'image-title';
            title.textContent = imageMetadata[fileName]?.title || `Style ${index + 1}`;
            
            const description = document.createElement('div');
            description.className = 'image-description';
            description.textContent = imageMetadata[fileName]?.description || 'Style unique et moderne';
            
            overlay.appendChild(title);
            overlay.appendChild(description);

            img.onerror = () => {
                console.warn(`Image non trouvée: ${fileName}`);
                imgWrapper.style.display = 'none';
            };

            imgWrapper.appendChild(img);
            imgWrapper.appendChild(overlay);

            // Animation d'entrée staggerée
            setTimeout(() => {
                imgWrapper.style.opacity = '1';
                imgWrapper.style.transform = 'translateY(0) scale(1)';
                imgWrapper.classList.remove('entering');
            }, index * 50);

            // Événements
            imgWrapper.addEventListener('click', () => openImageModal(fileName, imageMetadata[fileName]));
            imgWrapper.addEventListener('mouseenter', () => {
                isHovering = true;
                addBreathingEffect(imgWrapper, index);
            });
            imgWrapper.addEventListener('mouseleave', () => {
                isHovering = false;
            });

            galleryContainer.appendChild(imgWrapper);
            imageWrappers.push(imgWrapper);
        });
        
        console.log(`Images créées: ${imageWrappers.length}`); // Debug
    }

    // Gestionnaire de clic global amélioré
    galleryContainer.addEventListener('click', (event) => {
        if (event.target === galleryContainer && focusedImageWrapper) {
            focusedImageWrapper.classList.remove('focused-image');
            galleryContainer.classList.remove('image-is-focused');
            focusedImageWrapper = null;
            isImageFocused = false;
            
            // Restaurer les animations
            imageWrappers.forEach((wrapper, i) => addBreathingEffect(wrapper, i));
        }
    });

    // Masquer l'écran de chargement une fois les images prêtes
    function hideLoadingScreen() {
        const loadingElement = document.querySelector('.gallery-loading');
        if (loadingElement) {
            loadingElement.style.opacity = '0';
            setTimeout(() => {
                loadingElement.style.display = 'none';
            }, 500);
        }
    }

    // D'abord, on initialise les effets de base.
    initCursorEffects();
    addDynamicStyles();
    
    // Supprimer l'ancienne création d'images et utiliser la nouvelle fonction
    // Initialiser les contrôles et créer les images
    function initializeControls() {
        // Barre de recherche
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchTerm = e.target.value;
                filterImages();
            });
        }

        // Boutons de filtre
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
                
                activeFilter = btn.dataset.filter;
                filterImages();
            });
        });

        // Indicateurs de mode
        const modeIndicators = document.querySelectorAll('.mode-indicator');
        modeIndicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                // Retirer la classe active de tous les indicateurs
                modeIndicators.forEach(ind => {
                    ind.classList.remove('active');
                    ind.setAttribute('aria-pressed', 'false');
                });
                
                // Ajouter la classe active à l'indicateur cliqué
                indicator.classList.add('active');
                indicator.setAttribute('aria-pressed', 'true');
                
                const newMode = indicator.dataset.mode;
                if (newMode !== currentMode) {
                    currentMode = newMode;
                    switchToMode(newMode);
                }
            });
        });

        // Contrôle de lecture
        const playbackBtn = document.getElementById('playbackBtn');
        if (playbackBtn) {
            playbackBtn.addEventListener('click', () => {
                isPlaying = !isPlaying;
                playbackBtn.textContent = isPlaying ? '⏸️' : '▶️';
                playbackBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Lecture');
                
                if (isPlaying && currentMode === 'circle') {
                    startRotationAnimation();
                } else {
                    stopRotationAnimation();
                }
            });
        }
    }

    initializeControls();
    createImageWrappers();
    
    // Fonction pour changer de mode
    function switchToMode(mode) {
        console.log(`Changement vers le mode: ${mode}`); // Debug
        currentMode = mode;
        
        // Ajouter une animation de transition
        galleryContainer.style.opacity = '0.7';
        galleryContainer.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            switch(mode) {
                case 'grid':
                    console.log('Application du layout grille'); // Debug
                    applyGridLayout();
                    break;
                case 'line':
                    console.log('Application du layout ligne'); // Debug
                    applySingleLineLayout();
                    break;
                case 'circle':
                    console.log('Application du layout cercle'); // Debug
                    applyCircularLayout();
                    if (isPlaying) {
                        startRotationAnimation();
                    }
                    break;
            }
            
            // Restaurer l'apparence
            galleryContainer.style.opacity = '1';
            galleryContainer.style.transform = 'scale(1)';
        }, 200);
    }

    // Séquence d'animations : Grille → Ligne → Cercle
    console.log('Démarrage de la séquence d\'animations...'); // Debug
    setTimeout(() => {
        console.log('Phase 1: Grille'); // Debug
        applyGridLayout();
        hideLoadingScreen();
        updateImageCounter();
        
        if (!isMobile) {
            // Transition vers ligne après 4 secondes
            setTimeout(() => {
                console.log('Phase 2: Ligne'); // Debug
                switchToMode('line');
            }, 4000);
            
            // Transition vers cercle après 8 secondes
            setTimeout(() => {
                console.log('Phase 3: Cercle'); // Debug
                switchToMode('circle');
                isPlaying = true; // Activer la rotation automatique
                startRotationAnimation();
            }, 8000);
        }
    }, 100);

    // Fonction pour filtrer les images
    function filterImages() {
        filteredImages = imageFiles.filter(fileName => {
            const metadata = imageMetadata[fileName] || { title: '', description: '', category: 'all' };
            
            // Filtrage par catégorie
            const categoryMatch = activeFilter === 'all' || metadata.category === activeFilter;
            
            // Filtrage par recherche
            const searchMatch = searchTerm === '' || 
                metadata.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                metadata.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            return categoryMatch && searchMatch;
        });
        
        updateImageCounter();
        refreshGallery();
    }

    // Fonction pour mettre à jour le compteur d'images
    function updateImageCounter() {
        const currentCountEl = document.getElementById('currentCount');
        const totalCountEl = document.getElementById('totalCount');
        
        if (currentCountEl && totalCountEl) {
            currentCountEl.textContent = filteredImages.length;
            totalCountEl.textContent = imageFiles.length;
        }
    }

    // Fonction pour rafraîchir la galerie
    function refreshGallery() {
        // Supprimer toutes les images existantes
        imageWrappers.forEach(wrapper => {
            if (wrapper.parentNode) {
                wrapper.parentNode.removeChild(wrapper);
            }
        });
        imageWrappers.length = 0;

        // Recréer les images avec les nouvelles données filtrées
        createImageWrappers();
        
        // Appliquer le mode actuel
        switch(currentMode) {
            case 'grid':
                applyGridLayout();
                break;
            case 'line':
                applySingleLineLayout();
                break;
            case 'circle':
                applyCircularLayout();
                break;
        }
    }

    // Fonction pour arrêter l'animation de rotation
    function stopRotationAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }

    // Améliorer la fonction d'ouverture du modal
    function openImageModal(fileName, metadata) {
        const modal = document.getElementById('imagePreviewModal');
        const modalImage = modal.querySelector('.modal-image');
        
        if (modal && modalImage) {
            modalImage.src = fileName;
            modalImage.alt = metadata?.title || 'Inspiration coiffure';
            
            // Ajouter des informations dans le modal si nécessaire
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            
            // Focus sur le bouton de fermeture pour l'accessibilité
            const closeBtn = modal.querySelector('.close-modal-btn');
            if (closeBtn) {
                closeBtn.focus();
            }
        }
    }

    function applyGridLayout() {
        imageWrappers.forEach(wrapper => {
            wrapper.className = 'image-wrapper layout-grid';
        });

        const containerWidth = galleryContainer.offsetWidth;
        const containerHeight = galleryContainer.offsetHeight;

        // Calcul dynamique du nombre de colonnes qui tiennent dans le contenu
        const maxCols = Math.max(1, Math.floor((containerWidth + IMAGE_SPACING_X) / (IMG_WIDTH + IMAGE_SPACING_X)));
        const rows = Math.ceil(imageWrappers.length / maxCols);

        const gridWidth = maxCols * IMG_WIDTH + (maxCols - 1) * IMAGE_SPACING_X;
        const gridHeight = rows * IMG_HEIGHT + (rows - 1) * IMAGE_SPACING_Y;

        const startX = Math.max(0, (containerWidth - gridWidth) / 2);
        const startY = Math.max(0, (containerHeight - gridHeight) / 2);

        imageWrappers.forEach((wrapper, index) => {
            const row = Math.floor(index / maxCols);
            const col = index % maxCols;
            const x = startX + col * (IMG_WIDTH + IMAGE_SPACING_X);
            const y = startY + row * (IMG_HEIGHT + IMAGE_SPACING_Y);

            setTimeout(() => {
                wrapper.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
                wrapper.style.opacity = '1';
            }, index * staggerDelayGrid);
        });
    }

    function applySingleLineLayout() {
        imageWrappers.forEach(wrapper => {
            wrapper.className = 'image-wrapper layout-line'; 
        });
        const totalWidth = imageWrappers.length * (IMG_WIDTH + IMAGE_SPACING_X) - IMAGE_SPACING_X;
        const startX = (galleryContainer.offsetWidth - totalWidth) / 2;
        const y = (galleryContainer.offsetHeight - IMG_HEIGHT) / 2;

        imageWrappers.forEach((wrapper, index) => {
            const x = startX + index * (IMG_WIDTH + IMAGE_SPACING_X);
            setTimeout(() => {
                wrapper.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
            }, index * staggerDelaySingleLine);
        });
    }

    function applyCircularLayout() {
        galleryContainer.classList.remove('layout-grid', 'layout-line');
        galleryContainer.classList.add('layout-circle');

        const galleryRect = galleryContainer.getBoundingClientRect();
        centerX = galleryRect.width / 2;
        centerY = galleryRect.height / 2;

        // Le rayon est calculé en fonction du nombre d'images visibles dans le cercle
        const circumference = VISIBLE_IMAGES_IN_CIRCLE * (IMG_WIDTH * CIRCLE_IMAGE_SCALE + IMAGE_SPACING_X);
        radius = circumference / (2 * Math.PI);

        currentSlotToReplaceIndex = 0;
        // Initialise nextImageFromFilePoolIndex pour pointer vers la première image APRÈS celles déjà visibles.
        nextImageFromFilePoolIndex = VISIBLE_IMAGES_IN_CIRCLE % imageFiles.length; 
        lastReplacementAngle = currentRotationAngle; // Initialise avec l'angle de rotation actuel

        imageWrappers.forEach((wrapper, index) => {
            const img = wrapper.querySelector('img');
            if (index < VISIBLE_IMAGES_IN_CIRCLE) {
                wrapper.style.display = 'block';
                // Les images initiales sont celles déjà chargées par createImageWrappers
                // S'assurer que l'image source est correcte si on avait tout caché avant
                if (!img.src.endsWith(imageFiles[index])) {
                    img.src = `images-inspiration-coiffures-africain/${imageFiles[index]}`;
                    img.alt = imageFiles[index];
                }

                const angle = (index / VISIBLE_IMAGES_IN_CIRCLE) * 2 * Math.PI - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle) - (IMG_WIDTH * CIRCLE_IMAGE_SCALE) / 2;
                const y = centerY + radius * Math.sin(angle) - (IMG_HEIGHT * CIRCLE_IMAGE_SCALE) / 2;
                
                wrapper.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${CIRCLE_IMAGE_SCALE})`;
                wrapper.style.opacity = '1';
                wrapper.style.zIndex = '10'; 
            } else {
                wrapper.style.display = 'none';
                wrapper.style.opacity = '0';
                wrapper.style.zIndex = '1';
            }
        });
        console.log(`${VISIBLE_IMAGES_IN_CIRCLE} images affichées. Prochaine image du pool : ${imageFiles[nextImageFromFilePoolIndex]}`);
    }

    function rotateAndUpdateVisibleCircle() {
        if (isHovering) {
            animationFrameId = requestAnimationFrame(rotateAndUpdateVisibleCircle);
            return;
        }

        currentRotationAngle += ROTATION_SPEED_DEGREES;

        // 1. Rotation des images visibles
        for (let i = 0; i < VISIBLE_IMAGES_IN_CIRCLE; i++) {
            // On prend l'image wrapper qui est actuellement à la position visuelle 'i'
            // Cela pourrait être plus complexe si les wrappers eux-mêmes sont échangés, 
            // mais ici on met à jour les wrappers qui sont désignés comme visibles.
            // Pour simplifier, on assume que les VISIBLE_IMAGES_IN_CIRCLE premiers wrappers sont ceux qui tournent.
            const wrapper = imageWrappers[i]; 
            if (!wrapper) continue; // Sécurité

            const baseAngleForSlot = (i / VISIBLE_IMAGES_IN_CIRCLE) * 2 * Math.PI - Math.PI / 2; // Position de base du slot
            const rotatedAngle = baseAngleForSlot + (currentRotationAngle * Math.PI / 180); // Angle après rotation

            const x = centerX + radius * Math.cos(rotatedAngle) - (IMG_WIDTH * CIRCLE_IMAGE_SCALE) / 2;
            const y = centerY + radius * Math.sin(rotatedAngle) - (IMG_HEIGHT * CIRCLE_IMAGE_SCALE) / 2;
            
            wrapper.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${CIRCLE_IMAGE_SCALE})`;
        }

        // 2. Logique de remplacement d'image
        if (Math.abs(currentRotationAngle - lastReplacementAngle) >= REPLACEMENT_INTERVAL_DEGREES) {
            const wrapperToUpdate = imageWrappers[currentSlotToReplaceIndex];
            const imgElement = wrapperToUpdate.querySelector('img');

            if (imgElement) {
                imgElement.style.opacity = '0'; // Commence le fondu sortant
                setTimeout(() => {
                    imgElement.src = `images-inspiration-coiffures-africain/${imageFiles[nextImageFromFilePoolIndex]}`;
                    imgElement.alt = imageFiles[nextImageFromFilePoolIndex];
                    imgElement.style.opacity = '1'; // Commence le fondu entrant
                    // console.log(`Slot ${currentSlotToReplaceIndex} (wrapper ${imageWrappers.indexOf(wrapperToUpdate)}) remplacé par ${imageFiles[nextImageFromFilePoolIndex]}`);
                }, 200); // Délai pour l'effet de fondu (doit correspondre à la transition CSS opacity)
            }

            currentSlotToReplaceIndex = (currentSlotToReplaceIndex + 1) % VISIBLE_IMAGES_IN_CIRCLE;
            nextImageFromFilePoolIndex = (nextImageFromFilePoolIndex + 1) % imageFiles.length;
            
            // Mettre à jour lastReplacementAngle correctement
            if (currentRotationAngle >= lastReplacementAngle) { // Rotation en avant
                lastReplacementAngle += REPLACEMENT_INTERVAL_DEGREES;
            } else { // Si on implémentait une rotation arrière
                lastReplacementAngle -= REPLACEMENT_INTERVAL_DEGREES;
            }
            // Pour éviter la dérive due aux flottants, on peut réaligner:
            // lastReplacementAngle = Math.round(currentRotationAngle / REPLACEMENT_INTERVAL_DEGREES) * REPLACEMENT_INTERVAL_DEGREES;
        }

        animationFrameId = requestAnimationFrame(rotateAndUpdateVisibleCircle);
    }

    function startRotationAnimation() {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        console.log('Rotation démarrée avec rotateAndUpdateVisibleCircle');
        lastReplacementAngle = currentRotationAngle; // S'assurer que c'est à jour avant de commencer
        animationFrameId = requestAnimationFrame(rotateAndUpdateVisibleCircle);
    }

    console.log(`${imageFiles.length} images prêtes pour l'animation.`);
});
