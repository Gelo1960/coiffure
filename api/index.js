const express = require('express');
const { put, list, del } = require('@vercel/blob');
const path = require('path');
const app = express();

// Augmenter la limite de la taille du corps de la requête pour accepter les images en base64
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Servir les fichiers statiques du dossier racine
app.use(express.static(path.join(__dirname, '..'))); 

// Endpoint pour l'upload d'images
app.post('/api/upload', async (req, res) => {
  if (!req.body || !req.body.fileName) {
    return res.status(400).json({ error: 'Nom de fichier manquant.' });
  }

  try {
    const { fileName, fileContent } = req.body; // fileContent est attendu en base64
    const fileBuffer = Buffer.from(fileContent, 'base64');
    
    const blob = await put(fileName, fileBuffer, {
      access: 'public',
      contentType: req.headers['content-type'] || 'application/octet-stream'
    });
    
    res.status(200).json(blob);
  } catch (error) {
    console.error('Erreur Vercel Blob:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint pour lister les images
app.get('/api/images', async (req, res) => {
  try {
    const { blobs } = await list();
    res.status(200).json(blobs);
  } catch (error) {
    console.error('Erreur Vercel Blob:', error);
    res.status(500).json({ error: error.message });
  }
});

 