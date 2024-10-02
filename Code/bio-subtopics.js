// Purpose: Displays the subtopics for the selected topics and then store the selected subtopics in local storage as a string
var subtopicsByTopic = {
    "1": ["Introduction to cells", "Ulstrastructure of cells", "Membrane structure", "Membrane transport", "The origin of cells", "Cell division"],
    "2": ["Molecules to metabolism", "Water", "Carbohydrates and lipids", "Proteins", "Enzymes", "Structure of DNA and RNA", "Cell respiration", "Photosynthesis"],
    "3": ["Genes", "Chromosomes", "Meiosis", "Inheritance", "Genetic modification and biotechnology"],
    "4": ["Species, communities, and ecosystems", "Energy flow", "Carbon cycling", "Climate change"],
    "5": ["Evidence for evolution", "Natural selection", "Classification of biodiversity", "Cladistics"],
    "6": ["Digestion and absorption", "The blood system", "Defence against infectious disease", "Gas exchange", "Neurons and synapses", "Hormones, homeostatis and reproduction"],
    "7": ["DNA structure and replication", "Transcription and gene expression", "Translation"],
    "8": ["Metabolism", "Cell respiration", "Photosynthesis"],
    "9": ["Transport in the xylem of plants", "Transport in the phloem of plants", "Growth in plants", "Reproduction in plants"],
    "10": ["Meiosis", "Inheritance", "Gene pools and speciation"],
    "11": ["Antibody production and vaccination", "Movement", "The kidney and osmoregulation", "Sexual reproduction"],
    "A": ["Neural development", "The human brain", "Perception of stimuli", "Innate and learned behaviour", "Neuropharmacology", "Ethology"],
// All the topics and their subtopics stored in an object
};

