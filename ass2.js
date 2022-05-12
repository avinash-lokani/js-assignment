
const getData = new Promise((resolve,reject) =>{
    setTimeout(() =>{
    resolve("skc@gmail.com");
    }, 4000);
    });


    console.log("start");
    let email;
    getData.then((value) => {
        email = value;
        console.log("Fetched the data!");
        console.log("Email id of the user id is: " + email);
        console.log("end");
    });
    
    
    