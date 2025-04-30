// Age Calculator JavaScript Code

// Function to calculate age
function calculateAge() {
    // Get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Get today's date
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Months are zero-based
    const currentYear = today.getFullYear();

    // Calculate age
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // Adjust for negative days or months
    if (ageDays < 0) {
        ageMonths -= 1;
        const previousMonth = new Date(currentYear, currentMonth - 1, 0);
        ageDays += previousMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    // Display the result
    document.getElementById("result").innerText = 
        `You are ${ageYears} years old`;
}

// Attach event listener to the button
document.getElementById("calculate").addEventListener("click", calculateAge);