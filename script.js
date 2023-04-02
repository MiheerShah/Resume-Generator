// Get DOM elements
const educationContainer = document.querySelector('.education');
const experienceContainer = document.querySelector('.experience');
const addEducationButton = document.querySelector('#add-education');
const addExperienceButton = document.querySelector('#add-experience');

// Add event listeners
addEducationButton.addEventListener('click', addEducation);
addExperienceButton.addEventListener('click', addExperience);

// Functions
function addEducation() {
  const educationElement = document.createElement('div');
  educationElement.classList.add('education');
  educationElement.innerHTML = `
    <label for="degree">Degree</label>
    <input type="text" id="degree" name="degree">
    <label for="university">University</label>
    <input type="text" id="university" name="university">
    <label for="date">Date</label>
    <input type="date" id="date" name="date">
  `;
  educationContainer.insertBefore(educationElement, addEducationButton);
}

function addExperience() {
  const experienceElement = document.createElement('div');
  experienceElement.classList.add('experience');
  experienceElement.innerHTML = `
    <label for="position">Position</label>
    <input type="text" id="position" name="position">
    <label for="company">Company</label>
    <input type="text" id="company" name="company">
    <label for="date">Date</label>
    <input type="date" id="date" name="date">
  `;
  experienceContainer.insertBefore(experienceElement, addExperienceButton);
}
