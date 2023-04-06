<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add Songs</button>
    <form v-if="showForm" @submit.prevent="handleSunmit">
        <h4>Add a new song</h4>
        <input type="text" placeholder="Song title" required v-model="title">
        <input type="text" placeholder="Artist" required v-model="artist">
        <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useDocument from '@/composables/useDocument';

export default {
    props: ['playlist'],
    setup(props){
        const {error, isPending, updateDoc} = useDocument('playlists', props.playlist.id);

        const title = ref('');
        const artist = ref('');
        const showForm = ref(false);

        const handleSunmit = async () => {
            const newSong = {
                title: title.value,
                artist: artist.value,
                id: Math.floor(Math.random() * 1000000)
            }

            await updateDoc({
                songs: [...props.playlist.songs, newSong]
            })
            title.value = ''
            artist.value = ''
        }

        return { title, artist, showForm, handleSunmit }
    }
}
</script>

<style scoped>
    .add-song{
        text-align: center;
        margin-top: 40px;
    }
    form{
        max-width: 100%;
        text-align: center;
    }
</style>