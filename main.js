// JavaScript to handle navigation between screens
document.addEventListener("DOMContentLoaded", function() {
    const mapIcon = document.getElementById('map-icon');
    const alertIcon = document.getElementById('alert-icon');
    const mainDashboard = document.getElementById('main-dashboard');
    const houseMap = document.getElementById('house-map');

    // Add event listener to map icon
    mapIcon.addEventListener('click', function() {
        mainDashboard.style.display = 'none';  // Hide dashboard (Daily Report + My Rooms)
        houseMap.style.display = 'block';      // Show house map
    });

    // Optionally add other navigation logic (e.g., for alerts, profile)
    alertIcon.addEventListener('click', function() {
        mainDashboard.style.display = 'block';  // Show dashboard
        houseMap.style.display = 'none';        // Hide house map
    });
});
