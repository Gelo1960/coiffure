// ===== GALERIE D'INSPIRATION COIFFURE AFRO - VERSION PROPRE =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation de la galerie...');

    // ===== CONFIGURATION =====
    const IMG_WIDTH = 200;
    const IMG_HEIGHT = 250;
    
    // Liste complète des images (57 images)
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

    // Métadonnées des images
    const imageMetadata = {
        "048a68e7-6d68-441e-beaf-2df8fb072878.png": { title: "Tresses Africaines", description: "Style traditionnel moderne", category: "tresse" },
        "0559abc8-612a-4029-ab11-94fa7addae42.png": { title: "Afro Court", description: "Coupe naturelle élégante", category: "court" },
        "0ee7be81-0e68-4395-8d7d-ebc12cd5b34b.png": { title: "Locs Stylés", description: "Dreadlocks avec finition", category: "long" },
        "105fae53-5078-4219-b680-6e95b68fcbe5.png": { title: "Cheveux Colorés", description: "Style vibrant et audacieux", category: "colore" }
    };

    // ===== VARIABLES GLOBALES =====
    const galleryContainer = document.getElementById('galleryContainer');
    let imageElements = [];
    const VISIBLE_CIRCLE_COUNT = 8;
    let circleStartIndex = 0;
    let currentMode = 'grid';
    let animationId = null;
    let rotationAngle = 0;

    // ===== CRÉATION DES IMAGES =====
    function createImages() {
        console.log(`📸 Création de ${imageFiles.length} images...`);
        
        // Vider la galerie
        galleryContainer.innerHTML = '';
        imageElements = [];

        imageFiles.forEach((fileName, index) => {
            // Créer le wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'image-wrapper';
            wrapper.style.width = IMG_WIDTH + 'px';
            wrapper.style.height = IMG_HEIGHT + 'px';
            wrapper.style.position = 'absolute';
            wrapper.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            wrapper.style.borderRadius = '12px';
            wrapper.style.overflow = 'hidden';
            wrapper.style.cursor = 'pointer';
            wrapper.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';

            // Créer l'image
            const img = document.createElement('img');
            img.src = `images-inspiration-coiffures-africain/${fileName}`;
            img.alt = imageMetadata[fileName]?.title || `Style ${index + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.transition = 'transform 0.3s ease';

            // Effet hover
            wrapper.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
                wrapper.style.zIndex = '10';
            });
            
            wrapper.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                wrapper.style.zIndex = '1';
            });

            wrapper.appendChild(img);
            galleryContainer.appendChild(wrapper);
            imageElements.push(wrapper);
        });

        console.log(`✅ ${imageElements.length} images créées`);
    }

    // ===== LAYOUTS =====
    function applyGridLayout() {
        console.log('🔲 Application du layout grille');
        const cols = Math.ceil(Math.sqrt(imageElements.length));
        const spacing = 20;

        imageElements.forEach((wrapper, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            
            wrapper.style.left = (col * (IMG_WIDTH + spacing)) + 'px';
            wrapper.style.top = (row * (IMG_HEIGHT + spacing)) + 'px';
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    function applyLineLayout() {
        console.log('📏 Application du layout ligne');
        const spacing = 10;
        const startX = -((imageElements.length * (IMG_WIDTH + spacing)) / 2);

        imageElements.forEach((wrapper, index) => {
            wrapper.style.left = (startX + index * (IMG_WIDTH + spacing)) + 'px';
            wrapper.style.top = '50px';
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'scale(0.8) rotate(0deg)';
        });
    }

    function applyCircleLayout() {
        // Masquer toutes les images au préalable
        imageElements.forEach(w => {
            w.style.opacity = '0';
        });

        // Afficher seulement VISIBLE_CIRCLE_COUNT images
        const radius = 300;
        const centerX = galleryContainer.offsetWidth / 2;
        const centerY = galleryContainer.offsetHeight / 2;

        for (let i = 0; i < VISIBLE_CIRCLE_COUNT; i++) {
            const globalIndex = (circleStartIndex + i) % imageElements.length;
            const wrapper = imageElements[globalIndex];

            const angle = (i / VISIBLE_CIRCLE_COUNT) * 2 * Math.PI + rotationAngle;
            const x = centerX + Math.cos(angle) * radius - IMG_WIDTH / 2;
            const y = centerY + Math.sin(angle) * radius - IMG_HEIGHT / 2;

            wrapper.style.left = x + 'px';
            wrapper.style.top = y + 'px';
            wrapper.style.opacity = '1';
            wrapper.style.transform = 'scale(0.7) rotate(' + (angle * 180 / Math.PI) + 'deg)';
        }
    }


    function startCircleRotation() {
        console.log('🔄 Démarrage de la rotation');
        function rotate() {
            rotationAngle += 0.01;
            if (rotationAngle >= 2 * Math.PI) {
                rotationAngle -= 2 * Math.PI;
                // Passer au prochain lot d’images
                circleStartIndex = (circleStartIndex + VISIBLE_CIRCLE_COUNT) % imageElements.length;
            }
            applyCircleLayout();
            animationId = requestAnimationFrame(rotate);
        }
        rotate();
    }



    function stopCircleRotation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    // ===== SÉQUENCE D'ANIMATIONS =====
    function startAnimationSequence() {
        console.log('🎬 Démarrage de la séquence d\'animations');
        
        // Phase 1: Grille (0-4s)
        setTimeout(() => {
            console.log('Phase 1: GRILLE');
            currentMode = 'grid';
            applyGridLayout();
        }, 500);

        // Phase 2: Ligne (4-8s)
        setTimeout(() => {
            console.log('Phase 2: LIGNE');
            currentMode = 'line';
            applyLineLayout();
        }, 4500);

        // Phase 3: Transition vers cercle (8s+)
        setTimeout(() => {
            console.log('Phase 3A: FADE OUT ligne');
            // Faire disparaître toutes les images en douceur
            imageElements.forEach(w => {
                w.style.transition = 'opacity 0.5s ease';
                w.style.opacity = '0';
            });
        }, 8000);

        // Phase 3B: Cercle avec rotation (8.6s+)
        setTimeout(() => {
            console.log('Phase 3B: CERCLE avec rotation');
            // Réinitialiser la transition pour le mouvement
            imageElements.forEach(w => {
                w.style.transition = 'all 0.8s cubic-bezier(0.4,0,0.2,1)';
            });
            currentMode = 'circle';
            applyCircleLayout();
            startCircleRotation();
        }, 8500);
    }

    // ===== INITIALISATION =====
    function init() {
        console.log('🎯 Initialisation complète...');
        
        if (!galleryContainer) {
            console.error('❌ Conteneur de galerie non trouvé!');
            return;
        }

        // Créer les images
        createImages();
        
        // Démarrer la séquence après un court délai
        setTimeout(() => {
            startAnimationSequence();
        }, 1000);
    }

    // Démarrer l'initialisation
    init();
});
