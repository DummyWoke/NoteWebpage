var UserSignUp = $("#UserSignUpForm")

console.log(Username)
$(UserLogin).submit(function(event){
    event.preventDefault()
    var user = Username.val()
    var password = Password.val()
    console.log(user)
    console.log([password])
  });