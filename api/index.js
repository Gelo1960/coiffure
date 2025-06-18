const express = require('express');
const { put, list } = require('@vercel/blob');
const path = require('path');

const app = express();

// Middleware pour parser le corps des requêtes POST.
// Vercel gère la configuration de la taille via vercel.json maintenant.
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du dossier racine
app.use(express.static(path.join(__dirname, '..'))); 

// Endpoint pour l'upload d'images
app.post('/api/upload', async (req, res) => {
  const { fileName, fileContent } = req.body;

  if (!fileName || !fileContent) {
    return res.status(400).json({ error: 'fileName et fileContent sont requis.' });
  }

  try {
    const buffer = Buffer.from(fileContent, 'base64');
    const blob = await put(fileName, buffer, {
      access: 'public',
    });
    res.status(200).json(blob);
  } catch (error) {
    console.error(`Erreur lors de l'upload de ${fileName}:`, error);
    res.status(500).json({ error: "L'upload du fichier a échoué", details: error.message });
  }
});

// Endpoint pour lister les images
app.get('/api/images', async (req, res) => {
  try {
    const { blobs } = await list();
    res.status(200).json(blobs);
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    res.status(500).json({ error: "Impossible de récupérer les images", details: error.message });
  }
});

module.exports = app; 