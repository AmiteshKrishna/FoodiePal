document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#share-recipe form');

    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form field values
        const recipeName = document.getElementById('recipe-name').value.trim();
        const recipeDescription = document.getElementById('recipe-description').value.trim();
        const recipeImage = document.getElementById('recipe-image').files[0];

        // Validation for required fields
        if (recipeName === '' || recipeDescription === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Basic file upload validation (optional)
        if (recipeImage && recipeImage.size > 2 * 1024 * 1024) { // 2MB limit
            alert('The image file size should not exceed 2MB.');
            return;
        }

        // Show thank you message
        alert(`Thank you for sharing your recipe: ${recipeName}!`);

        // Optionally, you can clear the form after submission
        form.reset();

        // Stay on the same page after submission
        // No need for redirection
    });
});