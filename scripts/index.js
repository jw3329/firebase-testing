const form = document.querySelector('#item-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const number = form.number.value;
    const naturalNumbersLessEqualToNumber = [];
    for (let i = 1; i <= number; i++) {
        naturalNumbersLessEqualToNumber.push(i);
    }
    db.collection('test').add({
        firstName,
        lastName,
        numberRange: naturalNumbersLessEqualToNumber
    }).then((doc) => {
        console.log('successful', doc);
        doc.collection('testing2').add({
            firstName,
            lastName,
            numberRange: naturalNumbersLessEqualToNumber
        })
        form.reset();
    }).catch(err => {
        console.log('error:', err);
    });
});