// ==========================
// LOCAL STORAGE KEYS
// ==========================

const TRANSACTION_KEY = "fintrack_transactions";
const SETTINGS_KEY = "fintrack_settings";

// ==========================
// APP DATA
// ==========================

let transactions = JSON.parse(localStorage.getItem(TRANSACTION_KEY)) || [];

let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {
    username: "",
    currency: "₹",
    darkMode: false
};

let currentFilter = "all";
let chart = null;

// ==========================
// INITIALIZE
// ==========================

window.onload = function () {

    loadSettings();

    refreshDashboard();

    filterTransactions("all");

};

// ==========================
// SAVE FUNCTIONS
// ==========================

function saveTransactions() {

    localStorage.setItem(
        TRANSACTION_KEY,
        JSON.stringify(transactions)
    );

}

function saveSettings() {

    localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify(settings)
    );

}

// ==========================
// PAGE NAVIGATION
// ==========================

function showPage(page) {

    const dashboard = document.getElementById("dashboardPage");
    const settingsPage = document.getElementById("settingsPage");

    dashboard.classList.add("hidden");
    settingsPage.classList.add("hidden");

    if (page === "dashboard")
        dashboard.classList.remove("hidden");

    else
        settingsPage.classList.remove("hidden");

}

// ==========================
// MODAL
// ==========================

function openModal() {

    document.getElementById("modal").style.display = "flex";

}

function closeModal() {

    document.getElementById("modal").style.display = "none";

}

window.onclick = function (e) {

    const modal = document.getElementById("modal");

    if (e.target === modal)
        closeModal();

};

// ==========================
// LOGOUT
// ==========================

function logout() {

    if (confirm("Logout?")) {

        location.reload();

    }

}
// ==========================
// ADD TRANSACTION
// ==========================

document
    .getElementById("transactionForm")
    .addEventListener("submit", addTransaction);

function addTransaction(e) {

    e.preventDefault();

    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;

    if (
        description === "" ||
        amount <= 0 ||
        date === ""
    ) {
        alert("Please fill all fields correctly.");
        return;
    }

    const transaction = {

        id: Date.now(),

        type,

        description,

        amount,

        date,

        category

    };

    transactions.push(transaction);

    saveTransactions();

    document.getElementById("transactionForm").reset();

    closeModal();

    refreshDashboard();

}

// ==========================
// DELETE TRANSACTION
// ==========================

function deleteTransaction(id) {

    if (!confirm("Delete this transaction?"))
        return;

    transactions = transactions.filter(t => t.id !== id);

    saveTransactions();

    refreshDashboard();

}

// ==========================
// CALCULATE TOTALS
// ==========================

function calculateTotals() {

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        if (transaction.type === "income") {

            income += transaction.amount;

        } else {

            expense += transaction.amount;

        }

    });

    return {

        income,

        expense,

        balance: income - expense,

        total: transactions.length

    };

}

// ==========================
// FORMAT CURRENCY
// ==========================

function money(value) {

    return settings.currency + value.toLocaleString();

}

// ==========================
// UPDATE SUMMARY CARDS
// ==========================

function updateCards() {

    const totals = calculateTotals();

    document.getElementById("income").textContent =
        money(totals.income);

    document.getElementById("expense").textContent =
        money(totals.expense);

    document.getElementById("balance").textContent =
        money(totals.balance);

    document.getElementById("count").textContent =
        totals.total;

}

// ==========================
// MASTER REFRESH
// ==========================

function refreshDashboard() {

    updateCards();

    renderTransactions();

    renderChart();

}
// ==========================
// RENDER TRANSACTIONS
// ==========================

function renderTransactions() {

    const tbody = document.getElementById("transactionTable");

    tbody.innerHTML = "";

    let filtered = transactions;

    if (currentFilter === "income") {
        filtered = transactions.filter(t => t.type === "income");
    }

    if (currentFilter === "expense") {
        filtered = transactions.filter(t => t.type === "expense");
    }

    if (filtered.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:30px;">
                    No transactions found.
                </td>
            </tr>
        `;

        return;
    }

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(transaction => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${transaction.date}</td>

            <td>${transaction.description}</td>

            <td>${transaction.category}</td>

            <td class="${
                transaction.type === "income"
                    ? "incomeText"
                    : "expenseText"
            }">

                ${
                    transaction.type === "income"
                        ? "+"
                        : "-"
                }${money(transaction.amount)}

            </td>

            <td>

                <button
                    class="deleteBtn"
                    onclick="deleteTransaction(${transaction.id})">

                    Delete

                </button>

            </td>

        `;

        tbody.appendChild(row);

    });

}

// ==========================
// FILTERS
// ==========================
function filterTransactions(type) {

    currentFilter = type;

    document
        .querySelectorAll(".filters button")
        .forEach(button => button.classList.remove("active"));

    if(type==="all")
        document.querySelectorAll(".filters button")[0].classList.add("active");

    if(type==="income")
        document.querySelectorAll(".filters button")[1].classList.add("active");

    if(type==="expense")
        document.querySelectorAll(".filters button")[2].classList.add("active");

    renderTransactions();

}
// ==========================
// CHART.JS
// ==========================

function renderChart() {

    const ctx = document.getElementById("chart").getContext("2d");

    if (chart) {
        chart.destroy();
    }

    const labels = transactions.map(t =>
    new Date(t.date).toLocaleDateString()
);

    const amounts = transactions.map(t =>
        t.type === "income" ? t.amount : -t.amount
    );

    const colors = transactions.map(t =>
        t.type === "income"
            ? "#16a34a"
            : "#dc2626"
    );

    chart = new Chart(ctx, {

        type: "bar",

        data: {

            labels,

            datasets: [{

                label: "Cash Flow",

                data: amounts,

                backgroundColor: colors,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

// ==========================
// LOAD SETTINGS
// ==========================

function loadSettings() {

    document.getElementById("username").value =
        settings.username;

    document.getElementById("currency").value =
        settings.currency;

    document.getElementById("theme").checked =
        settings.darkMode;

    if (settings.darkMode)
        document.body.classList.add("dark");

}

// ==========================
// USERNAME
// ==========================

document
.getElementById("username")
.addEventListener("input", function(){

    settings.username = this.value;

    saveSettings();

});

// ==========================
// CURRENCY
// ==========================

document
.getElementById("currency")
.addEventListener("change", function(){

    settings.currency = this.value;

    saveSettings();

    refreshDashboard();

});

// ==========================
// DARK MODE
// ==========================

document
.getElementById("theme")
.addEventListener("change", function(){

    settings.darkMode = this.checked;

    document.body.classList.toggle(
        "dark",
        this.checked
    );

    saveSettings();

});

// ==========================
// RESET
// ==========================

function resetData(){

    if(!confirm("This will permanently delete all your finance data. Continue?"))
        return;

    transactions = [];

    settings = {
        username:"",
        currency:"₹",
        darkMode:false
    };

    localStorage.removeItem(TRANSACTION_KEY);
    localStorage.removeItem(SETTINGS_KEY);

    document.body.classList.remove("dark");

    loadSettings();

    refreshDashboard();

}