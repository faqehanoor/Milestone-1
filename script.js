// document.getElementById('resumeForm')?.addEventListener('submit', function(event){
//     event.preventDefault();
var _a;
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillsElement = document.getElementById('skills') as HTMLInputElement;
// if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
//     const name = nameElement.value;
//     const Email = emailElement.value;
//     const Phone = phoneElement.value;
//     const  Education = educationElement.value;
//     const  Experience = experienceElement.value;
//     const skills = skillsElement.value;
// }
// const resumeOutput = `
// <h2>RESUME</h2>
// <p><strong>name: </strong> ${name}</p>
// <p><strong>Email: </strong> ${email}</p>
// <p><strong>phone: </strong> ${phone} </p>
// <h3>Education</h3>
// <p>${educationElement}</p>
// <h3>Experience</h3>
// <p>${experienceElement}</p>
// <h3>skills</h3>
// <p>${skillsElement}</p>
// `;
//  const resumeOutputElement = document.getElementById('resumeOutput')
//  if(resumeOutputElement){
//     resumeOutputElement.innerHTML = resumeOutput
//  } else {
//     console.error("the resume output element are mising");
// }else{
//     console.error("One or more ouput is mising");
// }
// });
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all fields exist and are filled
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Generate resume output
        var resumeOutput = "\n            <h2>RESUME</h2>\n            <p><strong>Name: </strong> ".concat(name_1, "</p>\n            <p><strong>Email: </strong> ").concat(email, "</p>\n            <p><strong>Phone: </strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the resume output in the 'resumeOutput' div
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing.");
        }
    }
    else {
        console.error("One or more input fields are missing.");
    }
});
