import userModel from '../models/user.model.js';


const createUser = async({
    fullName, email, password
})=>{
    if(!fullName || !email || !password){
        throw new Error('Please enter all fields');
    }
    const user = userModel.create({
        fullName,
        email,
        password
    })
    

    return user;
}

export default {
    createUser
}
