/* creer une database :*/
var dbconfig = require('./bdd');
var mysql = require('mysql');

function CreateDataBase() {
    var connection = mysql.createConnection(dbconfig.connection);

    connection.query('DROP DATABASE ' + dbconfig.database);
    // --> Je drop la database pour les tests, car il y a une erreur si on essaie de créer alors que la base existe déjà
    connection.query('CREATE DATABASE ' + dbconfig.database);

    // utilisateurs

    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.userTable + '` ( \
            `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `username` VARCHAR(100) NOT NULL, \
            `password` CHAR(60) NOT NULL, \
            `email` VARCHAR(100) NOT NULL, \
            PRIMARY KEY (`id_user`), \
            UNIQUE INDEX `id_UNIQUE` (`id_user` ASC), \
            UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
        )');

    // website
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.websiteTable + '`(\
        `id_site` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `domain_name` VARCHAR(500) NOT NULL, \
        `name` VARCHAR(200) NOT NULL, \
        `type` VARCHAR(200), \
        `description` VARCHAR(600), \
        `note` INT,\
        PRIMARY KEY (`id_site`), \
        UNIQUE INDEX `domain_UNIQUE` (`domain_name` ASC)\
        )');

    //commentaire
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.commentTable + '` ( \
            `id_comment` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `pseudoAuteur` VARCHAR(100) NOT NULL, \
            `domain_name` VARCHAR(500) NOT NULL, \
            `text` text NOT NULL, \
            PRIMARY KEY (`id_comment`), \
            UNIQUE INDEX `pseudoAuteur_UNIQUE` (`pseudoAuteur` ASC), \
            UNIQUE INDEX `idcomment_UNIQUE` (`id_comment` ASC), \
            FOREIGN KEY (`pseudoAuteur`) REFERENCES `Utilisateur` (`username`), \
            FOREIGN KEY (`domain_name`) REFERENCES `Website` (`domain_name`) \
        )');

    // page
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.pageTable + '` ( \
            `id_page` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `domain_name_site` VARCHAR(500) NOT NULL, \
            `name` VARCHAR(200) NOT NULL, \
            `type` VARCHAR(200), \
            `subject` VARCHAR(200), \
            `description` VARCHAR(600),\
            `fiabilite` INT, \
            `coherence` INT, \
            PRIMARY KEY (`id_page`), \
            UNIQUE INDEX `fiabilite_UNIQUE` (`fiabilite` ASC), \
            UNIQUE INDEX `coherence_UNIQUE` (`coherence` ASC), \
            UNIQUE INDEX `description_UNIQUE` (`description` ASC), \
            FOREIGN KEY (`domain_name_site`) REFERENCES `Website` (`domain_name`) \
        )');

    // fiche
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.ficheTable + '` ( \
            `id_fiche` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `domain_name_site` VARCHAR(500) NOT NULL,\
            `pseudoAuteur` VARCHAR(200),\
            `description` VARCHAR(600), \
            `subject` VARCHAR(200), \
            `note_fiabilite` INT, \
            `note_coherence` INT, \
            PRIMARY KEY (`id_fiche`), \
            UNIQUE INDEX `idfiche_UNIQUE` (`id_fiche` ASC), \
            FOREIGN KEY (`domain_name_site`) REFERENCES `Website` (`domain_name`), \
            FOREIGN KEY (`pseudoAuteur`) REFERENCES `Commentaire` (`pseudoAuteur`), \
            FOREIGN KEY (`note_fiabilite`) REFERENCES `Page` (`fiabilite`), \
            FOREIGN KEY (`note_coherence`) REFERENCES `Page` (`coherence`) \
        )');

    // argument (relatif à un commentaire ou une page)
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.argumentTable + '` ( \
            `id_argument` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `orientation` VARCHAR(20) NOT NULL, \
            `domain_name_site` VARCHAR(500) NOT NULL, \
            `id_commentaire` INT UNSIGNED, \
            `id_fiche` INT UNSIGNED, \
            `pseudoAuteur` VARCHAR(200) NOT NULL, \
            `partie_description` VARCHAR(600),\
            `note_fiabilite` INT NOT NULL, \
            `note_coherence` INT NOT NULL, \
            PRIMARY KEY (`id_argument`), \
            FOREIGN KEY (`domain_name_site`) REFERENCES `Website` (`domain_name`), \
            FOREIGN KEY (`id_commentaire`) REFERENCES `Commentaire` (`id_comment`), \
            FOREIGN KEY (`id_fiche`) REFERENCES `Fiche` (`id_fiche`), \
            FOREIGN KEY (`pseudoAuteur`) REFERENCES `Commentaire` (`pseudoAuteur`),\
            FOREIGN KEY (`partie_description`) REFERENCES `Page` (`description`)\
    )');

    // url argument
    connection.query(' \
        CREATE TABLE`' + dbconfig.database + '`.`' + dbconfig.urlArgumentTable + '` (\
        `id_argument` INT UNSIGNED NOT NULL, \
        `url_justification` VARCHAR(400), \
        `enregistree` BOOLEAN, \
        PRIMARY KEY (`id_argument`),\
        FOREIGN KEY (`id_argument`) REFERENCES `Argument` (`id_argument`)\
    )');
    
    console.log('Success: Database Created!')
    connection.end();
}

module.exports = {
    createUsersDataBase : new CreateDataBase()
} ;