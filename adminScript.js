/*
<tr>
    <th id="full_name" value=document.getElementById(full_name)>Name</th>
    <th id="email_id">Email ID</th>
    <th id="age">Age</th>
    <th id="ph_no">Mobile Number</th>
    <th id="aadhar_no">Aadhar ID</th>
    <th id="address">Address</th>
    <th id="date_of_birth">Date</th>
</tr>
*/

window.addEventListener("load", () => {
  const userTable = document.querySelector("#user-table");
  const records = JSON.parse(localStorage.getItem("records") ?? "[]");
  console.log(records);
  
  userTable.innerHTML = records.map(record => `<tr>
  <td>${record.full_name ?? "N/A"}</td>
  <td>${record.email_id ?? "N/A"}</td>
  <td>${record.age ?? "N/A"}</td>
  <td>${record.ph_no ?? "N/A"}</td>
  <td>${record.aadhar_no ?? "N/A"}</td>
  <td>${record.address ?? "N/A"}</td>
  <td>${record.date_of_birth ?? "N/A"}</td>
</tr>`).join("")
})