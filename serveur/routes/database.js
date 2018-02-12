/* creer une database :*/
var users = require('./bdd').User;
var data = require('./bdd').Data;
function CreateUsersDataBase() {
    var connection = mysql.createConnection(dbconfig.users.connection);

    connection.query('CREATE DATABASE ' + dbconfig.users.database);
/*
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.user_table + '` ( \
            `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
            `username` VARCHAR(20) NOT NULL, \
            `password` CHAR(60) NOT NULL, \
            `email` VARCHAR(20) NOT NULL, \
            PRIMARY KEY (`id`), \
            UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
            UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
        )');
*/
    console.log('Success: Database Created!')
    connection.end();
}

function CreateDataBase() {
    var connection = mysql.createConnection(dbconfig.data.connection);

    //donnees, sites, note..
    connection.query('CREATE DATABASE ' + dbconfig.data.database);

    //commentaire :
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.data.comment_table + '` ( \
            `username` VARCHAR(200) NOT NULL, \
            `domain_name` VARCHAR(200) NOT NULL, \
            `text` text NOT NULL, \
        )');

    // mark [...]
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Mark_table + '` ( \
            `username` VARCHAR(200) NOT NULL, \
            `domain_name` VARCHAR(200) NOT NULL, \
            `object` VARCHAR(50) NOT NULL, \
            `note` int(11) NOT NUL, \
        )');

    // utilisateurs
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.data.User_table + '`(\
        `username` VARCHAR(200) NOT NULL, \
        `password` VARCHAR(200) NOT NULL, \
        `mail` VARCHAR(200) NOT NULL, \
        )');

    // website
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Website_table + '`(\
        `domain_name` VARCHAR(200) NOT NULL, \
        )');

    // INDEXES
    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.comment_table + '`(\
        ADD KEY `fk_user_comment` \(`username`\)`, \
        ADD KEY `fk_site_comment` \(`domain_name`\)`, \
        )');

    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Mark_table + '`(\
        ADD KEY `fk_user_mark` \(`username`\)`, \
        ADD KEY `fk_site_mark` \(`domain_name`\)`, \
        )');

    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.User_table + '`(\
        ADD PRIMARY KEY \(`username`\)`, \
        ADD UNIQUE KEY `password` \(`password`, `mail`\)`, \
        )');

    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Website_table + '`(\
        ADD PRIMARY KEY \(`domain_name`\)`, \
        )');

    // CONSTRAINTS

    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.comment_table + '`(\
         ADD CONSTRAINT `fk_site_comment` FOREIGN KEY \(`domain_name`\) REFERENCES `Website` \(`domain_name`\), \
         ADD CONSTRAINT `fk_user_comment` FOREIGN KEY \(`username`\) REFERENCES `User` \(`username`\), \
        )');

    connection.query('\
        ALTER TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Mark_table + '`(\
         ADD CONSTRAINT `fk_site_mark` FOREIGN KEY \(`domain_name`\) REFERENCES `Website` \(`domain_name`\), \
         ADD CONSTRAINT `fk_user_mark` FOREIGN KEY \(`username`\) REFERENCES `User` \(`username`\), \
        )');


    //[..]
    console.log('Success: Database Created!')
    connection.end();
}

module.exports = {
    createUsersDataBase : CreateUsersDataBase
} ;