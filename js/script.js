function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["number"] = document.getElementById("number").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["message"] = document.getElementById("message").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("show").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.address;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.message;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("message").value = "";
    selectedRow = null;
}