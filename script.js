function showGreeting() {
    // Get the user's information
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    // Check if the fields are empty
    if (name === "" || age === "") {
        alert("Please enter your information.");
        return;
    }

    // Check if the user is a minor or adult
    if (age < 18) {
        document.getElementById("result").innerHTML =
            "Hello, " + name + "! You are a minor. Enjoy learning and growing!";
    } else {
        document.getElementById("result").innerHTML =
            "Hello, " + name + "! You are an adult. Welcome to this new stage of life!";
    }
}