import { instance } from "./api.config.js";

const AuthService = {

    register (email, password) {
        return instance.post("/register", {email, password})
    },
    
    refreshToken() {
        return instance.post("/login",{email, password});
    },
    
    logout() {
        return instance.post("/logout")
    }
}

export default AuthService