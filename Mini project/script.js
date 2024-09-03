const sidebarLinks = document.querySelectorAll('.sidebar li');
const tabContents = document.querySelectorAll('.tab-content');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Get corresponding tab content id
        const tabId = link.dataset.tab;

        // Hide all tab content
        tabContents.forEach(content => content.classList.remove('active'));

        // Show selected tab content
        document.getElementById(tabId).classList.add('active');
    });
});
