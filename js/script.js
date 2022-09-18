$('.navbar-toggler').on('click', function () {

    if ($('.container-image').css('margin-top') === '-160px') {
        $('.container-image').css('margin-top', '-300px')
        $('.black').css('display', 'block')
    } else if ($('.container-image').css('margin-top', '-300px')){
        $('.container-image').css('margin-top', '-160px')
        $('.black').css('display', 'none')
    }

})


$('.gallery-item').sort(function (a, b) {

    var contentA =parseInt( $(a).data('sort'));
    var contentB =parseInt( $(b).data('sort'));
    return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
}).appendTo($('#gallery'))

$('.career-con-header>.pos p').on('click', function () {
    var els = $('.career-li').get();

    els.sort(function(el1, el2){
        return $(el1).text().trim().localeCompare($(el2).text().trim())
    })

    $('.career-ul').append(els)
})

$('.career-con-header>.sta p').on('click', function () {
    $('.career-li').sort(function (a, b) {

        var contentA =parseInt( $(a).data('sort'));
        var contentB =parseInt( $(b).data('sort'));
        return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
    }).appendTo($('.career-ul'))
})


