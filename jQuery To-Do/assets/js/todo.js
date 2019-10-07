$("ul").on("click", "li", function(){                        //Check off specific to do by clicking
	$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){                 //click on X to delete to-do
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();                         //Grabbing new todo text from input
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");            //create new li and add to ul
	} 
});
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});