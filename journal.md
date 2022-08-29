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