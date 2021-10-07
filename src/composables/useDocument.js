import { ref } from 'vue'
import { db } from '../firebase/config'

const useDocument = (collection, id) => {

  const error = ref(null)
  const isPending = ref(false)
  let docRef = db.collection(collection).doc(id)

  const deleteDoc = async () => {
    // we about to start delete process, so set isPending to true  
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.delete()
      // the delete action is done, so return isPending to false
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not delete the document'
    }
  }

  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }

  return { error, isPending, deleteDoc, updateDoc }

}

export default useDocument