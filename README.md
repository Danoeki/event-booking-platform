# ResEvents - Plateforme de Réservation d'Événements

## Description
ResEvents est une plateforme web permettant aux utilisateurs de découvrir, filtrer et réserver des événements. Les utilisateurs peuvent consulter les détails des événements, les ajouter à leur panier et finaliser leurs réservations.

## Fonctionnalités
- **Liste des événements** : Affichage des événements disponibles avec des informations telles que le titre, la date, le lieu et le prix.
- **Filtres avancés** : Recherche par mot-clé, catégorie, date (passée ou future) et tri par prix.
- **Détails des événements** : Consultation des informations détaillées d'un événement, y compris l'organisateur, la description et les places disponibles.
- **Réservation** : Ajout d'événements au panier avec le nombre de billets souhaités.
- **Gestion du panier** : Modification ou suppression des réservations dans le panier.
- **Calcul du total** : Affichage dynamique du prix total des réservations.

## Fonctionnalités non terminées
- **Bonus** : Le bonus n'a pas été effectué, mais le reste des fonctionnalités sont présentes.

## Technologies utilisées
- **Frontend** : React.js
- **Routing** : React Router
- **Gestion des données** : LocalStorage pour le panier
- **Styling** : CSS personnalisé
- **Bibliothèques tierces** :
  - `moment` pour la gestion des dates
  - `@fortawesome/fontawesome-free` pour les icônes

## Installation et exécution

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes
1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   cd event-booking-platform
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le projet en mode développement :
   ```bash
   npm start
   ```

4. Ouvrez votre navigateur à l'adresse suivante :
   ```
   http://localhost:3000
   ```

## Structure du projet
- **`src/components`** : Composants réutilisables comme `Header`, `EventCard`, `EventForm`, etc.
- **`src/pages`** : Pages principales comme `HomePage`, `EventDetailPage`, et `CartPage`.
- **`src/services`** : Services pour la gestion du panier via LocalStorage.
- **`src/data`** : Données statiques des événements.
- **`public`** : Fichiers publics comme `index.html`, `robots.txt`, et `manifest.json`.

## Scripts disponibles
- `npm start` : Lance l'application en mode développement.
- `npm build` : Génère une version optimisée pour la production.
- `npm test` : Lance les tests unitaires.


## Auteurs
Ce projet a été réalisé dans le cadre d'un projet scolaire par **Noémie Danielou**, **Lou-Ann Meriot**, **Jules Dubayle**.

## Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer.
