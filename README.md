# **PRAMK**

## **Scrum Team** 

- Scrum Master : Killian LAWSON 
- Product Owner : Pegguy LUVUVAMU TOKO
- Développeur Front-End : Adrien PREVOST
- Développeur Front-End : Ruben PEREIRA DA SILVA
- Développeur Back-End : Malick THIAM 
- Développeur Back-End : Hugo Vitor GONCALVES FERNANDES

## **Lien vers le projet hébergé** 
- lien vers le site : https://pramk.alwaysdata.net
- Github : https://github.com/Eclix06/PRAMK

## **Description** 
Notre projet vise à créer une plateforme en ligne unique dédiée à la configuration et à l’achat d’ordinateurs portables entièrement personnalisés. Ce service permet aux utilisateurs de sélectionner chaque composant, du processeur à la carte graphique, en passant par le design du boîtier et les finitions esthétiques. Ainsi, les utilisateurs peuvent concevoir un appareil en totale adéquation avec leurs besoins et leurs préférences, tout en bénéficiant d’une transparence totale sur les coûts et les performances.

## **Conduite de projet** 
  ### Répartitions des tâches : 
|  Tâche         | Responsable |  |
| :-----------------: |:---------------:| :-----:|
| Répartitions des tâches |Killian| 
| User Story | Pegguy | 
| Formulaires |Hugo| 
| Backlog |Pegguy, Killian, Hugo| 
| Wireframe |Pegguy, Killian, Hugo, Malick| 
| Création du site | Killian, Adrien, Malick, Ruben| 
| Système de feedback | Killian, Ruben| 
| Markdown | Pegguy | 


## 1.Idéation et conception 
### Brainstorming et idéation 
Afin de faire naître des idées ingénieuses et créatives pour améliorer le site nous avons réalisé des sessions de brainstorming. L'équipe discute des solutions techniques et des approches visuelles les plus adaptées. Les meilleures idées sont retenues et organisées dans un plan fonctionnel. 

### Analyse des besoins
La Scrum Team commence par collecter toutes les informations pertinentes pour le site web PRAMK : matériel informatique (carte mère, processeur, disque de stockage…), son identité visuelle, et les fonctionnalités attendues pour le site web. 
Pour se faire nous aurons besoins de : 
- Analyse des utilisateurs finaux : Identification des profils types (personas) des utilisateurs cibles et définition de leurs besoins principaux, tels que la facilité de navigation ou l'accès rapide au menu. 
- Système de feedback : Pour savoir ce que veulent les clients, leur vision, et leurs contraintes. 


### Maquettes
Après avoir obtenu les principales idées, nous avons pu réaliser le wireframe du site (sur Figma) dans laquelle l’on peut retrouver tous les éléments de design afin d’avoir un réel aperçu de PRAMK.

| USER STORY  | Tâche         | Priorité | Critères d’acceptation| État |  |
| :---------------: |:---------------:| :-----:|:-----:|:-----------------------------:|:-----:|
**Conception d’un wireframe** 
| US1 :  |En tant que développeur je souhaite que le logo du site soit beau.|  1 |Un logo esthétiquement agréable à regarder.| Fini|
**Développement back et hébergement** 
| US1 :  |En tant que développeur, je souhaite que les utilisateurs naviguent correctement sur le site. |  1 |Pouvoir naviguer de page en page (de l’accueil à la page de contact).| En cours|
| US2 :  |En tant que développeur, je souhaite créer un formulaire pour que l'utilisateur y accède.|  2 |Le formulaire doit pouvoir contenir plusieurs questions de choix. | En cours|
| US2 :  |En tant que développeur je souhaite héberger le site.|  1 |On obtient le lien du site web afin d’y accéder sur un navigateur. | À faire|
**Utilisateurs**
| US1 :  |En tant qu'utilisateur, je veux m'inscrire pour accéder à mon panier, le modifier et effectuer des paiements. |  1 |Créer un formulaire d'inscription.| Fini|
| US1 :  |En tant qu'utilisateur, je veux pouvoir choisir les différentes pièces de mon ordinateur portable. |  1 |L’utilisateur peut ajouter des pièces dans son panier. | En cours|
**Système de Feedback**
| US1 :  |En tant qu'utilisateur, je veux pouvoir répondre au questionnaire sans avoir de problèmes.|  2 |Corriger les bugs.| À faire |



## 2.Développement des fonctionnalités principales 

### **Sprint** 1 : Conception d’un wireframe 
Création du logo
Choix de la typographie
Rendre la maquette interactive

### **Sprint 2** : Développement back et hébergement 
Réalisation de table pour la création de compte (Mysql)
Héberger le site web

### **Sprint 3** : Utilisateurs
S’inscrire afin d’accéder et modifier son panier
Possibilité d’assembler ses pièces

### **Sprint 4** : Système de Feedback 
Formulaire permettant aux utilisateurs de laisser des avis. 



## 3.Tests et débogages 
Concernant tout ce qui est débogage nous allons faire des :
- **Affichage des erreurs en temps réel :** 
Lors de la sélection de chaque composant, le site devrait vérifier immédiatement si la combinaison de composants est viable. Si ce n'est pas le cas, un message d'erreur s'affichera en temps réel.
- **Test de performance :** Le site pourrait offrir un outil permettant à l'utilisateur de simuler une fois l'ordinateur monté, afin de lui donner une idée de la performance de l'assemblage proposé (par exemple, en testant les jeux, les logiciels de montage vidéo, etc.).

Voici des exemples de bugs que vous pouvez rencontrer et des moyens de les déboguer du cotés utilisateur :
- **Problème : Le site affiche des composants en rupture de stock sans possibilité d’en être informé.**
*Solution :* Créez un système d'indication de stock en temps réel. Lorsqu'un utilisateur sélectionne un composant en rupture de stock, une alerte apparaîtra avec une suggestion d’alternative.
- **Problème : Les utilisateurs ne peuvent pas voir la compatibilité entre la RAM et le processeur.**
*Solution :* Affichez une liste de compatibilité entre les processeurs et les types de RAM. Ce module peut vérifier en temps réel si la RAM choisie est compatible avec le processeur sélectionné.

Voici des exemples de bugs que vous pouvez rencontrer et des moyens de les déboguer du cotés serveur (back-end) :
- **Logs d'erreur :** Lorsqu'une erreur se produit côté serveur (par exemple, lors de l'ajout d'un composant à un panier d'assemblage), assurez-vous d'avoir des logs d'erreurs détaillés pour analyser la source du problème.

## 4.Hébergement
Nous allons héberger notre site web sur alwaysdata car c'est un hébergeur qu'on a déjà utilisé énormément par le passé, c'est un très bon site en matière d'éfficacité.

