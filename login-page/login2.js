
var objPeople = [
	{ // Object @ 0 index
		username: "user",
		password: "qwertzuiop"
	},
	{ // Object @ 1 index
		username: "test1",
		password: "qwertzuiop"
	},
	{ // Object @ 2 index
		username: "test2",
		password: "qwertzuiop"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if (username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			window.open("website1_home.html");
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
	alert("incorrect login")
}
