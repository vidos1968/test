$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal-demo').iziModal('open');
});

$("#modal-demo").iziModal({
    closeButton: true,
    transitionInOverlay: 'fadeOutDown',
    transitionOutOverlay: 'fadeOutDown',
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutDown',
    
    });