let budget = document.getElementById("Budget");
let btn1 = document.getElementById("button1");
let out1 = document.getElementById("output1");
let costprdct = document.getElementById("costsprodct");
let btn2 = document.getElementById("button2");
let out2 = document.getElementById("output2");
let out3 = document.getElementById("output3");
let products = document.getElementById("titleprodct");
let date = document.getElementById("date");
let prodctval = document.getElementsByClassName("prodctval");
let userarry = [];

function fun1() {
  out1.innerText = +budget.value;
}

btn1.addEventListener("click", fun1);

function fun2() {
  out3.innerText = budget.value - costprdct.value;
  costprdct.value = "";
}

btn2.onclick = function fun3() {
  userarry.push({
    name: products.value,
    date: date.value,
    costsofprdct: costprdct.value,
  });

  var listItem = createNewTaskElement(products.value, costprdct.value);

  expenseListHolder.appendChild(listItem);

  out2.innerText = Number(out2.innerText) + Number(costprdct.value);

  products.value = "";
  date.value = "";
  console.log(userarry);
};

btn2.addEventListener("click", fun2);

var expenseListHolder = document.getElementById("incomplete-tasks");

var createNewTaskElement = function (expenseName, expenseLabel) {
  var listItem = document.createElement("li");
  var label = document.createElement("label");
  var price = document.createElement("label");
  // button.edit
  var editButton = document.createElement("button");
  // button.delete
  var deleteButton = document.createElement("button");

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  price.className = "xyz";
  label.className = "label"

  label.innerText = expenseName;
  price.innerText = expenseLabel;

  listItem.appendChild(label);
  listItem.appendChild(price);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};



// btn2.addEventListener("click", addExpenseToList);






