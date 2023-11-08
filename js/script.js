document.addEventListener('DOMContentLoaded', () => {
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    const employeesTableBody = document.getElementById('employeesTable').getElementsByTagName('tbody')[0];
    const employeeCountOutput = document.getElementById('employeeCount');
    let employeeCount = 0;

    const updateEmployeeCount = () => {
        employeeCountOutput.textContent = employeeCount;
    };

    const deleteEmployee = (deleteButton) => {
        // Remove the table row
        deleteButton.closest('tr').remove();
        // Decrease employee count
        employeeCount--;
        // Update the displayed count
        updateEmployeeCount();
    };

    addEmployeeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Create new row and cells
        const newRow = employeesTableBody.insertRow();
        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const extCell = newRow.insertCell(2);
        const emailCell = newRow.insertCell(3);
        const deptCell = newRow.insertCell(4);
        const deleteCell = newRow.insertCell(5);

        // Set text for new cells
        idCell.textContent = document.getElementById('employeeID').value;
        nameCell.textContent = document.getElementById('fullName').value;
        extCell.textContent = document.getElementById('extension').value;
        emailCell.textContent = document.getElementById('email').value;
        deptCell.textContent = document.getElementById('department').value;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = function () { deleteEmployee(deleteButton); };
        deleteCell.appendChild(deleteButton);

        // Increase employee count
        employeeCount++;
        // Update the displayed count
        updateEmployeeCount();

        // Clear the form
        addEmployeeForm.reset();
    });
});
