// Fire Base
var firebaseConfig = {
    apiKey: "AIzaSyCecY7U0--7W8VpbEIpkwdEFKoqt486PD0",
    authDomain: "fir-auth1-12b94.firebaseapp.com",
    databaseURL: "https://fir-auth1-12b94-default-rtdb.firebaseio.com",
    projectId: "fir-auth1-12b94",
    storageBucket: "fir-auth1-12b94.firebasestorage.app",
    messagingSenderId: "1092720077609",
    appId: "1:1092720077609:web:16fc2c6ffd3b3a95b6a538"
};

var app = firebase.initializeApp(firebaseConfig);



function savedata() {
    try {
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value

        var userobj = {
            userName: name,
            UserEmail: email,
            UserPassword: password
        }
    }

    catch (error) {
        console.log(error)
    }


    // (Save Data Method)
    // 1.push method ===> give us id for every data.
    firebase.database().ref("user").push(userobj)

    // 2.set method ====> It  didnot give id to data ; data get's over wirte.
    // firebase.database().ref("user").set(userobj)
}


// (Removing All data)
function Deletebutton() {
    firebase.database().ref("user").remove()
}



// (To Edit Database)
function editdata(){
    firebase.database().ref("user/-OB6MnlXHY2Szi_26X-e").set({
        
        UserEmail:"Shayan@gmail.com",
        userName:"Shayan",
        UserPassword:"ShayanAmeerhai"
    })
}

// (To Read data on Consol )
function getDataFromDatabade(){

    firebase.database().ref("user").on("child_added" , function(data){
console.log(data.val())
    });


    // on() method
}

getDataFromDatabade()
