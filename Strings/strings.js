function fullname(){
    //Stops the page form refreshing
    event.preventDefault();

    //Creates an unchanging variable for the first and lastname of the user
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    //Combines the first and last name into one string
    const fullname = firstname + " " + lastname;
    //Creates an unchangable variable for the zipcode
    const zipcode = document.getElementById('zipcode').value;

    //Checks to see if the name is longer than 20 characters long and if it is it won't let the user continue if it is too long
    if (fullname.length > 20) {
        alert("Name cannot be more than 20 characters long");
        return;
    } else {
        //This will display the full name 
        document.getElementById('display').innerHTML = fullname;
    }

    //Checks to see if the zipcode is valid and if it isn't then it won't let the user continue
    if (zipcode.length !== 5) {
        alert("Zipcode must be exactly 5 characters long");
        return;
    }

    //if the users fullname and zipcode meet the requirements then they will get a secret message
    if (fullname.length  < 20 && zipcode.length == 5){
        alert("All requirments met!");
        document.getElementById("secretMessage").innerHTML = "Great Job!";
    }
}
