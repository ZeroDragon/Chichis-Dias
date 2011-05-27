function display(info,user,pass,lista){
    $('body').append('<div id="ventanita" title="Chichis Dias"></div>');
    $('#ventanita').append('<div class="imagencita" style="background: url('+info+') no-repeat center center; background-size: cover; width:100px; height:100px;">&nbsp;</div>');
    ekipo = lista.split('#');
    $('#ventanita').append('<input type="hidden" name="url" value="'+info+'" />');
    $('#ventanita').append('<input type="hidden" name="username" value="'+user+'" />');
    $('#ventanita').append('<input type="hidden" name="password" value="'+pass+'" />');
    $('#ventanita').append('<div id="message" class="twitt">'+ekipo.join(' ')+'</div>');
    $('#ventanita').dialog({
        modal: true,
        close: function(event, ui) {
            $('#ventanita').remove();
        },
        width: 410,
        height: 250,
        buttons: [
        {
            text: "Cancelar",
            click: function() { $(this).dialog("close"); }
        },
        {
            text: "Mandar",
            click: function() { $(this).dialog("close"); }
        }
        ]
    });
    $('#message').click(function(){
        this.contentEditable = "true";
        $('#menssage').click();
        $('#menssage').focus();
    });
}