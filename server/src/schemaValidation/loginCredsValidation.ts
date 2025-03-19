import { error } from "console";
import { z } from "zod"

//-----------------ZOD-------------------------//
const forbiddenCharacters = /['";\-#/\\*%_()=+|]/;
 const signupSchema = z.object({
    username : z
        .string()
        .min(3, {message : "Name must be at least 3 characters long"})
        .max(100, {message : "Name must be at most 50 characters long"})
        .regex(/^[a-zA_Z0-9]+$/, "Username must only contain letters and numbers")
        .refine((val) => !forbiddenCharacters.test(val), {
            message: "Username contains invalid characters",
          }),
    
    password : z
        .string()
        .min(8, {message : "Password must contain at least 8 characters"})
        .max(255, {message : "Password must contain at least 8 characters"})
        .refine((val) => !forbiddenCharacters.test(val), {
            message: "Password contains invalid characters",
          }),
})

//--------------------RAW Input Validations-----------------------------//
// const signingSchema = (username: string, password : string) => {
//     const errors : string[] = [];

//     if(username.length < 3) {
//         errors.push("Username must be at least 3 characters long")
//     }
//     if(username.length > 100) {
//         errors.push("Username must be at most 100 characters long")
//     }
//     if(!/^[a-zA_Z0-9]+$/.test(username)) {
//         errors.push("Username must only contain letters and numbers")
//     }
//     if(forbiddenCharacters.test(username)) {
//         errors.push("Username contains invalid characters")
//     }


//     if(password.length < 8) {
//         errors.push("password must be at least 8 characters long")
//     }
//     if(password.length > 255) {
//         errors.push("password must be at most 255 characters long")
//     }
//     if(forbiddenCharacters.test(password)) {
//         errors.push("password contains invalid characters")
//     }
    
//     return {
//         success : errors.length === 0,
//         errors
//     }
// }

// export default signingSchema
export default signupSchema
//---------------------------------------------//