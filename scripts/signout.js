auth.signOut().then(() => {
    window.location.href = '/';
}).catch(err => {
    console.log('error:', err);
});