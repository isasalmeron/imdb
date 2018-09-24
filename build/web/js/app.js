/*JavaScript para adicionar atores  e idiomas dinamicamente*/
$(document).ready(function() {
    var max_fields      = 100; //maximum input boxes allowed

    /*Adicionando caixas de nome de ator dinâmicamente*/
    var x = 1; //initlal text box count
    $(".add_field_button_ator").click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(".input_fields_wrap_ator").append('<div class="row control-group"><div class="form-group col-xs-9 floating-label-form-group controls"><label for="nome">Nome do Ator(a)</label><input type="text" class="form-control" placeholder="Nome do ator(a)" id="nome" name="nome" required data-validation-required-message="Please enter your name."></div><div class="form-group col-xs-3 controls"><button class="remove_field list-group-item list-group-item-danger">Remover</button></div></div>'); //add input box
        }
    });

    /*Adicionando caixas de idioma dinâmicamente*/
    var y = 1;
    $(".add_field_button_idioma").click(function(e){ //on add input button click
        e.preventDefault();
        if(y < max_fields){ //max input box allowed
            y++; //text box increment
            $(".input_fields_wrap_idioma").append('<div class="row control-group"><div class="form-group col-xs-9 floating-label-form-group controls"><label for="idioma">Idioma</label><input type="text" class="form-control" placeholder="Idioma" id="idioma" name="idioma" required data-validation-required-message="Please enter a language."></div><div class="form-group col-xs-3 controls"><button class="remove_field list-group-item list-group-item-danger">Remover</button></div></div>'); //add input box
        }
    });

    /*Removendo caixas de ator*/
    $(".input_fields_wrap_ator").on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault();
        /*Removendo a div row control-group*/
        $(this).parent().parent('div').remove();
        x--;
    })

    /*Removendo caixas de idioma*/
    $(".input_fields_wrap_idioma").on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault();
        /*Removendo a div row control-group*/
        $(this).parent().parent('div').remove();
        y--;
    })
});

/*Código inserido pelo $(".input_fields_wrap_ator").append() e removido pelo $(this).parent().parent('div').remove() com atores*/
/*' <div class="row control-group">
        <div class="form-group col-xs-9 floating-label-form-group controls">
            <label for="nome">Nome do Ator(a)</label>
            <input 
                type="text" 
                class="form-control" 
                placeholder="Nome do ator(a)" 
                id="nome"
                name="nome"
                required data-validation-required-message="Please enter your name."
            >
        </div>
        <div class="form-group col-xs-3 controls">
            <button class="remove_field list-group-item list-group-item-danger">Remover</button>
        </div>
    </div>'*/

/*Código inserido pelo $(".input_fields_wrap_idioma").append() e removido pelo $(this).parent().parent('div').remove() com idiomas*/
/*<div class="row control-group">
    <div class="form-group col-xs-9 floating-label-form-group controls">
        <label for="idioma">Idioma</label>
        <input
            type="text"
            class="form-control"
            placeholder="Idioma"
            id="idioma"
            name="idioma"
            required data-validation-required-message="Please enter a language."
        >
    </div>
    <div class="form-group col-xs-3 controls">
        <button class="remove_field list-group-item list-group-item-danger">Remover</button>
    </div>
</div>*/