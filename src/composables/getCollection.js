import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'

const getCollection = (collection, query) => {

  const documents = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let collectionRef = db.collection(collection)
    .orderBy('createdAt')

    // only append the query to the request if they passed one in (as 2nd arg)
    if (query) {
      collectionRef = collectionRef.where(...query)
    }

  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      doc.data().createdAt && results.push({...doc.data(), id: doc.id})
    });
    
    // update values
    documents.value = results
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents }
}

export default getCollection