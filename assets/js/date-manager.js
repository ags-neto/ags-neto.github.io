function updateAge(elementId, birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear = 
        (today.getMonth() > birthDate.getMonth()) || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age -= 1;
    }

    const ageElement = document.getElementById(elementId);
    if (ageElement) {
        ageElement.textContent = age;
    }
}

function updateCopyright(elementId, startYear) {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById(elementId);
    if (copyrightElement) {
        if (currentYear == startYear) {
            copyrightElement.textContent = `${startYear}`;
        } else {
            copyrightElement.textContent = `${startYear} - ${currentYear}`;
        }
    }
}

// Call the functions after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    updateAge("age", "2000-05-19");
    updateCopyright("copyright", 2024);
});
