<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h4>Create a New Playlist</h4>
      <input type="text" required placeholder="Playlist title" v-model="title">
      <textarea required placeholder="Playlist description..." v-model="description"></textarea>
      <!-- upload playlist image -->
      <label>Upload Playlist Cover Image</label>
      <input type="file" @change="handleChange">
      <div class="error">{{ fileError }}</div>

      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving...</button>
      <router-link :to="{ name: 'UserPlaylists' }" class="btn cancel">Cancel</router-link>
    </form>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from "@/composables/getUser"
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const { filePath, url, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('playlists')
    const { user } = getUser()

    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const isPending = ref(false)

    const handleSubmit = async () => {
        // set isPending to true
        isPending.value = true
        //only allow the form to be submitted if they have uploaded a file
        if (file.value) {
            // save image first coz we will need the URL of the saved img to save on the doc details
            await uploadImage(file.value)
            console.log('image uploaded: ', url.value)
            const res = await addDoc({
                title: title.value,
                description: description.value,
                userId: user.value.uid,
                userName: user.value.displayName,
                coverUrl: url.value,
                filePath: filePath.value,
                songs: [],
                createdAt: timestamp()
            })
            isPending.value = false
            if (!error.value) {
                router.push({ name: 'PlaylistDetails', params: { id: res.id }})
            }
        }
    }

    // allowed file types
    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
        const selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            file.value = selected
            fileError.value = null
        } else {
            file.value = null
            fileError.value = 'Please select an image file (png or jpg)'
        }

    }
    
    return { title, description, handleSubmit, handleChange, fileError, isPending }
  }
}
</script>

<style>
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
  .cancel {
    margin-left: 10px;
  }
</style>