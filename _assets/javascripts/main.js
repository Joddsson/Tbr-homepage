$(document).ready(function(){
           $('.row img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" width="570" height="570"/>';
                var modal_title = $(this).attr('id');
                $('#myModal').modal({
                
                });
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-title').html(modal_title);
                    $('#myModal .modal-body').html(img);
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })

$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});

