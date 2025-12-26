fetch("https://adfin8-backend.onrender.com/stats")
  .then(response => response.json())
  .then(data => {
    document.getElementById("totalEmployees").innerText = data.totalEmployees;
    document.getElementById("presentToday").innerText = data.presentToday;
    document.getElementById("absentToday").innerText = data.absentToday;
  })
  .catch(error => {
    console.error("Error loading stats:", error);
  });
