
const generateMarkDown = (userAns) => {
    return `

    # ${userAns.project}

    ![license](https://img.shields.io/badge/LICENSE-${userAns.license}-BLUE)
    

    ## Description:
    ${userAns.description}


    ## Table of Contents 
  
    * Installation

    * Usage


    * Contribution


    * Tests


    * Questions
    
    ## Installation
    ${userAns.installations}

    ## Usage
    ${userAns.usage}

    ## Contribution
    ${userAns.contributing}

    ## Tests
    ${userAns.test}

    ## Questions
    ${userAns.email}
    
    
    `;

};
module.exports = generateMarkDown;