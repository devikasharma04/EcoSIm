// JavaScript to handle navigation between screens
document.addEventListener("DOMContentLoaded", function() {
    const mapIcon = document.getElementById('map-icon');
    const alertIcon = document.getElementById('alert-icon');
    const fileIcon = document.getElementById('file-icon');
    const profileIcon = document.getElementById('profile-icon');
    
    const mainDashboard = document.getElementById('main-dashboard');
    const houseMap = document.getElementById('house-map');
    const filesSection = document.getElementById('files-section');
    const profileSection = document.getElementById('profile-section');

    // Function to hide all sections
    function hideAllSections() {
        mainDashboard.style.display = 'none';
        houseMap.style.display = 'none';
        filesSection.style.display = 'none';
        profileSection.style.display = 'none';
    }

    // Map icon navigation
    mapIcon.addEventListener('click', function() {
        hideAllSections();
        houseMap.style.display = 'block';  // Show house map
    });

    // Alerts icon navigation (back to dashboard)
    alertIcon.addEventListener('click', function() {
        hideAllSections();
        mainDashboard.style.display = 'block';  // Show dashboard
    });

    // Files icon navigation
    fileIcon.addEventListener('click', function() {
        hideAllSections();
        filesSection.style.display = 'block';  // Show files section
    });

    // Profile icon navigation
    profileIcon.addEventListener('click', function() {
        hideAllSections();
        profileSection.style.display = 'block';  // Show profile section
    });
});
