const firebaseConfig = {
    apiKey: "AIzaSyD0jTyVlSyM0HPSbo9hh7PVk_UkwYHy2N0",
    authDomain: "signupform-6813c.firebaseapp.com",
    projectId: "signupform-6813c",
    storageBucket: "signupform-6813c.appspot.com",
    messagingSenderId: "807635833163",
    appId: "1:807635833163:web:68013846dd9fc2537d58ce",
    measurementId: "G-SM7Y8DRF87"
};


//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database 
var signupformDB = firebase.database().ref('signupform');

document.getElementById('signupform').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var password = getElementVal('password');

    //console.log(name, emailid, password);
    saveMessages(name, emailid, password);

    //enable alert 

    document.querySelector('.alert').style.display = 'block';

    //remove the alert 
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';

    }, 3000);

    //reset the form 
    document.getElementById("signupform").reset();
}

const saveMessages = (name, emailid, password) => {
    var newsignform = signupformDB.push();

    newsignform.set({
        name: name,
        emailid: emailid,
        password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}