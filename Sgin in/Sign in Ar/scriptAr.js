document.querySelector(".submit-button").onclick = function(){

    var password = document.querySelector(".password"),
        confirmPassword = document.querySelector(".confirm-password");    

        if(password.value == ""){
            alert("يرجى ادخال كلمة السر")
            return false;
        }
        else if(password.value != confirmPassword.value){
            alert("كلمة السر غير متطابقة");
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
    

