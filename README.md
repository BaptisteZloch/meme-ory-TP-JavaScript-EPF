# Responses TP JS
**Auteurs : Thibault Serre & Baptiste Zloch**
### Question 1
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download overall? How many time did it took to load them all?
- Sur la première vue : 5 fichiers, 60 ms
- Sur la deuxième vue : 10 fichiers, 95 ms
- Sur la troisième vue : 6 fichiers, 61 ms

### Question 2
Component-oriented programming for the web is considered more maintainable. Why?
- les composants sont plus simples à maintenir en web. En effet, lorsqu'il est necessaire d'effectuer des modification, il n'est pas necessaire de plonger dans tout le code, mais simplement de modifier ce que l'on veut dans les fichiers composants, l'ensemble des composants seront donc affectés (par exemple, changer la couleur principale du site, une valeur à changer plutot que 10 000 hexa disséminées partout dans le css)

### Question 3
If you look at the source code, every JS file wraps its code into a closure:
- On a deux variables environnement si on enleve les closures, 
du coup il est necessaire soit d'enlever une des deux variables, soit de laisser les closures.

### Question 4
As you can see, `npm install` command also generated a `package-lock.json` file along with `package.json`. What is the purpose of this file?
- Ce fichier permet de garder une trace des versions exactes de chaque packages qui ont été installés puis mis a jour pour que le produit soit 100 reproductibles, exactement à l'identique pour toutes les personnes qui souhaiteraient l'installer quelque part.

### Question 5 
By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this? Can you explain the meaning of the ^ symbol next to the bootstrap version?
- les trois numeros correspondent à des types de mises à jour, le premier chiffre indique une modification de beaucoup d'éléments, une modif de comportement du package, le deuxième correpond à un ajout de fonctionnalités, le dernier correspond a des patchs pour corriger des bugs.
- le symbole ^ permet d'indiquer qu'on ne veut pas de version qui ne fasse varier le premier chiffre différent de 0 en partant de la gauche, comme expliqué [ici](https://nodejs.dev/learn/the-package-lock-json-file)

### Question 6 
What is a devDependency exactly? What are the differences with a dependency?
- Une dev dependency est une dépendance necessaire durant la phase de developpement contrairement a une dépendence "classique" qui est necessaire pour que le projet fonctionne quand on le run 

### Question 7 
Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?
- Impossible de faire des surcharges de méthodes, et on ne peut pas avoir d'interface pour les classes en ES6

### Question 8
What are the differences between `var` and `let`
- `Var` et `Let` sont deux manières de définir des variables mutables. La différence entre les deux réside dan leur portée. En effet, `var` permet de définir des variables qui sont accessibles dans tout le bloc et dans les fonction englobantes (ascendante). alors que `Let` est accessible dans la fonction courante et ses fonctions descendantes. C'est ce qu'on appelle le scope ! 

### Question 9 
What is the .bind(this) stuff? What does happen if you delete it? Is it needed when using an arrow function ?
- la methode `.bind(this)` permet de creer une nouvelle fonction avec le this en paramètre lorqu'elle est appelée, la nouvelle fonction crée est une copie de la méthode qui précède le `bind(this)`. Si on supprime `bind(this)`, la fonction n'est simplement plus appelée (par exemple si on enlève le `bind(this)` de la fonction responsable du retournement des cartes, les cartes ne se retourneront simplement plus lorsque l'on clique). L'utilisation d'arrow functions permet d'enlever les `bind(this)`, une fonciton arrow est naturellement bind.

### Question 10
What are the advantages of Promises?
- Les promesses permettent définir à l’avance quoi faire lorsqu’une opération asynchrone est terminée, quelque que soit le résultat, reussi ou pas.

### Question 11 à faire
What version of ECMAScript async / await was released in?
- Dans la version ECMA-262, 8ème edition, Juin 2017

### Question 12
What does the @ symbol mean in @babel/***?
- le symbole @ designe le nom de l'auteur (michel, stephane, francis, ou babel par exemple) cela permet d'avoir plusieurs bibliothèques qui ont le meme nom, mais un auteur différent (ex: @babel/PommeGenerator, et @Michel/PommeGenerator, ces deux bibli ont le meme nom mais peuvent cohabiter vu qu'on peut les différencier par autre chose que simplement leur nom) 

### Question 13 
Look at the files produced within dist/ folder. How babel transpile your class WelcomeComponent?
- Dans `dist/` on se retrouve avec la même arboresence que dans `src`, mais sans le css et l'html, uniquement les JS. De plus, pour transpiler WelcomeComponent, la classe welcome component est définie à partir de prototypes. Babel a mis en place 3 fonctions : `_classCallCheck` `_definePropreties` et `_createClass`, La première vérifie avant de créer la classe, s'il est possible d'en creer une, la seconde est utilisé dans la dernière pour creer le constructeur, et la dernière retourne un objet "constructeur"

### Question 14 
What is the weight of the transpiled sources compared to your original sources?
- 16ko pour les files transpilés, 1.80Mo pour les originaux 

### Question 15
What is the difference between `import * from './utils' and import { parseUrl } from './utils'`?
- `import *` permet de import all alors que `import {Function}` n'importe qu'une fonction (appellée dans cet exemple "Function"

### Question 16
Why the utils.js will also be transpiled?
- Parce que c'est un fichier .js dans le dossier /app et tous les .js dans /app ont été transpilés avant que util.js soit ajouté

### Question 17
What does the `webpack --config webpack.config.js` do ?
-  Un webpack permet, en reprenant tout le code de l'app, de pouvoir la lire dans tous les navigateurs web (notamment les anciennes versions !), c'est à la fois un serveur et un compilateur 

### Question 18
Play the whole game with size=2. By browsing the 3 views of the application, how many files did your browser download in total? How many time did it took to load them all?
- 15 fichiers ont été chargés, ces derniers ont été chargés en 445ms

### Question 19
Can you guess how exactly `style-loader` works exactly?
- style loader est un processus lancé par webpack qui permet de transpiler le scss en css, puis le passer dans le bundler. Ainsi les classes de styles peuvent être prises en compte dans les templates HTML.

### Question 20
What does the _ prefix means on a sass file?
- le préfix _ est une convention pour dire que le fichier `_nomfichier` correspond à une partie du css complet, et que fe fichier sera importé (`@import`) dans une stylsheet principale 
cette méthode aide a organiser son arboresence, mais tout sera compilé dans un seul fichier.


