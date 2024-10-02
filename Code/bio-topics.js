window.onload = function() {
    document.getElementById("submit-button").addEventListener("click", function() {
        var selectedTopics = [];
        var checkboxes = document.querySelectorAll('.topic input[type="checkbox"]');
        
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedTopics.push(checkbox.value);
            }
        });

        localStorage.setItem("bioSelectedTopics", JSON.stringify(selectedTopics));

        window.location.href = "bio-subtopics.html";
    });
}
// It attaches a click event listner to the elemt with the submit button
// When the button "submit-button" is clicked, the function inside the event listener is executed
// Inside the event listener function, empty array selectedTopics is created to store the selected topics
// The code then selects all the checkboxes with the class "topic"  using the querySelectorAll method and stores them in the checkboxes variable
// It then loops through the checkboxes array and checks if the checkbox is checked. If it is, the value of the checkbox is pushed into the selectedTopics array
// The selectedTopics array is then stored in the local storage as a string using the setItem method
// The user is then redirected to the bio-subtopics.html page

// Initialises array selectedTopics to store the selected topics
// Selects all the checkboxes with the class "topic" using the querySelectorAll method and stores them in the checkboxes variable