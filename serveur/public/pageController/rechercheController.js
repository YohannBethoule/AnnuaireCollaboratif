//permet d'afficher la list de recherche (list actulité par default)


$(function () {
    $personnel_data({//ajax
        type:'GET',
        //url :'/routes/pageController',
        success :  function (data) {
            $('#liste').html('');
            $('#liste').append('h1 '+data.length+' élement(s) trouvé(s).' );
            for (var i = 0; i < data.length; i++) {
                $('#liste').append('h1 ' +data[i].numero);
                $('#liste').append('h1 ' +data[i].nom);
                $('#liste').append('h1 ' +data[i].description);
                $('#liste').append('h1 ' +data[i].fiabilite);
                $('#liste').append('h1 ' +data[i].coherence);
                $('#liste').append('h1 ' +data[i].nbCommentaire);
                $('#liste').append('br ');
            }
        }

    })
})