import { defineStore } from "pinia";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword } from "firebase/auth"; 

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: null,
        };
    },
    actions:{
        async register(email, password){
            try{
            await createUserWithEmailAndPassword(auth, email, password);
            } catch(error){
                switch (error.code){
                    case "auth/email-already-in use":
                        alert("Email already in use");
                        break;
                    case "auth/invalid-email":
                        alert("Invalid email"); 
                        break;   
                }
                return;
            }
            this.user =auth.currentUser;
        }
    }
    
});