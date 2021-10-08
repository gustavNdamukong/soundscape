# soundscape A social music-sharing app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

* Features:
    * Built in Vue.js 3, using the Composition API 
    * Use is made of composables (functions), which are kept separate & imported into components
    * Users can sign up
    * Users can logout
    * Users can view all playlists posted by all users
    * Users can view only their playlists
    * View the details of a playlist including all songs within the playlist
    * A user can create a playlist and upload images to it
    * A user can add songs to a playlist 
    * Users can delete their own playlists
    * Users can delete songs within their own playlists
    * Users cannot delete playlists/songs not owned by them
    * Users' details and playlists are stored on Firebase Database
    * All playlist images are uploaded to Firestore Storage
    * Adequate security rules implemented on Firebase Database & Storage services to prevent unauthorised access both at user and domain levels
    * Database query obtimisation through indexing
    * Periodical unsubscription from real-time DB listeners whenever dependent components onmount, to minimise number of requests.

    ![Soundscape - social music-sharing app](https://github.com/gustavNdamukong/soundscape/blob/main/public/soundscape1.png?raw=true)

    ![Soundscape - social music-sharing app](https://github.com/gustavNdamukong/soundscape/blob/main/public/soundscape2.png?raw=true)




