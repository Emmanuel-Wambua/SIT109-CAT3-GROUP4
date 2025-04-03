var menuIcon = document.querySelector(".toggle-Btn");
var sideBar = document.querySelector(".sidebar");
var num = 0;

menuIcon.onclick = function smallenside(){
    if(num == 0){
        sideBar.style.display = "block"
        num = 1
    }
    else{
        sideBar.style.display = "none"
        num = 0
    }
}

let expenses = [];
let Grandtotal = 0;

const categories = document.getElementById("categories")
const nameinput = document.getElementById("name-of-product")
const amountinput = document.getElementById("amount-of-product")
const addbtn = document.getElementById("add-btn")
const expensestablebody = document.getElementById("expense-list-body")
const grandTotalCell = document.getElementById("total-amount")




addbtn.addEventListener('click', function (){
    const category = categories.value;
    const name = nameinput.value;
    const amount = Number(amountinput.value);

    if (category ==='') {
        alert("Please select a category");
        return;
    }
    if (name ===''){
        alert("Please type in a name");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please insert a valid amount");
        return;
    }
    expenses.push({category,name,amount});

    Grandtotal += amount;
    grandTotalCell.textContent = Grandtotal;

    const newRow = expensestablebody.insertRow();

    const categoryCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        Grandtotal -= expense.amount;
        grandTotalCell.textContent = Grandtotal;

        expensestablebody.removeChild(newRow)
        
    })

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    nameCell.textContent = expense.name;
    amountCell.textContent = expense.amount;
    deleteCell.appendChild(deleteBtn)

})

for (const expense of expenses) {
    Grandtotal += expense.amount;
    grandTotalCell.textContent = Grandtotal;
    
    const newRow = expensestablebody.insertRow();
    const categoryCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        Grandtotal -= expense.amount;
        grandTotalCell.textContent = Grandtotal;

        expensestablebody.removeChild(newRow)
        
    })
    categoryCell.textContent = expense.category;
    nameCell.textContent = expense.name;
    amountCell.textContent = expense.amount;
    deleteCell.appendChild(deleteBtn)
}