
// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent page reload

  // Collect Input values
  const profilePicInput = document.getElementById('Profilepicture') as HTMLInputElement;
  const objective = (document.getElementById('objective') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const FatherName = (document.getElementById('FaterName') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const Qualification = (document.getElementById('Qualification') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Check if a profile picture is selected
  let profilePicture = '';
  const profilePicFile = profilePicInput.files?.[0];

  if (profilePicFile) {
    // Create a FileReader to convert the image to a base24 string
    const reader = new FileReader();
    reader.onloadend = () => {
      // Use the result from FileReader to set the base64 image
      profilePicture = reader.result as string;

      // Generate the resume content dynamically after the image is loaded
      generateResume();
    };

    // Read the image file as base64
    reader.readAsDataURL(profilePicFile);
  } else {
    // If no image is selected, proceed without a profile picture
    generateResume();
  }

  // Function to generate the resume HTML
  function generateResume() {
    // Generate the resume HTML content
    const resumeHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div class="resume-container">
          <header class="resume-header">
            <h2 class="resume-title"><b>Resume</b></h2>
             <!-- Profile Picture Section -->
          ${profilePicture ? `
            <section class="Profilepicture">
            <img src="${profilePicture}" alt="Profile Picture"  class="Profilepicture">    

            </section>
          ` : ''}
      
          </header>
          <!-- Personal Information Section -->
          <section class="personal-info">
            <h3><b>Personal Information</b></h3>
            <div class="info-item">
              <label for="objective">Objective:</label>
              <span id="objective">${objective}</span>
            </div>
            <div class="info-item">
              <label for="name">Name:</label>
              <span id="name">${name}</span>
            </div>
            <div class="info-item">
              <label for="fatherName">Father's Name:</label>
              <span  id="fatherName">${FatherName}</span>
            </div>
            <div class="info-item">
              <label for="contact">Contact:</label>
              <span  id="contact">${phone}</span>
            </div>
            <div class="info-item">
              <label for="cnic">CNIC:</label>
              <span id="cnic">${cnic}</span>
            </div>
            <div class="info-item">
              <label for="email">Email:</label>
              <span  id="email">${email}</span>
            </div>
            <div class="info-item">
              <label for="address">Address:</label>
              <span id="address">${address}</span>
            </div>
          </section>

          <!-- Education Section -->
          <section class="education">
            <h3><b>Education</b></h3>
            <div class="info-item">
              <span >${education} ${Qualification}</span>
            </div>
          </section>

          <!-- Experience Section -->
          <section class="experience">
            <h3><b>Experience</b></h3>
            <div class="info-item">
              <span >${experience}</span>
            </div>
          </section>

          <!-- Skills Section -->
          <section class="skills">
            <h3><b>Skills</b></h3>
            <div class="info-item">
              <span >${skills}</span>
            </div>
          </section>
        </div>
      </body>
      </html>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
      resumeDisplayElement.innerHTML = resumeHTML;
    } else {
      console.error('The resume display element is missing.');
    }
  }
});