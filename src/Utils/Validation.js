export const CheckValidation = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters long, with one uppercase, one lowercase, one number, and one special character.";
  
    return null;
  };
  