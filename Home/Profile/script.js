// bell script 
let navbutton = $(".bell");

navbutton[0].onclick = function() {
    $("#nav-p").toggleClass("show-nav")
    $(".bell").toggleClass("bell-on-nav")
    $("#nav-profile").removeClass("show-profile")
    $(".profiles").removeClass("profile-on-nav")
}
// profile script 
let navprofile = $(".click-profile");

navprofile[0].onclick = function() {
    $("#nav-profile").toggleClass("show-profile")
    $(".profiles").toggleClass("profile-on-nav")
    $("#nav-p").removeClass("show-nav")
    $(".bell").removeClass("bell-on-nav")
}



// change profile photo 

const img = document.querySelector('#photo');
const img2 = document.querySelector('.photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
            img2.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

// change profile script
// change name >>>>>>

let changeNameContent = '<input class="js-style-name1" type="text" name="" id="" placeholder="Your new name" minlength="1" maxlength="25">';
let changeNameContent2 = '<a id="hello" class="js-style-name2">save</a>';
let boxContainer = '<div class="js-style-box-name"></div>';
let boxContainer2 = '<div class="js-style-box-name2"></div>';

let inputold = '<input class="input-old" type"text" placeholder="Old password" maxlength="25">';
let inputnew = '<input class="input-new" type="password" placeholder="New password" maxlength="25">';
let inputconfirm = '<input class="input-confirm" type="password" placeholder="confirm password" maxlength="25">';
let changePasswordContent2 = '<a id="hello" class="js-style-name2">save</a>';


let oldbox = '<div class="old-box"></div>';
let newbox = '<div class="new-box"></div>'
let confirmbox = '<div class="confirm-box"></div>'


let changeName = $(".change-name");
let changePassword = $(".change-password");

changeName[0].onclick = function() {
    changeName.remove();
    changePassword.remove();
    $(".name-box").append(boxContainer);
    $(".js-style-box-name").append(boxContainer2);
    $(".js-style-box-name2").append(changeNameContent);
    $(".js-style-box-name").append(changeNameContent2);     
}

// change password >>>>>
changePassword[0].onclick = function() {
    changePassword.remove();
    changeName.remove();
    $(".password-box").append(oldbox);
    $(".old-box").append(inputold);
    $(".password-box").append(newbox);
    $(".new-box").append(inputnew);
    $(".password-box").append(confirmbox);
    $(".confirm-box").append(inputconfirm);
    $(".confirm-box").append(changePasswordContent2);
}



