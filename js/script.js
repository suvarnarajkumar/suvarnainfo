
$(document).ready(function(){
	$('.push').show();
	$('.pwd').hide();
	$( "#lock" ).button({
      icons: {
        primary: "ui-icon-locked"
      },
      text: false
      });
      $( "button" ).button();
			
    $("#tabs").tabs();
    	
	var pp = $('#push').pointPoint();
	// To destroy it, call the destroy method:
	 $('#push').click(function(){
	 	$('.push').hide();
	 	$('.pwd').show();
		pp.destroyPointPoint();
	 	
	});
 
 		
	});
	
	$('button').click(function(){
		if($(this).attr("id")==='lock')
		{
			$("#enter").show();
			$(".push").show();
			$(".pwd").hide();
		}		
		else
		{
		var item=$(this).text();
		if(item ==='Clear')
		{
			var del=$(this).siblings('input[type=text]').val();	
			$(this).siblings('input[type=text]').val(del.substring(0, del.length-1));
		}
		else if(item ==='Cancel')
		{
			$(this).siblings('input[type=text]').val('');
			$(".push").show();
			$(".pwd").hide();			
		}
		else if($(this).siblings('input[type=text]').val().length===4)
		{
		}
		else 
		{
			for(var i=0;i<10;i++)
			{
				if(parseInt(item) ===i)
				{	
					var apd=$(this).siblings('input[type=text]').val();	
					$(this).siblings('input[type=text]').val(apd.concat(item));
					if($(this).siblings('input[type=text]').val()==='0000')
					{
						$(this).siblings('input[type=text]').val('');
						$('#enter').hide();	
					}
					break;
				}
			}
		}
		}
	});

	 $(document).tooltip({
    	   position: {
      	my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });