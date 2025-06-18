const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Créer le dossier 'uploads' s'il n'existe pas
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

// Configuration de Multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Garder le nom original est simple, mais pour éviter les conflits, on ajoute un timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Servir les fichiers statiques du dossier principal (pour index.html, css, js)
app.use(express.static(path.join(__dirname)));
// Servir les images uploadées depuis le dossier /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint pour l'upload d'images
app.post('/upload', upload.single('uploaded_image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'Aucun fichier uploadé.' });
  }
  // Renvoyer le chemin d'accès au fichier uploadé
  res.send({ filePath: `/uploads/${req.file.filename}` });
});

// Endpoint pour lister les images existantes
app.get('/images', (req, res) => {
    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            console.error("Erreur lors de la lecture du dossier uploads:", err);
            return res.status(500).send({ error: 'Impossible de lister les images.' });
        }
        // Filtrer pour ne garder que les fichiers images si nécessaire
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.send(imageFiles);
    });
});


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log('Ouvrez cette adresse dans votre navigateur.');
}); 