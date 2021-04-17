const form = document.getElementById('form');

form.addEventListener('submit',e=>{
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    

    if(firstName===''){
        addError('firstname','First name is required');
    }else{
        removeError('firstname');
    }
    if(lastName===''){
        addError('lastname','Last name is required');
    }else{
        removeError('lastname');
    }
    if(email===''){
        addError('email','Email Address is required');
    }else if(!isValid(email)){
        addError('email', 'Looks like this is not an email');
    }else{
        removeError('email');
    }
    if(password===''){
        addError('password','Password is required');
    }else{
        removeError('password');
    }

});

function addError(feild,message){
    const formControl = form[feild].parentNode;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.style.opacity='1';
    small.innerText = message;
}
function removeError(feild){
    const formControl = form[feild].parentNode;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.style.opacity='0';
   
}
function isValid(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
