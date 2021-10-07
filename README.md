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
    * Users can sign up
    * Users can logout
    * Users can view all playlists posted by al users
    * Users can view only their playlists
    * A user can view the details of a playlist including all songs within the playlist
    * A user can create a playlist and upload images for it
    * A user can create songs under a playlist 
    * Users can delete playlists created by them
    * Users can delete songs within playlists created by them
    * Users cannot delete playlists/songs not created by themselves
    * All Users' details stored on Firebase Database
    * User's playlist image files stored on Firestore Storage
    * Adequate security rules implemented on Firebase Database & Storage services to prevent unauthorised resource access both at user and domain levels
    * Database query obtimisation through indexing
    * Periodical unsubscription from real-time DB listeners whenever dependent components onmount, to minimise high request numbers.

    ![Soundscape - social music-sharing app](https://github.com/gustavNdamukong/soundscape/blob/main/soundscape1.png?raw=true)

    ![Soundscape - social music-sharing app](https://github.com/gustavNdamukong/soundscape/blob/main/soundscape2.png?raw=true)




