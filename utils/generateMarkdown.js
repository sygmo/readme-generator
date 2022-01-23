// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Mozilla":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return ''
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return `[Apache License 2.0](${renderLicenseLink(license)})`;
    case "GPL":
      return `[GNU General Public License (GPL)](${renderLicenseLink(license)})`;
    case "MIT":
      return `[MIT License](${renderLicenseLink(license)})`;
    case "Mozilla":
      return `[Mozilla Public License 2.0](${renderLicenseLink(license)})`;
    default:
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
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
  
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
