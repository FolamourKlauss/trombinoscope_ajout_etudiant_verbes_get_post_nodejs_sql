# Requetes SQL

## toutes les promos, dans l’ordre alphabétique

```
SELECT * FROM promo ORDER BY name;
```


## tous les étudiants, dans l’ordre alphabétique des noms de famille

```
SELECT * FROM student ORDER BY last_name;
```

## tous les étudiants de la promo 135

```
SELECT * FROM student WHERE promo_id = 135;
```

## les étudiants dont le nom ou le prénom ressemble à « max »

Si on veut comparer des champs qui contiennent du texte sans tenir compte des majuscule
on les transforme avant la comparaison, on met tout en minuscule et on compara à une chaine qui est elle aussi en minuscule

Si on ,souhaite mettre deux conditions identique mais sur 2 champs different, on devra répeter la condition pour chaque champs 

```
SELECT 
    * 
FROM 
    student 
WHERE 
    lower(last_name) LIKE '%max%' 
    OR lower(first_name) LIKE '%max%';
```


## modifier le champs spe_php du prof n°6

```
UPDATE prof SET spe_php = true WHERE id = 6;
```

```
UPDATE prof SET spe_jedi = true WHERE id = 1;
```


## supprimer le prof n°4

```
DELETE FROM prof WHERE id = 4;
```


## supprimer une promo

```
DELETE FROM promo WHERE id = 4;
```

## Ajouter un colonne dans une table

```
ALTER TABLE prof ADD spe_jedi boolean DEFAULT false  NOT NULL ;
```

Je modifie la table prof
J'y ajoute une colonne qui s'appel spe_jedi qui sera de type boolean
je refuse qu'on y mette une valeur vide donc NOT NULL
pour alimenter les ligne déjà existantes je donne une valeur par default DEFAULT false

## Vider une table completement

```
TRUNCATE TABLE prof;
```

## Créer une nouvelle table

```
CREATE TABLE student
(
    id serial NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL
);
```


## Supprimer nouvelle table

```
DROP TABLE student;
```


## Inserer une nouvelle ligne dans une table


```
INSERT INTO 
    prof
    (
        first_name,
        last_name,
        age,
        spe_js,
        spe_php,
        spe_html_css
    )
VALUES
    (
        'Luc',
        'Hidalgo',
        12,
        true,
        true,
        true
    );
```

## Inserer une nouvelle promo


```
INSERT INTO "promo" ("id", "name", "github_organization") VALUES 
(1, 'Big Bang', 'https://github.com/O-clock-BigBang')
```






