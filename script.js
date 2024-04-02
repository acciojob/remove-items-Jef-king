document.addEventListener('DOMContentLoaded', function() {
    var colorSelect = document.getElementById('colorSelect');
    document.querySelector('input[type="button"]').addEventListener('click', function() {
        var selectedOption = colorSelect.options[colorSelect.selectedIndex];
        colorSelect.removeChild(selectedOption);
    });
});
