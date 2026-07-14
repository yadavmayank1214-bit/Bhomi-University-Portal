/**
 * Bhomi University Portal Controller
 */

// PAYMENT MODAL LOGIC
function openPayment() {
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

function simulatePayment() {
    alert("Redirecting to Bhomi University Payment Gateway...");
    closePayment();
}

// COURSE REGISTRATION LOGIC
function updateCredits() {
    let total = 0;
    const checkboxes = document.querySelectorAll('.course-check');
    
    checkboxes.forEach(box => {
        if (box.checked) {
            total += parseInt(box.getAttribute('data-credits'));
        }
    });

    const display = document.getElementById('totalCredits');
    display.innerText = total;
    
    // UI Feedback: Requirement met (10 credits)
    if (total >= 10) {
        display.style.color = "#27ae60"; // Green for success
    } else {
        display.style.color = "#ffcc00"; // Gold for warning
    }
}

function submitRegistration() {
    const total = parseInt(document.getElementById('totalCredits').innerText);
    if(total < 10) {
        alert("Registration Error: You must select at least 10 credits.");
    } else {
        alert("Success: Semester V Course Registration for Bhomi University submitted!");
    }
}

// Event: Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        closePayment();
    }
}