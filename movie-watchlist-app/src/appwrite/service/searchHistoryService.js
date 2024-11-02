import conf from "../conf/conf.js";
import { Client, ID, Databases } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async addToSearchHistory({ searchTerm, timestamp }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSearchHistoryId,
        ID.unique(),
        {
          searchTerm,
          timestamp,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: Add to Search History :: error", error);
      return false;
    }
  }

  async getAllSearchHistory() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteSearchHistoryId
      );
    } catch (error) {
      console.log("Appwrite service :: Get All Search History :: error", error);
      return false;
    }
  }

  async deleteAllSearchHistory() {
    try {
      let hasMore = true;
      while (hasMore) {
        const documents = await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteSearchHistoryId,
          { limit: 25 }
        );
        for (const document of documents.documents) {
          await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteSearchHistoryId,
            document.$id
          );
        }
        hasMore = documents.documents.length > 0;
      }

      console.log("All search history deleted successfully!");
      return true;
    } catch (error) {
      console.log(
        "Appwrite service :: Deleting All Search History :: error",
        error
      );
      return false;
    }
  }
}

const searchHistoryService = new Service();
export default searchHistoryService;
