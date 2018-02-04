
//database pour les utilisateurs
module.exports.User = {
    'connection' :{
        'host'     : 'localhost',
        'user'     : 'picsou',
        'password' : 'picsou',
    },
    'database' : 'Users',
    'user_table' : 'users'
};

//database pour les données (sites, fiche, ...)
module.exports.Data = {
    'connection' :{
        'host'     : 'localhost',
        'user'     : 'picsou',
        'password' : 'picsou',
    },
    'database' : 'Data',
    'site_table' : 'sites',
    'fiche_table' : 'fiches'
};