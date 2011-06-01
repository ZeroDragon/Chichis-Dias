function display(info,user,pass,saludo,lista){
    ekipo = lista.split('#');
    $('body').append('<div id="elcontenedor"></div>');
    $("<style type='text/css' id='elestilo'>#elcontenedor{position: fixed; top: 20%; left: 20%; border: 2px solid #123; background-color: #123; padding: 4px; border-radius: 8px; font-family: Verdana, Geneva, sans-serif; } .nomevez{display:none; } .imagencita{border-radius: 8px; display: inline; float: left; } .twitt{width: 250px; height: 92px; max-width: 250px; max-height: 92px; display: inline; float: left; text-align:left; padding: 4px; border-radius: 4px; font-size: 14px !important; margin-left: 10px; overflow: hidden; background-color: #555; color: #fff; } #titulo{background-color: #789; margin-bottom: 5px; border-radius: 4px; color: #fff; padding: 4px; text-align: center; } .boton{text-align: center; background-color: #456; cursor: default; float: right; border: 1px solid #456; border-radius: 4px; width: 52px; height: 15px; padding: 2px 4px 2px 4px; margin: 0 2px 0 2px; font-size: 12px !important; color: #fff; } .boton:hover{background-color: #123; border-color: #123; } .boton2{text-align: center; float: right; width: 52px; height: 15px; padding: 2px 4px 2px 4px; margin: 0 2px 0 2px; } #abajos{margin-bottom:0px; margin-top:5px; } #quedan{color: #fff; float: left; } #formularioo{margin: 0px; }</style>").appendTo("#elcontenedor");
    $('#elcontenedor').append('<div id="titulo">Mandar Chichis Dias</div>');
    $('#elcontenedor').append('<div id="ventanita"></div>');
    $('#ventanita').append('<form id="formularioo" name="formularioo" ><input type="hidden" id="url" name="url" value="'+info+'" /><input type="hidden" id="user" name="username" value="'+user+'" /><input type="hidden" id="pass" name="password" value="'+pass+'" /><input type="hidden" name="mensaje" id="mensaje" value="" /></form>');
    $('#ventanita').append('<div class="imagencita" style="background: url('+info+') no-repeat center center; background-size: cover; width:100px; height:100px;">&nbsp;</div>');
    $('#ventanita').append('<div id="message" class="twitt">'+saludo+ekipo.join(' ')+'</div>');
    $('#elcontenedor').append('<div style="clear:both"></div>');
    $('#elcontenedor').append('<div id="abajos"><div id="quedan">Quedan XXX caracteres</div></div>');
    $('#abajos').append('<div class="boton2 nomevez" id="feisbuc"><img src="http://localhost/twitpic/img/load.gif" /></div>');
    $('#abajos').append('<div class="boton" id="mandar">mandar</div>');
    $('#abajos').append('<div id="cerrar" class="boton">cerrar</div>');
    $('#message').click(function(){
        this.contentEditable = "true";
        $('#menssage').click();
        $('#menssage').focus();
    });
    $('#cerrar').click(function(){
        $('#elcontenedor').remove();
    });
    $('#mandar').click(function(){
        $('#mandar').hide();
        $('#feisbuc').show();
        $('#mensaje').val($('#message').text());
        $.post("http://www.zerothedragon.com/chichisdias/downup.php", {url: $('#url').val(), username: $('#user').val(), password: $('#pass').val(), mensaje: $('#mensaje').val()}, function(data){
            $('#elcontenedor').remove();
        });

    });
    $('#quedan').html(function(){
        cuato = 140 - 26 - $('#message').text().length;
        $('#mensaje').val($('#message').text());
        return 'Caracteres disponibles: '+ cuato;
    });
    $('#message').keyup(function(){
        cuato = 140 - 26 - $('#message').text().length;
        $('#quedan').html('Caracteres disponibles: ' + cuato);
        $('#mensaje').val($('#message').text());
        if (cuato < 0){
            $('#mandar').hide('fast');
        }else{
            $('#mandar').show('fast');
        }
    });
}
