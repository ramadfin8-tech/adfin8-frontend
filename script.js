let currentUser = "";

function login() {
  const usernameInput = document.getElementById("username");

  if (!usernameInput) {
    alert("Username input not found ❌");
    return;
  }

  const user = usernameInput.value.trim();

  if (user === "") {
    alert("Please enter username");
    return;
  }

  currentUser = user;

  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("attendanceScreen").style.display = "block";
loadEmployeesForAttendance();

  document.getElementById("userNameText").innerText = currentUser;
}

function markAttendance() {
  const employeeId = Number(
    document.getElementById("employeeSelect").value
  );

  fetch("https://adfin8-backend.onrender.com/attendance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ employeeId })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(() => alert("Server error"));
}

function loadAttendanceHistory() {
  fetch("https://adfin8-backend.onrender.com/attendance")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("historyList");
      list.innerHTML = "";

      data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.user + " - " + item.time;
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error(err);
    });
}
function loadEmployeesForAttendance() {
  fetch("https://adfin8-backend.onrender.com/employees")
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById("employeeSelect");
      select.innerHTML = "";

      data.forEach(emp => {
        const option = document.createElement("option");
        option.value = emp.id;
        option.innerText = emp.name + " (" + emp.role + ")";
        select.appendChild(option);
      });
    });
}

