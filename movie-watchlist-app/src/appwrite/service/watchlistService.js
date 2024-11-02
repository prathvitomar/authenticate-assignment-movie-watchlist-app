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

  async addToWatchlist({ user_id, Title, Year, imdbID, Type, Poster }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWatchlistId,
        ID.unique(),
        {
          user_id,
          Title,
          Year,
          imdbID,
          Type,
          Poster,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: Add to Watchlist :: error", error);
      return false; 
    }
  }

  async removeFromWatchlist(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWatchlistId,
        id
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: Remove from Watchlist :: error", error);
      return false;
    }
  }

  async getMovieFromWatchList(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWatchlistId,
        id
      );
    } catch (error) {
      console.log(
        "Appwrite service :: Get Movie Details from Watchlist :: error",
        error
      );
      return false;
    }
  }

  async getAllWatchList() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteWatchlistId
      );
    } catch (error) {
      console.log(
        "Appwrite service :: Get All WatchList Movies :: error",
        error
      );
      return false;
    }
  }
}

const watchlistService = new Service();
export default watchlistService;
