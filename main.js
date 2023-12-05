function renderLargeRow() {
  const largeRow = document.createElement("div");
  largeRow.classList.add("large-row");

  for (let i = 0; i < 4; i++) {
    const largeCell = document.createElement("div");
    largeCell.classList.add("large-cell");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("input");

    if (i === 3) {
      input.setAttribute("placeholder", "$ 0.00");
    }

    largeCell.appendChild(input);

    largeRow.appendChild(largeCell);
  }

  const tableBody = document.getElementById("items-body");
  tableBody.appendChild(largeRow);
}

for (let index = 0; index < 18; index++) {
  renderLargeRow();
}
