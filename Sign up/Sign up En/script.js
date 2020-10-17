var button = document.getElementsByTagName(button)

document.querySelector(".submit-button").onclick = function(){

    var password = document.querySelector(".password"),
        confirmPassword = document.querySelector(".confirm-password");    

        if(password.value == ""){
            alert("Please Write Your Password!")
            return false;
        }
        else if(password.value != confirmPassword.value){
            alert("password didnt match please try again!");
            return false;
        }
        else if(password.value == confirmPassword.value){

        }
        return true;
        
}

function _id(name){
    return document.getElementById(name)
}
function _class(name){
    return document.getElementsByClassName(name)
}
_class("toggle-password")[0].addEventListener("click",function(){
    _class("toggle-password")[0].classList.toggle("active")
    if(_id("password-field").getAttribute("type") == "password"){
        _id("password-field").setAttribute("type","text");
    }else{
        _id("password-field").setAttribute("type","password");
    }
});

_id("password-field").addEventListener("focus",function(){
    _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur",function(){
    _class("password-policies")[0].classList.remove("active");
});
_id("password-field").addEventListener("keyup",function(){
    let password = _id("password-field").value;


    if(/[0-9]/.test(password)){
        _class("policy-number")[0].classList.add("active")
    } else{
        _class("policy-number")[0].classList.remove("active")
    }
    if(password.length > 7){
        _class("policy-length")[0].classList.add("active")

    } else{
        _class("policy-length")[0].classList.remove("active")
    }
    
});