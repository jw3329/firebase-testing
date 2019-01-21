// get reference of the form
const form = document.querySelector('#signing-in');

// add eventlister to the form
form.addEventListener('submit', e => {
    e.preventDefault();
    // get references of each input
    const email = form['signing-in-email'].value;
    const password = form['signing-in-password'].value;

    console.log(email, password);

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        window.location.href = '/';
    }).catch(err => {
        console.log('error occured', err);
    });
})