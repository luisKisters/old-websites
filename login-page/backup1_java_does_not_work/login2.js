function validate()
{
var username=document.getElementbyId("username").value;
var password=document.getElementbyId("password").value;
if(username=="admin"&& password=="user")
{
 	alert("login succesfully");
 	return false;
}
else
{
 	alert("login failed");
}
}