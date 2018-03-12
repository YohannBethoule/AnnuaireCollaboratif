/*

        Classe email : (pour entre autre envoyer un mail de confirmation d'inscription)

 */
var nodemailer = require('nodemailer');

var Email = function () {
    this.le_service;
    this.email;
    this.mdp ;
    this.chaine ;
    this.str ;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'wib.register@gmail.com',
            pass: 'Ba3001lth*'
        }
    });

    this.send_for_register = function(t)
    {
        var ListeCar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        var Chaine = '';
        for (i = 0; i < 10; i++) {
            Chaine = Chaine + ListeCar[Math.floor(Math.random() * ListeCar.length)];
        }
        this.chaine = Chaine;
        this.str = 'Mot de passe pour confirmer votre incription à Wib : ' + this.chaine;
        var mailOptions = {
            from: 'wib.register@gmail.com', //'youremail@gmail.com'
            to: t,
            subject: 'Register Wib',
            text: this.str
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    this.changeSource = function(le_service,mail,mdp){
        this.le_service = le_service;
        this.email = mail;
        this.mdp = mdp;
        transporter = nodemailer.createTransport({
            service: this.le_service,
            auth: {
                user: this.email,
                pass: this.mdp
            }
        });
    }
}

module.exports.Email =  new Email();