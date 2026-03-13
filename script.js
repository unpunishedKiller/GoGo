let students = [];
const minAge =18;

window.onload = function() {
    let title = document.getElementsByTagName("h1")[0];
    
    title.style.color = "darkblue";
    title.style.fontsize = "36px";
    title.style.fontfamily = "Arial";

    console.log("Page URL: ", document.URL);
    console.log("Last Modified: ", document.lastModified);
    document.title = "Welcome Traveler!";
};

let image = document.images[0];
let form = document.forms[0]

function submitForm() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    switch (true) {
        case name === "" || email === "" || phone === "":
            alert("Please fill in all fields");
            return;
        case age < minAge:
            alert("You must be 18 or older");
            return;
        default:
            break;
    }

    let student = {
        name: name,
        age: age,
        email: email,
        phone: phone
    };

    students.push(student);
    console.log("Updated List: ", students);

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
}
