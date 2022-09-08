# Journal de dev

## 2022-08-29

1) Génération d'une nouvelle paire de clef ssh, la dernière,personnel pour la lier à mon compte github perso
```
ssh-keygen
```

2) Ajouter la clef créer au fichier de config ssh (et le créer si besoin)
```
touch config #create the file
nano config #to edit the file with the desired config
```

3) coller le texte suivant dans le fichier config pour ajouter la clef aux méthodes d'authentification
```
Host github.com
   HostName github.com
   PreferredAuthentications publickey
   IdentityFile ~/.ssh/id_rsa_personal
```

4) AJouter la clef ssh créée sur le compte github
5) Créer le repo sur Github
6) Cloner le repo sur la machine locale
7) Créer le fichier journal
8) Commit les changements 

## 2022-09-08

Mise en place des projets back et front
avec axel pour le back
et vue-cli pour le front

// ! \\ Se faire un tuto sur comment mettre en place un JSON WEB Token
https://openclassrooms.com/fr/courses/4087036-construisez-une-api-rest-avec-symfony/4377326-tutoriel-authentifier-et-autoriser-les-utilisateurs-de-lapi
https://grafikart.fr/tutoriels/json-web-token-presentation-958
