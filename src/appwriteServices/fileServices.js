import envConfig from "../envConfig/envConfig";
import { Account, Storage, Databases, Client, ID } from "appwrite";

export class FileServices {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteUrl)
      .setProject(envConfig.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        envConfig.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(envConfig.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(envConfig.appwriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}


const fileServices = new FileServices()

export default fileServices