import { projectStorage } from '../firebase/config'
import { ref } from "vue"
import getUser from "./getUser"

const { user } = getUser()

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = projectStorage.ref(filePath.value)

    try {
      const res = await storageRef.put(file)
      // we need to await the returned img url after img is saved as this is an async request & we are 
      // storing here the promise of it. Hence we put 'await' in front of the call to getDownloadURL() below
      url.value = await res.ref.getDownloadURL()
    } catch (err) {
      error.value = err
    }
  }

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    try {
      await storageRef.delete()
    } catch (err) {
      error.value = err
    }
  }

  return { uploadImage, deleteImage, url, filePath, error }
}

export default useStorage;