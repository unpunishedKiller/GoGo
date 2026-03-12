let students = [];
const minAge =18;

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