function Validation(values) {
    let error = {
        Username: '',
        Email: '',
        Password: '',
        Cpassword: ''
    }
    const username_pattern = /^[a-zA-Z0-9]+$/;
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password_pattern = /^[A-Za-z0-9]\w{7,14}$/;

    if (values.Username === "") {
        error.Username = "Username should not be empty";
    }
    else if (!username_pattern.test(values.Username)) {
        error.Username = "Username is incorrect";
    }
    else {
        error.Username = ""
    }

    if (values.Email === "") {
        error.Email = "Email should not be empty";
    }
    else if (!email_pattern.test(values.Email)) {
        error.Email = "Email is incorrect";
    }
    else {
        error.Email = ""
    }

    if (values.Password === "") {
        error.Password = "Password should not be empty";
    }
    else if (!password_pattern.test(values.Password)) {
        error.Password = "Password is incorrect";
    }
    else {
        error.Password = ""
    }
    // console.log(error.Cpassword)
    // console.log(error.Password);
    // if (values.Password != values.Cpassword) {
    //     error.Cpassword = "Confirm Password not match";
    // }
    // else 
    // if (values.Cpassword === "")
    // {
    //     error.Cpassword = "Confirm Password should not be empty";
    // }
    
    return error;
}
export default Validation;