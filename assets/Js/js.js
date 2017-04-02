$(document).ready(function(){

function moveLeft(){  											
	$(".slider").children().eq(0).animate({width:0},370); 
	setTimeout(function(){  									
		elem = $(".slider").children().eq(0).clone();		
		$(".slider").children().eq(0).remove();			
		$(".slider").append(elem);   						
		elem.css("width",940);    								
	},370);      												
}

function moveRight(){      										
	elem = $(".slider").children().eq(2).clone();			
	elem.css("width",0);										
	$(".slider").prepend(elem);							
	elem.animate({width:940},370);								
	elem = $(".slider").children().eq(3).remove();		
}

a = 1;    														

$('.right-button').on('click', function(){   					
	if (a==1){													
		a=0; 													
		moveRight();											
		setTimeout(function(){									
		a = 1;													
		},300);													
	}
	else{														
		return 0;												
	}
});

$('.left-button').on('click', function(){						
	if (a==1){
		a=0;
		moveLeft();
		setTimeout(function(){
		a = 1;
		},300);
	}
	else{
		return 0;
	}
});

});