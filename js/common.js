$("#modal").iziModal();
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal-modifications').iziModal('open');
});