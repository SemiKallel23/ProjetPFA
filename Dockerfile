# Utiliser l'image node:alpine comme base
FROM node:alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

RUN npm install -g npm@latest

# Installer les dépendances

RUN npm install --force

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
