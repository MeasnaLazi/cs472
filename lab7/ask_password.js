
let user = {
    name: "John",

    loginOK() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to logged in`);
    },
};


// # Solve by wrapper
function askPassword(ok, fail) {
    let password = prompt("Password ?", '');
    if (password == "rockstar") ok();
    else fail();
}

askPassword(() => { 
    user.loginOK(); 
}, () => {
    user.loginFail();
});


/*
//# Solve by Bind
function askPassword(ok, fail) {
    let password = prompt("Password ?", '');
    if (password == "rockstar") ok.bind(this)();
    else fail.bind(this)();
}

// askPassword.bind(user, user.loginOK, user.loginFail)();
askPassword.bind(user)(user.loginOK, user.loginFail);
*/

/*
// # Solve by Call
function askPassword(ok, fail) {
    let password = prompt("Password ?", '');
    if (password == "rockstar") ok.call(this);
    else fail.call(this);
}

askPassword.call(user, user.loginOK, user.loginFail);
*/

/*
// # Apply
function askPassword(ok, fail) {
    let password = prompt("Password ?", '');
    if (password == "rockstar") ok.apply(this);
    else fail.apply(this);
}

askPassword.apply(user, [user.loginOK, user.loginFail]);
*/



