// Purpose: Displays the subtopics for the selected topics and then store the selected subtopics in local storage as a string
var subtopicsByTopic = {
    "1": ["Measurements in physics", "Uncertainties and errors", "Vectors and scalars"],
    "2": ["Motion", "Forces", "Work, energy and power", "Momentum and impulse"],
    "3": ["Thermal concepts", "Modelling gases"],
    "4": ["Oscillations", "Travelling waves", "Wave characteristics", "Wave behaviour", "Standing waves"],
    "5": ["Electric Fields", "Heating effect of electric currents", "Electric cells", "Magnetic effect of electric currents"],
    "6": ["Circular motion", "Newton’s law of gravitation"],
    "7": ["Discrete energy and radioactivity", "Nuclear reactions", "The structure of matter"],
    "8": ["Energy sources", "Thermal energy transfer"],
    "9": ["Simple harmonic motion", "Single-slit diffraction", "Interference", "Resolution", "Doppler effect"],
    "10": ["Describing fields", "Fields at work"],
    "11": ["Electromagnetic induction", "Power generation and transmission"],
    "12": ["The interaction of matter with radiation", "Nuclear physics"],
    "D": ["Stellar quantities", "Stellar characteristics and stellar evolution", "Cosmology", "Stellar processes","Further cosmology"]
    // All the topics and their subtopics stored in an object
};

// Information about each subtopic 
var subtopicInfo = {
    "Measurements in physics": ["In scientific notation, values are written as a * 10^n"],
    "Uncertainties and errors": ["Random errors are caused by fluctuations in measurements centered around the true value"],
    "Vectors and scalars": ["Line of best fit is the straight line drawn on a graph so that the average distance between the data points and the line is minimized"],
    "Motion": ["Acceleration due to gravity of any free-falling object is given by g = 9.81m/s^2"],
    "Forces": ["Newton’s Third Law states that if a body A exerts a force on body B, then body B exerts a force of the same magnitude but in the opposite direction of body A"],
    "Work, energy and power": ["Work done measures the transfer of energy due to a force and is a scalar quantity."],
    "Momentum and impulse": ["The law of conservation of linear momentum states that the sum of initial momentum is equal to the sum of final momentum in a closed system"],
    "Thermal concepts": ["Molecules are held together by intermolecular forces"],
    "Modelling gases": ["Pressure is defined as the normal force per unit area"],
    "Oscillations": ["An object undergoes SHM if it experiences a force which is proportional and opposite of the displacement from its equilibrium position"],
    "Travelling waves": ["A travelling wave is a continuous disturbance in a medium characterized by repeating oscillations"],
    "Wave characteristics": ["The principle of superposition states that the net displacement of the underlying medium for a wave is equal to the sum of the individual wave displacements"],
    "Wave behaviour": ["Refraction is the change in direction of a wave when it transmits from one medium to another"],
    "Standing waves": ["Standing waves (stationary) waves result from the superposition of two opposite waves which are otherwise identical"],
    "Electric Fields": ["Charges with the same sign repel each other and changes with the opposite sign attract"],
    "Heating effect of electric currents": ["An electric circuit is an interconnection of electrical components in a closed loop"],
    "Electric cells": ["A cell in a circuit acts as a source of electrical energy and creates an electric potential difference at its terminals"],
    "Magnetic effect of electric currents": ["Magnetic fields are caused by the presence of magnets or moving charges"],
    "Circular motion": ["In a uniform circular motion, speed is constant while (angular) velocity and (angular) acceleration are constantly changing"],
    "Newton's law of gravitation": ["The gravitational field strength at a point is the force per unit mass experienced by a test mass at that point"],
    "Discrete energy and radioactivity": ["The electrons of an atom can occupy certain discrete atomic energy levelsf"],
    "Nuclear reactions": ["The unified atomic mass unit (μ) is commonly used in nuclear physics. It is defined as one twelfth of the mass of a carbon-12 atom"],
    "The structure of matter": ["Quarks and leptons are the elementary particles (building blocks) of matter"],
    "Energy sources": ["Specific energy and energy density are useful measures of the energy that will be released from a given weight or volume of fuel when it is burned"],
    "Thermal energy transfer": ["A black body which absorbs all incident electromagnetic radiation is both the perfect absorber and the perfect emitter of radiation"],
    "Simple harmonic motion": ["In a SHM, there is an interchange between KE and PE throughout the motion. However, the total energy remains constant"],
    "Single-slit diffraction": ["Special diffraction patterns appear when light is diffracted by a single slit which is comparable to the wavelength of the light in size"],
    "Interference": ["A diffraction grating is the tool of choice for separating the colors in incident light"],
    "Resolution": ["The Rayleigh criterion is when two points are just resolved. This is when the central maximum of one image coincides with the first minimum of the other"],
    "Doppler effect": ["The Doppler effect refers to the change in observed frequency of a wave due to the movement of the observer and/or that of the wave source"],
    "Describing fields": ["A gravitational field is a space where a small test mass experiences a force due to another mass"],
    "Fields at work": ["The gravitational potential gradient of a gravitational field is given by ΔV/Δr where ΔV is the change in gravitational potential between two points and Δr is the distance between those two points"],
    "Electromagnetic induction": ["When a conducting wire moves through a magnetic field, a potential difference is created along the wire. This phenomenon is called electromagnetic induction"],
    "Power generation and transmission": ["The average power produced (or dissipated) from an alternating current cannot be computed directly using the peak values of voltage or current"],
    "The interaction of matter with radiation": ["The photoelectric effect is the emission of electrons when light shines on a material"],
    "Nuclear physics": ["The binding energy of a nucleus is the energy required to separate all the nucleons in the nucleus"],
    "Stellar quantities": ["A binary star are two stars orbiting a common center"],
    "Stellar characteristics and stellar evolution": ["Cepheid variables are stars in which its luminosity increases sharply and falls gently in a period of time"],
    "Cosmology": ["The Big Bang theory states that both space and time originated with the expansion from a singularity"],
    "Stellar processes": ["The Jeans mass criterion is determined by asking when the magnitude of the gravitational potential energy exceeds the magnitude of the gas’s kinetic energy"],
    "Further cosmology": ["The idea of a uniform universe is called the cosmological principle"],
// Information about each subtopic
};

