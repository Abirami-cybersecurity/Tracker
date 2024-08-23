const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const form = document.querySelector("#form");

const dumyData = [{
        id: 1,
        description: "Flower",
        amount: -20
    },
    {
        id: 2,
        description: "Book",
        amount: 15
    },
    {
        id: 3,
        description: "Coffee",
        amount: -5
    },
    {
        id: 4,
        description: "Groceries",
        amount: -50
    },
    {
        id: 5,
        description: "Salary",
        amount: 500
    },
    {
        id: 6,
        description: "Movie Ticket",
        amount: -12
    },
    {
        id: 7,
        description: "Gym Membership",
        amount: -30
    },
    {
        id: 8,
        description: "Freelance Work",
        amount: 200
    },
    {
        id: 9,
        description: "Electric Bill",
        amount: -100
    },
    {
        id: 10,
        description: "Gift",
        amount: -25
    }
];


let transactions = dumyData;

function loaddata(transactions) {
    const {
        id,
        description,
        amount
    } = transactions;
    const sign = transactions.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transactions.amount < 0 ? "exp" : "inc");
    item.innerHTML = `
    ${transactions.description}
    <span>${sign} ${Math.abs(transactions.amount)}</span>
    <button class="btn-del">X<button/>
    `
    trans.appendChild(item);

}

function config() {
    transactions.forEach(loaddata);
}
window.addEventListener("load", function() {
    config();
});