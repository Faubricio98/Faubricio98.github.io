function createNewRowC3() {
    var rows = 1;
    if (parseInt(window.localStorage.getItem('rowC3')) <= 0) {
        window.localStorage.setItem('rowC3', 1);
    } else {
        rows = parseInt(window.localStorage.getItem('rowC3')) + 1;
    }
    
    var info =
        '<tr id="'+rows+'">' +
        '<th>' + '<input type="text" class="form-control" id="des-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="obj-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="met-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="ind-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="act-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="rec-' + rows + '">' + '</th>' +
        '<th>' + '<input type="text" class="form-control" id="res-' + rows + '">' + '</th>' +
        '</tr>';
    
    $('#tablaContenido').append(info);
    window.localStorage.setItem('rowC3', rows);
}

function deleteLastRowC3() {
    $('#' + window.localStorage.getItem('rowC3')).remove();
    var rows = parseInt(window.localStorage.getItem('rowC3')) - 1;
    window.localStorage.setItem('rowC3', rows);
}

