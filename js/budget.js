// Budget Calculator Functions

let expenseChart = null;
let incomeExpenseChart = null;

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create default charts with sample data
    createExpenseChart({
        'Housing': 0,
        'Transportation': 0,
        'Food & Dining': 0,
        'Healthcare': 0,
        'Entertainment': 0,
        'Debt & Savings': 0,
        'Other': 0
    });
    
    createIncomeExpenseChart(0, 0);
});

// Calculate budget when button is clicked
function calculateBudget() {
    // Get income values
    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const sideIncome = parseFloat(document.getElementById('side-income').value) || 0;
    const investmentIncome = parseFloat(document.getElementById('investment-income').value) || 0;
    const otherIncome = parseFloat(document.getElementById('other-income').value) || 0;

    // Get expense values
    const rentMortgage = parseFloat(document.getElementById('rent-mortgage').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const internetPhone = parseFloat(document.getElementById('internet-phone').value) || 0;
    const carPayment = parseFloat(document.getElementById('car-payment').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
    const groceries = parseFloat(document.getElementById('groceries').value) || 0;
    const diningOut = parseFloat(document.getElementById('dining-out').value) || 0;
    const healthInsurance = parseFloat(document.getElementById('health-insurance').value) || 0;
    const medicalExpenses = parseFloat(document.getElementById('medical-expenses').value) || 0;
    const entertainment = parseFloat(document.getElementById('entertainment').value) || 0;
    const shopping = parseFloat(document.getElementById('shopping').value) || 0;
    const subscriptions = parseFloat(document.getElementById('subscriptions').value) || 0;
    const creditCards = parseFloat(document.getElementById('credit-cards').value) || 0;
    const studentLoans = parseFloat(document.getElementById('student-loans').value) || 0;
    const savings = parseFloat(document.getElementById('savings').value) || 0;
    const otherExpenses = parseFloat(document.getElementById('other-expenses').value) || 0;

    // Calculate totals
    const totalIncome = salary + sideIncome + investmentIncome + otherIncome;
    const totalExpenses = rentMortgage + utilities + internetPhone + carPayment + gas + 
                         insurance + maintenance + groceries + diningOut + healthInsurance + 
                         medicalExpenses + entertainment + shopping + subscriptions + 
                         creditCards + studentLoans + savings + otherExpenses;
    const netIncome = totalIncome - totalExpenses;

    // Update summary display
    document.getElementById('total-income').textContent = formatCurrency(totalIncome);
    document.getElementById('total-expenses').textContent = formatCurrency(totalExpenses);
    document.getElementById('net-income').textContent = formatCurrency(netIncome);

    // Update net income color based on positive/negative
    const netIncomeElement = document.getElementById('net-income');
    if (netIncome >= 0) {
        netIncomeElement.style.color = '#F5F5E0'; // Light color for positive on dark background
    } else {
        netIncomeElement.style.color = '#FFFFFF'; // White for negative
    }

    // Create expense breakdown chart
    createExpenseChart({
        'Housing': rentMortgage + utilities + internetPhone,
        'Transportation': carPayment + gas + insurance + maintenance,
        'Food & Dining': groceries + diningOut,
        'Healthcare': healthInsurance + medicalExpenses,
        'Entertainment': entertainment + shopping + subscriptions,
        'Debt & Savings': creditCards + studentLoans + savings,
        'Other': otherExpenses
    });

    // Create income vs expenses chart
    createIncomeExpenseChart(totalIncome, totalExpenses);

    // Generate financial advice
    generateFinancialAdvice(totalIncome, totalExpenses, netIncome);
}

// Create expense breakdown pie chart
function createExpenseChart(expenseData) {
    const canvas = document.getElementById('expenseChart');
    if (!canvas) {
        console.error('Expense chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2D context for expense chart');
        return;
    }
    
    // Destroy existing chart if it exists
    if (expenseChart) {
        expenseChart.destroy();
    }

    const labels = Object.keys(expenseData).filter(key => expenseData[key] > 0);
    const data = labels.map(key => expenseData[key]);
    const colors = [
        '#3F7054', '#A0C692', '#CEC7BD', '#6C685D', 
        '#F5F5E0', '#000000', '#3F7054', '#A0C692'
    ];

    expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${formatCurrency(context.parsed)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Create income vs expenses bar chart
function createIncomeExpenseChart(income, expenses) {
    const canvas = document.getElementById('incomeExpenseChart');
    if (!canvas) {
        console.error('Income vs expenses chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2D context for income vs expenses chart');
        return;
    }
    
    // Destroy existing chart if it exists
    if (incomeExpenseChart) {
        incomeExpenseChart.destroy();
    }

    incomeExpenseChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                label: 'Amount ($)',
                data: [income, expenses],
                backgroundColor: [
                    'rgba(63, 112, 84, 0.8)',
                    'rgba(160, 198, 146, 0.8)'
                ],
                borderColor: [
                    'rgba(63, 112, 84, 1)',
                    'rgba(160, 198, 146, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${formatCurrency(context.parsed.y)}`;
                        }
                    }
                }
            }
        }
    });
}

