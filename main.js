$(document).ready(function() {
    $('header button').click(function() {
        $('.container').slideDown(500)
    })

    $('#botao-cancelar').click(function() {
        $('.container').slideUp(300)
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const nomeTarefa = $('#input-nome').val()
        const data = $('#input-data').val()
        const hora = $('#input-hora').val()

        const novaTarefa = $('<li style="display: none"></li>')
        $(`<h3 class="nome-tarefa" style="font-weight: 400;">${nomeTarefa}</h3>`).appendTo(novaTarefa)
        $(`<h3 class="data-tarefa" style="font-weight: 400;">${data}</h3>`).appendTo(novaTarefa)
        $(`<h3 class="hora-tarefa" style="font-weight: 400;">${hora}</h3>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
        $(novaTarefa).fadeIn(1000)

        $('#input-nome').val('')
        $('#input-data').val('')
        $('#input-hora').val('')
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('line-through');
    })
})

