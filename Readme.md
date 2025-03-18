---

# Node.js API with MongoDB and React Frontend

Ce projet est une application simple qui comprend :
- Un **backend Node.js** qui expose une API pour interagir avec une base de données MongoDB.
- Un **frontend React** qui permet aux utilisateurs d'ajouter et d'afficher des données via une interface graphique.
- Tout est conteneurisé avec **Docker** et peut être exécuté localement avec **Docker Compose**.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (optionnel, pour le développement local)

---

## Récupérer le projet

1. **Cloner le dépôt GitHub** :
   ```bash
   git clone https://github.com/Diangual/nodejs-mongo-api.git
   ```

2. **Naviguer dans le dossier du projet** :
   ```bash
   cd nodejs-mongo-api
   ```

---

## Structure du projet

Voici la structure du projet :
```
nodejs-mongo-api/
├── backend/               # Code source du backend Node.js
│   ├── app.js             # Fichier principal de l'API
│   ├── Dockerfile         # Dockerfile pour le backend
│   ├── package.json       # Dépendances Node.js
│   └── package-lock.json
├── frontend/              # Application React frontend
│   ├── public/            # Fichiers statiques
│   ├── src/               # Code source React
│   ├── Dockerfile         # Dockerfile pour le frontend
│   ├── package.json       # Dépendances React
│   └── package-lock.json
├── kubernetes/            # Fichiers de déploiement Kubernetes
├── docker-compose.yaml    # Fichier Docker Compose
└── README.md              # Ce fichier
```

---

## Exécuter le projet avec Docker Compose

1. **Démarrer les conteneurs** :
   - Dans le dossier racine du projet, exécutez la commande suivante :
     ```bash
     docker-compose up --build
     ```
   - Cette commande va :
     - Construire les images Docker pour le backend et le frontend.
     - Démarrer les conteneurs pour MongoDB, le backend et le frontend.

2. **Accéder aux services** :
   - **Backend API** : Disponible à l'adresse `http://localhost:3000`.
   - **Frontend React** : Disponible à l'adresse `http://localhost:3001`.
   - **MongoDB** : Accessible via le port `27017`.

---

## Tester l'application

### 1. **Tester le backend API**
   - **Ajouter des données** :
     ```bash
     curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"name": "test", "value": 100}'
     ```
   - **Récupérer les données** :
     ```bash
     curl http://localhost:3000/data
     ```

### 2. **Tester le frontend React**
   - Ouvrez votre navigateur et allez à l'adresse `http://localhost:3001`.
   - Utilisez l'interface pour :
     - Ajouter des données via le formulaire.
     - Afficher les données stockées dans la liste ci-dessous.

---

## Déployer sur Kubernetes (optionnel)

Si vous souhaitez déployer l'application sur un cluster Kubernetes, suivez ces étapes :

1. **Assurez-vous que Kubernetes est activé** dans Docker Desktop (ou utilisez un cluster Kubernetes externe).

2. **Appliquer les manifestes Kubernetes** :
   - Dans le dossier `kubernetes`, exécutez la commande suivante :
     ```bash
     kubectl apply -f .
     ```

3. **Accéder aux services** :
   - Utilisez `kubectl get services` pour obtenir les adresses IP et les ports des services déployés.

---

## Arrêter les conteneurs

Pour arrêter les conteneurs et nettoyer les ressources, exécutez la commande suivante dans le dossier racine du projet :
```bash
docker-compose down
```

---

## Développement local (optionnel)

Si vous souhaitez développer ou tester l'application localement sans Docker, suivez ces étapes :

### 1. **Backend**
   - Naviguez dans le dossier `backend` :
     ```bash
     cd backend
     ```
   - Installez les dépendances :
     ```bash
     npm install
     ```
   - Démarrez le serveur :
     ```bash
     node app.js
     ```
   - Le backend sera disponible à l'adresse `http://localhost:3000`.

### 2. **Frontend**
   - Naviguez dans le dossier `frontend` :
     ```bash
     cd frontend
     ```
   - Installez les dépendances :
     ```bash
     npm install
     ```
   - Démarrez l'application React :
     ```bash
     npm start
     ```
   - Le frontend sera disponible à l'adresse `http://localhost:3001`.

---


## Auteur

- [Touba CISSE](https://github.com/Diangual)

---
