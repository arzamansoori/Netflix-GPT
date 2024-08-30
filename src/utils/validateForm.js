export const validateFormFields = (email, password, fullName) => {

        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

        if(!isNameValid) return "Full name is not valid";
        if(!isEmailValid) return "Email is not valid";
        if(!isPasswordValid) return "Password is not valid";

        return null;

};
