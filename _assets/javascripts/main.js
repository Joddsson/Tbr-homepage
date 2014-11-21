$(document).ready(function(){
           $('.row img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" width="570" height="570"/>';
                var modal_title = $(this).attr('id');
                //var modal_footer = $(this).attr('class');
                $('#myModal').modal({
                
                });
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-title').html(modal_title);
                    $('#myModal .modal-body').html(img);
                    /*if ('.row img').hasClass("woman_fit")) {
                        alert("hello!");
                        $('#myModal .modal-footer').html('<p>Hello</p>');
                    };*/
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })

$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});

