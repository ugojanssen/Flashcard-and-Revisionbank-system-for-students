// Purpose: Displays the subtopics for the selected topics and then store the selected subtopics in local storage as a string
var subtopicsByTopic = {
    "1": ["Systems in Organisation", "System Design Basics"],
    "2": ["Computer architecture"],
    "3": ["Networks"],
    "4": ["General principles", "Connecting computational thinking and program design", "Introduction to programming"],
    "5": ["Abstract data structures"],
    "6": ["Resource Management"],
    "7": ["Control"],
    "C": ["Creating the web", "Searching the web", "Distributed approaches to the web", "The evolving web ","Analysing the web", "The intelligent web",],
// All the topics and their subtopics stored in an object
};

// Information about each subtopic
var subtopicInfo = {
    "Systems in Organisation": ["Parallel running is the new system is started, but the old system is kept running alongside it. Data has to entered into both systems."],
    "System Design Basics": ["A flow chart is a type of diagram representing a process using different symbols containing information about steps or a sequence of events."],
    "Computer architecture": ["CPU is a hardware component of a computer system that can perform basic arithmetic, logical operations; essentially the brain of the computer system"],
    "Networks": ["LAN is a computer network that connects computer systems that are within a limited geographical area such as a room, a home, an office building or a school."],
    "General principles": ["A computer program is a sequence of instructions, written to instruct a computer to perform a specified task."],
    "Connecting computational thinking and program design": ["resetNext() is used to restart the iteration through the collection."],
    "Introduction to programming": ["CPU basic instructions are ADD, COMPARE, RETRIEVE and STORE"],
    "Abstract data structures": ["Recursion is a way to design solutions to problems by divide-and-conquer or decrease-and-conquer"],
    "Resource Management": ["Multithreading is the ability of a program or an operating system to execute different parts of a program, called threads, simultaneously."],
    "Control": ["A control system is a set of devices that manage, command, direct, or regulate the behavior of other devices or systems."],
    "Creating the web": ["The Internet is a collection of connected networks."],
    "Searching the web": ["Parallel web crawling involves multiple web crawlers simultaneously fetching and indexing web pages."],
    "Distributed approaches to the web": ["Mobile computing refers to the use of portable computing devices (like smartphones, tablets, or laptops) in various locations and situations."],
    "The evolving web": ["Copyright is a form of intellectual property protection granted to the creators oforiginal works, including literary, artistic, and scientific works."],
    "Analysing the web": ["In a web graph, each web page (referred to as a URL – Unique Resource Locator) is depicted by a vertex."],
    "The intelligent web": ["Ontology is a formal way of naming and defining different things in a specific subject"],
    // Add information for other subtopics
};

window.addEventListener('load', function() {
    // Get the selected topics from local storage
    var selectedTopics = JSON.parse(localStorage.getItem("csSelectedTopics"));

    var topicsContainer = document.querySelector('.topics-container');

    topicsContainer.innerHTML = '';

    // For each selected topic, display the subtopics
    selectedTopics.forEach(function(topic) {
        var subtopics = subtopicsByTopic[topic];
        subtopics.forEach(function(subtopic) {
            var topicDiv = document.createElement('div');
            topicDiv.className = 'topic';

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'topic' + subtopic;
            checkbox.value = subtopic;

            var label = document.createElement('label');
            label.htmlFor = 'topic' + subtopic;
            label.textContent = subtopic;

            topicDiv.appendChild(checkbox);
            topicDiv.appendChild(label);

            topicsContainer.appendChild(topicDiv);
        });
    });

    document.getElementById("submit-button").addEventListener("click", function() {
        var selectedSubtopics = [];
        var selectedSubtopicInfo = {};
        var checkboxes = document.querySelectorAll('.topic input[type="checkbox"]');
        
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedSubtopics.push(checkbox.value);
                // Store the information about the selected subtopics
                selectedSubtopicInfo[checkbox.value] = subtopicInfo[checkbox.value];
            }
        });

        // Store the selected subtopics and their information in local storage
        localStorage.setItem("csSelectedSubtopics", JSON.stringify(selectedSubtopics));
        localStorage.setItem("csSelectedSubtopicInfo", JSON.stringify(selectedSubtopicInfo));

        // Redirection to the cs subtopics existing page
        window.location.href = "cs-subtopics-existing-page.html";
    });
});

// Function that selects a completely random subtopic
function getRandomSubtopic() {
    // Creates an array of all topics
    var topics = Object.keys(subtopicsByTopic);

    var randomTopic = topics[Math.floor(Math.random() * topics.length)];

    var subtopics = subtopicsByTopic[randomTopic];

    var randomSubtopic = subtopics[Math.floor(Math.random() * subtopics.length)];

    return randomSubtopic;
}

// Function which displays a flashcard
function displayFlashcard() {
    // Selects a random subtopic
    var subtopic = getRandomSubtopic();

    // Display the selected subtopic
    document.getElementById('flashcard-question').textContent = subtopic;

    //  "Show Answer" button
    document.getElementById('show-answer-button').onclick = function() {
        // Display the corresponding information when show answer button is clicked
        document.getElementById('flashcard-answer').textContent = subtopicInfo[subtopic];
    };
}

window.addEventListener('load', displayFlashcard);

// "Next" button
document.getElementById('next-button').addEventListener('click', function() {
    // Clear the previous answer
    document.getElementById('flashcard-answer').textContent = '';

    // Displays a new flashcard
    displayFlashcard();
});