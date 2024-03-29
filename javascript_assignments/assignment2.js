/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/
async function getData(user_Id) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            console.log("Fetched the data!");
            return resolve(user_Id+"@gmail.com");
        }, 4000);
    });
    return promise;
}


const getEmail = async () => {
    
    const email = await getData("skc");
    console.log("fetched email is "+email);
    console.log("end");
}

console.log("start");
getEmail();