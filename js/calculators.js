// Financial Calculator Functions

// Car Loan Calculator
function calculateCarLoan() {
    const carPrice = parseFloat(document.getElementById('car-price').value) || 0;
    const downPayment = parseFloat(document.getElementById('down-payment').value) || 0;
    const loanTerm = parseInt(document.getElementById('loan-term').value) || 5;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) || 0;
    
    if (carPrice <= 0 || interestRate <= 0) {
        document.getElementById('car-loan-result').innerHTML = '<p class="error">Please enter valid values for car price and interest rate.</p>';
        return;
    }
    
    const loanAmount = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
        const monthlyPayment = loanAmount / numberOfPayments;
        const totalInterest = 0;
        const totalPayment = loanAmount;
        
        displayCarLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount);
    } else {
        const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - loanAmount;
        
        displayCarLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount);
    }
}

function displayCarLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount) {
    const resultDiv = document.getElementById('car-loan-result');
    resultDiv.innerHTML = `
        <div class="calculator-results">
            <h4>Loan Summary</h4>
            <p><strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
            <p><strong>Total Payment:</strong> $${totalPayment.toFixed(2)}</p>
            <p><strong>Loan Amount:</strong> $${loanAmount.toFixed(2)}</p>
        </div>
    `;
}

// Mortgage Calculator
function calculateMortgage() {
    const homePrice = parseFloat(document.getElementById('home-price').value) || 0;
    const downPayment = parseFloat(document.getElementById('mortgage-down').value) || 0;
    const loanTerm = parseInt(document.getElementById('mortgage-term').value) || 30;
    const interestRate = parseFloat(document.getElementById('mortgage-rate').value) || 0;
    
    if (homePrice <= 0 || interestRate <= 0) {
        document.getElementById('mortgage-result').innerHTML = '<p class="error">Please enter valid values for home price and interest rate.</p>';
        return;
    }
    
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
        const monthlyPayment = loanAmount / numberOfPayments;
        const totalInterest = 0;
        const totalPayment = loanAmount;
        
        displayMortgageResult(monthlyPayment, totalInterest, totalPayment, loanAmount, homePrice, downPayment);
    } else {
        const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - loanAmount;
        
        displayMortgageResult(monthlyPayment, totalInterest, totalPayment, loanAmount, homePrice, downPayment);
    }
}

function displayMortgageResult(monthlyPayment, totalInterest, totalPayment, loanAmount, homePrice, downPayment) {
    const resultDiv = document.getElementById('mortgage-result');
    resultDiv.innerHTML = `
        <div class="calculator-results">
            <h4>Mortgage Summary</h4>
            <p><strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
            <p><strong>Total Payment:</strong> $${totalPayment.toFixed(2)}</p>
            <p><strong>Loan Amount:</strong> $${loanAmount.toFixed(2)}</p>
            <p><strong>Down Payment:</strong> $${downPayment.toFixed(2)}</p>
            <p><strong>Home Price:</strong> $${homePrice.toFixed(2)}</p>
        </div>
    `;
}

// Personal Loan Calculator
function calculatePersonalLoan() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const loanTerm = parseInt(document.getElementById('personal-term').value) || 3;
    const interestRate = parseFloat(document.getElementById('personal-rate').value) || 0;
    
    if (loanAmount <= 0 || interestRate <= 0) {
        document.getElementById('personal-loan-result').innerHTML = '<p class="error">Please enter valid values for loan amount and interest rate.</p>';
        return;
    }
    
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
        const monthlyPayment = loanAmount / numberOfPayments;
        const totalInterest = 0;
        const totalPayment = loanAmount;
        
        displayPersonalLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount);
    } else {
        const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - loanAmount;
        
        displayPersonalLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount);
    }
}

function displayPersonalLoanResult(monthlyPayment, totalInterest, totalPayment, loanAmount) {
    const resultDiv = document.getElementById('personal-loan-result');
    resultDiv.innerHTML = `
        <div class="calculator-results">
            <h4>Personal Loan Summary</h4>
            <p><strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}</p>
            <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
            <p><strong>Total Payment:</strong> $${totalPayment.toFixed(2)}</p>
            <p><strong>Loan Amount:</strong> $${loanAmount.toFixed(2)}</p>
        </div>
    `;
}

// Investment Calculator
function calculateInvestment() {
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value) || 0;
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value) || 0;
    const years = parseInt(document.getElementById('investment-years').value) || 0;
    const annualReturn = parseFloat(document.getElementById('return-rate').value) || 0;
    
    if (years <= 0) {
        document.getElementById('investment-result').innerHTML = '<p class="error">Please enter a valid number of years.</p>';
        return;
    }
    
    const monthlyRate = annualReturn / 100 / 12;
    const numberOfMonths = years * 12;
    
    let futureValue;
    if (monthlyRate === 0) {
        futureValue = initialInvestment + (monthlyContribution * numberOfMonths);
    } else {
        // Future value of initial investment
        const futureValueInitial = initialInvestment * Math.pow(1 + monthlyRate, numberOfMonths);
        
        // Future value of monthly contributions
        const futureValueContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate);
        
        futureValue = futureValueInitial + futureValueContributions;
    }
    
    const totalContributions = initialInvestment + (monthlyContribution * numberOfMonths);
    const totalInterest = futureValue - totalContributions;
    
    displayInvestmentResult(futureValue, totalContributions, totalInterest, years);
}

function displayInvestmentResult(futureValue, totalContributions, totalInterest, years) {
    const resultDiv = document.getElementById('investment-result');
    resultDiv.innerHTML = `
        <div class="calculator-results">
            <h4>Investment Summary</h4>
            <p><strong>Future Value:</strong> $${futureValue.toFixed(2)}</p>
            <p><strong>Total Contributions:</strong> $${totalContributions.toFixed(2)}</p>
            <p><strong>Total Interest Earned:</strong> $${totalInterest.toFixed(2)}</p>
            <p><strong>Investment Period:</strong> ${years} years</p>
        </div>
    `;
}

// Add event listeners for form inputs
document.addEventListener('DOMContentLoaded', function() {
    // Add input event listeners for real-time calculations (optional)
    const inputs = document.querySelectorAll('input[type="number"], select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear previous results when user starts typing
            const resultDivs = document.querySelectorAll('.calculator-result');
            resultDivs.forEach(div => {
                if (div.innerHTML.includes('error')) {
                    div.innerHTML = '';
                }
            });
        });
    });
}); 