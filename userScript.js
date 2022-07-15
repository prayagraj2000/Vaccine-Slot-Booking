const form = document.querySelector("#myform");

const saveData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    saveDataToLC(Object.fromEntries(formData));

    window.location.href = "./admin.html"
}

form.addEventListener("submit", saveData);

const saveDataToLC = (data) => {
    const records = JSON.parse(localStorage.getItem("records") ?? "[]");
    records.push(data);
    localStorage.setItem("records", JSON.stringify(records));
    console.log(localStorage);
}