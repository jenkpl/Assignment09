// CREATE AN ARRAY OF EMPLOYEES
//id name ext email dept
let employees = [
    [87654321, 'Jennifer Kim', 1234, 'jen@work.com', 'Engineering' ],
    [12345678, 'Alison Andrews', 4321, 'aa@work.com', 'Administrative'],
    [23456789, 'Billy Bookman', 5678, 'bb@work.com', 'Bookkeeping'],
    [34567890, 'Carrie Chapman', 6543, 'cc@work.com', 'Chairperson'],
    [45678901, 'Daniel Dusters', 7890, 'dd@work.com', 'Departmental']
];
console.log(employees);
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.addEventListener('load', () => {
    if (employees.length === 0) {
        
        let storage = localStorage.getItem('employees') || '';
    }    
    if (storage.length > 0) {
        employees = storage.split('|');
        }
});
// const displayPeople = () => {
    
    
//     }

// GET DOM ELEMENTS
let Eform       = document.querySelector('#addForm');
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');
    
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', init => {
let grid = document.querySelector('tbody');
let newRow = grid.appendChild(createElement("TR"));
let newCell = document.newRow.createElement("TD");
newCell.appendChild(document.createTextNode('testID'));
document.createElement('P').createTextNode('Testing123');
let count = employees.length;
console.log(count);
empCount.value = `(${count})`;
});

// ADD EMPLOYEE
Eform.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
        e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp      = [empID, empName, empExt, empEmail, empDept];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp);
    console.table(employees);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-sm btn-danger delete';
deleteBtn.appendChild(document.createTextNode('X'));
newRow.appendChild(deleteBtn);
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
        if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
        empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        
        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID
        buildGrid();
}});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // let grid = document.getElementsByTagName('TBODY');
    // grid.innerHTML = `
    // <tr>
    // <td>${empID}</td>
    // <td>${empName}</td>
    // <td>${empExt}</td>
    // <td>${empEmail}</td>
    // <td>${empDept}</td>
    // </tr>
    // `;
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let grid = document.querySelector('tbody');
    grid.innerHTML.remove();
    // REBUILD THE TBODY FROM SCRATCH
  grid.innerHTML = `
    <tr>
    <td>${empID}</td>
    <td>${empName}</td>
    <td>${empExt}</td>
    <td>${empEmail}</td>
    <td>${empDept}</td>
    </tr>
    `;
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    // let i = (employees.length - 1);
    
    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE
    
    localStorage.setItem('employees', JSON.stringify(employees));
};
