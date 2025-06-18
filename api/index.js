import express from 'express';
import { put, list, del } from '@vercel/blob';
import path from 'path';

const app = express();

// Middleware pour parser le corps des requêtes POST.
// Vercel gère la configuration de la taille via vercel.json maintenant.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

 