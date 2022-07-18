$(document).ready(function(){
    $('.clicks').on('click', function(){
        $('#box').addClass('show');
    })

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    })

    $('.material-symbols-outlined').click(()=>{
		$('#box').removeClass('show')		
	})

    $(".sub").on("click", function () {
        $("#box").toggle();
    });
});

