// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_SS2Bl9AAm0kc0gaKZ7KsI85DPpyitEk",
    authDomain: "fir-testing-de977.firebaseapp.com",
    databaseURL: "https://fir-testing-de977.firebaseio.com",
    projectId: "fir-testing-de977",
    storageBucket: "fir-testing-de977.appspot.com",
    messagingSenderId: "140843250775"
};
firebase.initializeApp(config);

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('you are logged in');
    } else {
        console.log('you are not logged in');
    }
});