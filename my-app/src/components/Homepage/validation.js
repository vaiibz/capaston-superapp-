 const validation = (values) => {

    let errors={};

    if (!values.name){
        errors.name ="Name is required"
    }

    if (!values.username){
        errors.username ="UserName is required"
    }

    if (!values.email){
        errors.email ="Email is required"
         } else if (!values.email.includes('@')) {
           errors.email = "Email is invalid";
         }

    if (!values.mobile){
        errors.mobile =" Contact no is required"
    }

 return errors
}
export default validation 