const conf = {
    moviesApiKey : String(import.meta.env.VITE_API_KEY),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteWatchlistId : String(import.meta.env.VITE_APPWRITE_WATCHLIST_ID),
    appwriteSearchHistoryId : String(import.meta.env.VITE_APPWRITE_SEARCH_HISTORY_ID),
}

export default conf