// 1. GLOBAL VARIABLES
// These stay at the top so any function can use them.
let students = [];
const minAge = 18;

// 2. WINDOW ONLOAD - The "Green Light"
// Everything inside here runs only after the HTML is fully loaded.
window.onload = function() {
    // Style the H1
    let title = document.getElementsByTagName("h1")[0];
    if (title) {
        title.style.color = "darkblue";
        title.style.fontSize = "36px";
        title.style.fontFamily = "Arial";
    }

    // Handle Image Hover Effects
    let image = document.images[0];
    if (image) {
        image.onmouseover = function () {
            image.style.border = "5px solid orange";
        };
        image.onmouseout = function () {
            image.style.border = "none";
        };
    }

    // Input highlight effect
    let nameInput = document.getElementById("name");
    if (nameInput) {
        nameInput.onkeyup = function() {
            this.style.backgroundColor = "#ed4c6aff"; // Pinkish highlight
        };
    }

    // Form Submission Logic
    let form = document.forms[0];
    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault(); // STOP the page from refreshing!
            submitForm();           // Run our validation and table logic
        };
    }

    // Logging metadata
    console.log("Page URL: ", document.URL);
    console.log("Last Modified: ", document.lastModified);
    document.title = "Welcome Traveler!";
};

// 3. THE "BOUNCER" (Validation)
function submitForm() {
    let name = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Check for empty fields
    if (name === "" || email === "" || phone === "" || ageInput === "") {
        alert("Please fill in all fields");
        return;
    }

    // Check Age Limit
    if (age < minAge) {
        alert("You must be 18 or older to register.");
        return;
    }

    // If valid, save to array and update table
    let student = {
        name: name,
        age: age,
        email: email,
        phone: phone
    };

    students.push(student);
    console.log("Updated Student List: ", students);

    // Call the function to draw the table row
    addTravelerToTable(name, age, email);

    // Reset the form for the next entry
    document.forms[0].reset();
}

// 4. THE TABLE BUILDER
function addTravelerToTable(name, age, email) {
    let table = document.getElementById("travelerTable");
    
    // Safety check: Make sure the table exists in HTML
    if (!table) {
        console.error("No table found with id 'travelerTable'");
        return;
    }

    let row = table.insertRow(); // Adds <tr>

    // Insert data cells <td>
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = email;

    // Add the Delete button cell
    let deleteCell = row.insertCell(3);
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete-btn"; // You can style this in CSS!
    
    btn.onclick = function() {
        table.deleteRow(row.parentElement.rowIndex);
    };

    deleteCell.appendChild(btn);
}

// 5. THE DELAYED EFFECT
setTimeout(function () {
    document.body.style.backgroundColor = "#5490c5ff"; // Background turns blue after 2s
}, 2000);