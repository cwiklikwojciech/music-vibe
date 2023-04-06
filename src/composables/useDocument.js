import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const useDocument = (collection, id) => {
    let error = ref(null);
    let isPending = ref(null);

    let docRef = projectFirestore.collection(collection).doc(id);

    const deleteDoc = async () => {
        isPending.value = true;
        error.value = null;

        try{
            const res = await docRef.delete();
            isPending.value = false;
            return res;
        } catch(err){
            console.log(err.message);
            isPending.value = false;
            error.value = "could not delete document"
        }
    }

    const updateDoc = async (updates) => {
        isPending.value = true;
        error.value = null;

        try{
            const res = await docRef.update(updates);
            isPending.value = false;
            return res;
        } catch(err){
            console.log(err.message);
            isPending.value = false;
            error.value = "could not update document"
        }
    }

    return { error, isPending, deleteDoc, updateDoc };
}

export default useDocument