window.addEventListener('load', function() {
    // Selected topics from local storage
    var selectedTopics = JSON.parse(localStorage.getItem("physicsSelectedTopics"));

    var topicsContainer = document.querySelector('.topics-container');

    topicsContainer.innerHTML = '';

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
            label.textContent = '' + subtopic;

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
                // Stores the information about the selected subtopics
                selectedSubtopicInfo[checkbox.value] = subtopicInfo[checkbox.value];
            }
        });

        // Store the selected subtopics and their information in local storage
        localStorage.setItem("physicsSelectedSubtopics", JSON.stringify(selectedSubtopics));
        localStorage.setItem("physicsSelectedSubtopicInfo", JSON.stringify(selectedSubtopicInfo));

        // Redirectiction to the physics subtopics existing page 
        window.location.href = "physics-subtopics-existing-page.html";
    });
});

// Function that selects a completely random subtopic
function getRandomSubtopic() {
    // Creates an array of the topics
    var topics = Object.keys(subtopicsByTopic);

    var randomTopic = topics[Math.floor(Math.random() * topics.length)];

    var subtopics = subtopicsByTopic[randomTopic];

    var randomSubtopic = subtopics[Math.floor(Math.random() * subtopics.length)];

    return randomSubtopic;
}

// Function which displays flashcards
function displayFlashcard() {
    // Selects a random subtopic
    var subtopic = getRandomSubtopic();

    // Displays the selected subtopic
    document.getElementById('flashcard-question').textContent = subtopic;

    // Show answer button
    document.getElementById('show-answer-button').onclick = function() {
        // Display the corresponding information when clicking on the show answer button
        document.getElementById('flashcard-answer').textContent = subtopicInfo[subtopic];
    };
}

// Displays a flashcard when the page loads
window.addEventListener('load', displayFlashcard);

// "Next" button
document.getElementById('next-button').addEventListener('click', function() {
    // Clears the previous answer
    document.getElementById('flashcard-answer').textContent = '';

    // Displays a new flashcard
    displayFlashcard();
});


