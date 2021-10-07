<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">
        <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a new playlist</router-link>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView.vue'
export default {
    components: { ListView },
  setup() {
    const { user } = getUser()
    // pass to getCollection the target collection, and an optional 2nd arg, any query you want to run on the 
    // collection. In this case we only want to garb playlists of the given userId
    const { documents: playlists } = getCollection(
      'playlists', 
      ['userId', '==', user.value.uid]
    )
    // console.log(playlists)
    return { playlists }
  }
}
</script>

<style scoped>
  h2 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--secondary)
  }
  .btn {
    margin-top: 20px;
  }
</style>