// Generate personalized financial advice
function generateFinancialAdvice(income, expenses, netIncome) {
    const adviceContainer = document.getElementById('financial-advice');
    let advice = '';

    if (income === 0 && expenses === 0) {
        advice = '<p>Please enter your income and expenses to get personalized financial advice.</p>';
    } else {
        // Calculate percentages
        const housingExpense = (parseFloat(document.getElementById('rent-mortgage').value) || 0) + 
                              (parseFloat(document.getElementById('utilities').value) || 0) + 
                              (parseFloat(document.getElementById('internet-phone').value) || 0);
        const housingPercentage = income > 0 ? (housingExpense / income) * 100 : 0;
        
        const debtExpense = (parseFloat(document.getElementById('credit-cards').value) || 0) + 
                           (parseFloat(document.getElementById('student-loans').value) || 0);
        const debtPercentage = income > 0 ? (debtExpense / income) * 100 : 0;

        // Generate advice based on financial situation
        if (netIncome < 0) {
            advice += '<div class="advice-item advice-warning">';
            advice += '<h4>⚠️ Budget Deficit Detected</h4>';
            advice += '<p>You are spending more than you earn. This is not sustainable long-term.</p>';
            advice += '<ul>';
            advice += '<li>Review your expenses and identify areas to cut back</li>';
            advice += '<li>Consider increasing your income through side hustles or career advancement</li>';
            advice += '<li>Prioritize essential expenses over discretionary spending</li>';
            advice += '</ul>';
            advice += '</div>';
        } else if (netIncome < income * 0.1) {
            advice += '<div class="advice-item advice-caution">';
            advice += '<h4>⚠️ Low Savings Rate</h4>';
            advice += '<p>Your savings rate is below 10% of your income. Consider increasing your savings.</p>';
            advice += '</div>';
        } else {
            advice += '<div class="advice-item advice-positive">';
            advice += '<h4>✅ Good Financial Health</h4>';
            advice += '<p>You are living within your means and saving money. Keep up the good work!</p>';
            advice += '</div>';
        }

        // Housing advice
        if (housingPercentage > 30) {
            advice += '<div class="advice-item advice-caution">';
            advice += '<h4>🏠 Housing Costs High</h4>';
            advice += `<p>Your housing costs (${housingPercentage.toFixed(1)}%) exceed the recommended 30% of income.</p>`;
            advice += '<ul>';
            advice += '<li>Consider downsizing or finding a more affordable place</li>';
            advice += '<li>Look for ways to reduce utility costs</li>';
            advice += '<li>Consider getting a roommate to split costs</li>';
            advice += '</ul>';
            advice += '</div>';
        }

        // Debt advice
        if (debtPercentage > 20) {
            advice += '<div class="advice-item advice-warning">';
            advice += '<h4>💳 High Debt Burden</h4>';
            advice += `<p>Your debt payments (${debtPercentage.toFixed(1)}%) exceed the recommended 20% of income.</p>`;
            advice += '<ul>';
            advice += '<li>Focus on paying off high-interest debt first</li>';
            advice += '<li>Consider debt consolidation to lower interest rates</li>';
            advice += '<li>Avoid taking on new debt</li>';
            advice += '</ul>';
            advice += '</div>';
        }

        // Savings advice
        const savingsAmount = parseFloat(document.getElementById('savings').value) || 0;
        const savingsPercentage = income > 0 ? (savingsAmount / income) * 100 : 0;
        
        if (savingsPercentage < 10) {
            advice += '<div class="advice-item advice-caution">';
            advice += '<h4>💰 Increase Savings</h4>';
            advice += `<p>Your savings rate (${savingsPercentage.toFixed(1)}%) is below the recommended 10-20%.</p>`;
            advice += '<ul>';
            advice += '<li>Aim to save at least 10% of your income</li>';
            advice += '<li>Set up automatic transfers to savings</li>';
            advice += '<li>Build an emergency fund of 3-6 months of expenses</li>';
            advice += '</ul>';
            advice += '</div>';
        }

        // General recommendations
        advice += '<div class="advice-item advice-general">';
        advice += '<h4>📋 General Recommendations</h4>';
        advice += '<ul>';
        advice += '<li>Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings</li>';
        advice += '<li>Track your spending regularly to stay on budget</li>';
        advice += '<li>Set specific financial goals and create a plan to achieve them</li>';
        advice += '<li>Consider working with a financial advisor for personalized guidance</li>';
        advice += '</ul>';
        advice += '</div>';
    }

    adviceContainer.innerHTML = advice;
}

// Format currency for display
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Add event listeners for real-time updates
document.addEventListener('DOMContentLoaded', function() {
    // Add input event listeners for better UX
    const inputs = document.querySelectorAll('.budget__form-group input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear any existing error messages
            const errorMessages = document.querySelectorAll('.error');
            errorMessages.forEach(error => error.remove());
        });
    });

    // Add keyboard shortcut for calculation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            calculateBudget();
        }
    });
});

 