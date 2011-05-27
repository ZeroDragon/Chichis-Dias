function display(info,user,pass,lista){
    $('body').append('<div id="ventanita" title="Chichis Dias"></div>');
    $('#ventanita').append('<div style="background: url('+info+') no-repeat center center; background-size: cover; width:100px; height:100px;">&nbsp;</div>');
    ekipo = lista.split('#');
    $('#ventanita').append(user+pass+ekipo.join(' '));
    $('#ventanita').dialog({
        modal: true,
        close: function(event, ui) {
            $('#ventanita').remove();
        }
    });
}