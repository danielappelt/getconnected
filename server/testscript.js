var ul = "http://localhost:3000/api/register";
var obj = '{"mail" : "abc@def.org", "pass" : helloworld, "nickname" = "ich"}';

$(document).ajaxError(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Error requesting page " + settings.url + "</li>" );
});

var aj = $.ajax(ul,{
    type: "PUT",
    data: obj
}) ;
aj.always(function(){
	alert("Send");
});
aj.done(function() {
    alert( "Data Saved" );
  });
aj.fail(function(){
	alert("Failed ");
});

