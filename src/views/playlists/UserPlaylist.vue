<template>
  <div class="user-playlist">
    <h2>My playlist</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
  </div>
  <router-link :to="{name : 'CreatePlaylist'}" class="btn"> Create a new playlist</router-link>
</template>

<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser';
import ListView from '@/components/ListView.vue';

export default {
  components: {ListView},
  setup(){
    const { user } = getUser();
    const { documents: playlists } = getCollection(
      'playlists',
      ['usedId', '==', user.value.uid]
    );

    console.log(playlists);

    return { playlists }
  }
}
</script>

<style>

</style>