// Information about each subtopic
var subtopicInfo = {
    "Introduction to cells": ["Every living cell is surrounded by a membrane, which separates the cell contents from everything else outside"],
    "Ultrastructure of cells": ["Eukaryotes have a compartment within the cell that contains the chromosomes"],
    "Membrane structure": ["Phospholipids are unusual because part of a phospholipid molecule is hydrophilic and part is hydrophobic"],
    "Membrane transport": ["Active transport is the movement of molecules across a cell membrane in the direction against some gradient or other obstructing factor"],
    "The origin of cells": ["The first cells were probably heterotrophic anaerobes"],
    "Cell division": ["The cell cycle is a series of events that take place in a cell leading to its division and duplication of its DNA to produce two daughter cells"],
    "Molecules to metabolism": ["Metabolism is the sum of all the chemical reactions that occur in a cell"],
    "Water": ["Water is a polar molecule"],
    "Carbohydrates and lipids": ["Carbohydrates are the most abundant biological molecules on Earth"],
    "Proteins": ["Proteins are large, complex molecules that play many critical roles in the body"],
    "Enzymes": ["Enzymes are biological catalysts"],
    "Structure of DNA and RNA": ["DNA is a double helix"],
    "Cell respiration": ["Cellular respiration is a set of metabolic reactions and processes that take place in the cells of organisms to convert biochemical energy from nutrients into adenosine triphosphate (ATP)"],
    "Photosynthesis": ["Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that can later be released to fuel the organisms' activities"],
    "Genes": ["A gene is a sequence of DNA that contains the information needed to make a particular protein"],
    "Chromosomes": ["Chromosomes are thread-like structures located inside the nucleus of animal and plant cells"],
    "Meiosis": ["Meiosis is a type of cell division that reduces the number of chromosomes in the parent cell by half and produces four gamete cells"],
    "Inheritance": ["Inheritance is the process by which genetic information is passed on from parent to child"],
    "Genetic modification and biotechnology": ["Genetic modification is the process of altering the genetic makeup of an organism"],
    "Species, communities, and ecosystems": ["An ecosystem is a community of living organisms in conjunction with the nonliving components of their environment"],
    "Energy flow": ["Energy flow is the amount of energy that moves through a food chain"],
    "Carbon cycling": ["Carbon cycling is the process through which carbon is cycled through the earth's various systems"],
    "Climate change": ["Climate change is a long-term change in the average weather patterns that have come to define Earth's local, regional and global climates"],
    "Evidence for evolution": ["The fossil record is a list of the fossils that have been found"],
    "Natural selection": ["Natural selection is the process through which populations of living organisms adapt and change"],
    "Classification of biodiversity": ["Biodiversity is the variety of life on Earth"],
    "Cladistics": ["Cladistics is a method of classifying species of organisms into groups called clades"],
    "Digestion and absorption": ["Digestion is the breakdown of large insoluble food molecules into small water-soluble food molecules so that they can be absorbed into the watery blood plasma"],
    "The blood system": ["The blood system is the system that transports oxygen, nutrients, and waste products around the body"],
    "Defence against infectious disease": ["The immune system is the body's defense against infectious organisms and other invaders"],
    "Gas exchange": ["Gas exchange is the process by which oxygen and carbon dioxide move between the bloodstream and the lungs"],
    "Neurons and synapses": ["A neuron is a nerve cell"],
    "Hormones, homeostatis and reproduction": ["Homeostasis is the body's attempt to maintain a constant and balanced internal environment"],
    "DNA structure and replication": ["DNA replication is the process by which a double-stranded DNA molecule is copied to produce two identical DNA molecules"],
    "Transcription and gene expression": ["Transcription is the process by which the information in a strand of DNA is copied into a new molecule of messenger RNA (mRNA)"],
    "Translation": ["Translation is the process by which a protein is synthesized from the information contained in a molecule of messenger RNA (mRNA)"],
    "Metabolism": ["Metabolism is the sum of all the chemical reactions that occur in a cell"],
    "Cell respiration": ["Cellular respiration is a set of metabolic reactions and processes that take place in the cells of organisms to convert biochemical energy from nutrients into adenosine triphosphate (ATP)"],
    "Photosynthesis": ["Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that can later be released to fuel the organisms' activities"],
    "Transport in the xylem of plants": ["The xylem is a type of tissue in vascular plants that transports water and some nutrients from the roots to the leaves"],
    "Transport in the phloem of plants": ["The phloem is a type of tissue in vascular plants that transports food from the leaves to the other parts of the plant"],
    "Growth in plants": ["Plants grow by increasing in size and producing new cells"],
    "Reproduction in plants": ["Plants reproduce sexually and asexually"],
    "Meiosis": ["Meiosis is a type of cell division that reduces the number of chromosomes in the parent cell by half and produces four gamete cells"],
    "Inheritance": ["Inheritance is the process by which genetic information is passed on from parent to child"],
    "Gene pools and speciation": ["A gene pool is the collection of different genes within an interbreeding population"],
    "Antibody production and vaccination": ["Vaccination is the administration of a vaccine to help the immune system develop protection from a disease"],
    "Movement": ["Movement is the change in position of an object"],
    "The kidney and osmoregulation": ["Osmoregulation is the process of maintaining an optimal balance of water and solutes in the body"],
    "Sexual reproduction": ["Sexual reproduction is the production of new living organisms by combining genetic information from two individuals of different types"],
    "Neural development": ["Neural development is the process through which the nervous system is formed"],
    "The human brain": ["The human brain is the command center for the human nervous system"],
    "Perception of stimuli": ["Perception is the process of recognizing and interpreting sensory stimuli"],
    "Innate and learned behaviour": ["Innate behavior is behavior that's genetically hardwired in an organism"],
    "Neuropharmacology": ["Neuropharmacology is the study of how drugs affect cellular function in the nervous system"],
    "Ethology": ["Ethology is the scientific and objective study of animal behavior under natural conditions"],
    // Information about each subtopic
};

window.addEventListener('load', function() {
    // Selected topics from local storage
    var selectedTopics = JSON.parse(localStorage.getItem("bioSelectedTopics"));

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
                // Stores the information about the selected subtopics
                selectedSubtopicInfo[checkbox.value] = subtopicInfo[checkbox.value];
            }
        });

        // Stores the selected subtopics and their information in local storage
        localStorage.setItem("bioSelectedSubtopics", JSON.stringify(selectedSubtopics));
        localStorage.setItem("bioSelectedSubtopicInfo", JSON.stringify(selectedSubtopicInfo));

        // Redirection to the bio subtopics existing page
        window.location.href = "bio-subtopics-existing-page.html";
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

// Function which displays a flashcard
function displayFlashcard() {
    // Selects a random subtopic
    var subtopic = getRandomSubtopic();

    // Display the selected subtopic
    document.getElementById('flashcard-question').textContent = subtopic;

    // 'Show answer' button
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