import envConfig from "../envConfig/envConfig";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteUrl)
      .setProject(envConfig.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        console.log("User Account created ::::::", userAccount);
        //There is also an improvement for later we can directly login the user after the account creation
        return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email , password}){
    try {
        return await this.account.createEmailPasswordSession(email , password)
    } catch (error) {
        throw error
    }
  }

  async logOut(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }

  async getCurrentUser(){
    try {
        return await this.account.get()
    } catch (error) {
        throw error
    }
    //Here Chai or code return a null 
  }

  
}

const authServices = new AuthServices();
export default authServices;
