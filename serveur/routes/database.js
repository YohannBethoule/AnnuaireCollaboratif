/* creer une database :*/
var users = require('./bdd').User;
var data = require('./bdd').Data;
function CreateUsersDataBase() {
    var connection = mysql.createConnection(dbconfig.users.connection);

    connection.query('CREATE DATABASE ' + dbconfig.users.database);

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
            `username` VARCHAR(20) NOT NULL, \
            `domain_name` VARCHAR(200) NOT NULL, \
            `text` text NOT NULL, \
        )');

    // mark [...]
    connection.query('\
        CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.data.Mark_table + '` ( \
            `username` VARCHAR(20) NOT NULL, \
        )');


    //[..]
    console.log('Success: Database Created!')
    connection.end();
}

//... mettre les autre table
module.exports = {
    createUsersDataBase : CreateUsersDataBase
} ;