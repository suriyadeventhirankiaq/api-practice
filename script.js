// GET
async function getStudent() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let data = await response.json();

    console.log(data);

    document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
}


// POST
async function postStudent() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: "Arun",
            email: "arun@gmail.com",
            username: "arun123"
        })

    });

    let data = await response.json();

    console.log(data);

    document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
}