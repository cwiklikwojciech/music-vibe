import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getDocument = (collection, id) => {
    const document = ref(null);
    const error = ref(null);

    let documentRef = projectFirestore.collection(collection).doc(id);

    const unsub = documentRef.onSnapshot((doc) => {
        if(doc.data()){
            document.value = {...doc.data(), id: doc.id}
        }else{
            error.value = 'that document does not exist';
        }
    }, (err) => {
        console.error(err.message);
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { document, error };
}

export default getDocument