export function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).json({ error: err.message }); 
}


export function validateUserData(req, res, next) {
  const { firstName, lastName, password, email, contact } = req.body;

  try {
   
    if (!firstName || !lastName) {
      throw new Error("First name and last name are required.");
    }

    
    if (firstName[0] !== firstName[0].toUpperCase() || lastName[0] !== lastName[0].toUpperCase()) {
      throw new Error("The first letter of both first name and last name must be capitalized.");
    }

    
    const passwordCriteria = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordCriteria.test(password)) {
      throw new Error("Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long.");
    }

  
    if (!email.includes("@")) {
      throw new Error("Invalid email address. It must contain an '@' symbol.");
    }

    if (!contact || contact.length < 10) {
      throw new Error("Phone number must be at least 10 digits long.");
    }

    next(); 

  } catch (err) {
    next(err); 
  }
}
