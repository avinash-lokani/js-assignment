async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("skc@gmail.com");
        }, 4000);
        });

        let result = await promise;
        console.log("Fetched the data!");
        return result;
}


console.log("start");
let email;
f("skc").then((value) =>{
    email = value;
    console.log("Email id of the user id is: " + email);
    console.log("end");
})