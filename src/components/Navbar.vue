<template>
  <div class="navbar">
    <nav>
        <img src="../assets/vibe-Logo.jpg" alt="">
        <h1><router-link :to="{name: 'Home'}"> Music Vibe</router-link></h1>
        <div class="links">
            <div v-if="user">
                <button v-if="user" @click="handleLogout">Log out</button>
            </div>
            <div v-else>
                <router-link v-if="!user"  class="btn" :to="{ name : 'Signup'}">Signup</router-link>
                <router-link v-if="!user" class="btn" :to="{ name : 'Login'}">Login</router-link>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
    setup(){
        const { logout, error, isPending } = useLogout()
        const router = useRouter();

        const { user } = getUser();
        

        const handleLogout = async () =>{
            await logout();
            console.log("User logger out");
            router.push({name: 'Signup'});
        }

        return {handleLogout, isPending, user }
    }
}
</script>

<style scoped>
    .navbar {
       padding: 16px 10px;
       margin-bottom: 60px;
       background: white;
    }
    nav{
        display: flex;
        align-items:center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1{
        margin-left: 20px;
    }
    nav .links{
        margin-left: auto;
    }
    nav .links a, button{
        margin-left: 16px;
        font-size: 14px;
    }
    nav img{
        max-height: 60px;
    }
</style>