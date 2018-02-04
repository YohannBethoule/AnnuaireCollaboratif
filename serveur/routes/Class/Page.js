require('./Commentaire');


//class Page
var Page ={
    id:Number,
    adresse:String,
    type:String,
    note1:Number,
    note2:Number,
    listCommentaire:new Array(Commentaire)


}

module.exports.Page = Page;