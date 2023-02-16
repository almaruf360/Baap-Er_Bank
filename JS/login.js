console.log('hello from js')
// step-1: add event handler with submit button
document.getElementById('btn-login').addEventListener('click',function(){
    // step-2: get the email address  inside the email input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value ;
    console.log(email)

    // step-3:get password
    // 3.1 set id on html element
    // 3.2 get the element 
    // 3.3 get value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password  )

    // DO NOT DO THIS ALWAYS, THIS IS FOR LEARNING PURPOSE ONLY
    if (email=== 'maruf@gmailcom' && password==='maruf'){
        window.location.href='bank.html';
    }
    else {
        alert ('invalid user re vai tmi, password paro na');
    }
})