// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  ## Installation
  Run the following command:
  ~~~
  ${data.installation}
  ~~~

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Please contact me with any questions at ${data.email}.
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
