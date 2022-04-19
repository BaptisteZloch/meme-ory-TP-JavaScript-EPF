# TP JS

## STEP 0
Q1) On a navigué au travers de 3 documents HTML (score.html, game.html, welcome.html)
## STEP 1
Q1) Component oriented programming  est plus maintenable notamment lorsque l'on doit changer des choses dans le projet les seuls fichiers à modifier sont dans un seul dossier, correspondant au component. On parle d'atomic design pattern.

Q2) Le jeu ne fonctionne plus du tout et rien ne s'affiche.
## STEP 2
Q1) package-lock.json est un fichier qui représente toutes les dépendances et répositories des dependances de notre projet. C'est un fichier qu'il ne faut surtout pas toucher sinon on ne sera pas capable d'installer les dependances.

Q2) Dans `^5.<X>.<Y>` `^` signifie que la version doit commencer par un 5, c'est une expression régulière.

Q3) Les  `devdependancies` signifient que ce sont des dépendances qui s'installent uniquement dans un environnement de développement et non dans un environnement de prod.

## STEP 3
Q1) In Java but not in JavaScript ??

## STEP 4
Q1) `let` a une porté moins lontaine que `var` en effet, `let` s'arrête à la fonction courante entre les `{...}` tandis que `var` est utilisable hors de la fonction il a une porté plus large. On peut l'utiliser au niveau de la fonction et tout autour. On peut dire que `var` a une portée globale.

Q2) La méthode `bind()` crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte this la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.

## STEP 4.1
Les promesses permettent d'une part d'attendre la résolution complete d'une requete par exemple, on fonctionne donc en asynchrone (simulation du multithreading). De plus les promesses permettent aussi de gérer les erreurs.

