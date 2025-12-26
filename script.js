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

  document.getElementById("userNameText").innerText = currentUser;
}

function markAttendance() {
  const data = {
    user: currentUser,
    time: new Date().toLocaleString()
  };

  fetch("https://adfin8-backend.onrender.com/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    alert(result.message);
  })
  .catch(err => {
    console.error(err);
    alert("Server Error");
  });
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
