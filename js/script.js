const navLinks = document.querySelectorAll('nav a');
const contentSections = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all content sections
        contentSections.forEach(section => section.classList.remove('active'));

        // Add active class to clicked link and corresponding section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});
// Get current date
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString(); // Formats the date in MM/DD/YYYY
document.getElementById('updateDate').textContent = formattedDate;
