// get reference of the form
const form = document.querySelector('#signing-up');

// add eventlister to the form
form.addEventListener('submit', e => {
    e.preventDefault();
    // get references of each input
    const email = form['signing-up-email'].value;
    const password = form['signing-up-password'].value;

    console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        window.location.href = '/';
    }).catch(err => {
        console.log('error occured', err);
    });
})