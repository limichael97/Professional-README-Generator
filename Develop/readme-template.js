// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    # Your Project Title

    ## Description 
    
    
    ## Table of Contents (Optional)
    
    
    
    ## Installation
    
    
    ## Usage 

    
    
    ## Credits

    
    ## License
    
        
    ## Badges
    
    
    
    
    ## Features
    
    
    
    ## Contributing
    
    
    ## Tests`
  };