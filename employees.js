function addEmployee() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  fetch("https://adfin8-backend.onrender.com/employees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, role })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    loadEmployees();
  });
}

function loadEmployees() {
  fetch("https://adfin8-backend.onrender.com/employees")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("employeeList");
      list.innerHTML = "";
      data.forEach(emp => {
        const li = document.createElement("li");
        li.innerText = emp.name + " - " + emp.role;
        list.appendChild(li);
      });
    });
}

loadEmployees();
