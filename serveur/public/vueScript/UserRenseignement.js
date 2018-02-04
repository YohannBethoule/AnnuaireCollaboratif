//script associé à inscription.jade


$(function () {
    $personnel_data({
       type:'GET',
       url: '/routes/vueScript',
        success :  function (data) {
            
        }

    })
})