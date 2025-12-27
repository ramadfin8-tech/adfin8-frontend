function loadReport() {
  const month = document.getElementById("monthInput").value;

  if (!month) {
    alert("Please select a month");
    return;
  }

  fetch(`https://adfin8-backend.onrender.com/reports?month=${month}`)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("reportTable");
      table.innerHTML = "";

      data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.name}</td>
          <td>${row.role}</td>
          <td>${row.presentDays}</td>
        `;
        table.appendChild(tr);
      });
    })
    .catch(() => alert("Error loading report"));
}
