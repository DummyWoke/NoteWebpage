//var myAlert = document.getElementById('myAlert')
//myAlert.addEventListener('closed.bs.alert', function () {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
//})


console.log("testing")

var UserSignUp = $("#UserSignUpForm")
var UserLogin = $("#UserLoginForm")
var NoteForm = $("#NoteForm")

var Username = $("#Login-modal-user")
var Password = $("#Login-modal-password")


console.log(Username)
$(UserLogin).submit(function(event){
    event.preventDefault()
    var user = Username.val()
    var password = Password.val()
    console.log(user)
    console.log([password])
  });