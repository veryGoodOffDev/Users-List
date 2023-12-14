<template>
    <div >
        <h1>
            User c id {{$route.params.id}}
        </h1>
        <AlbumList v-bind:albums="albums"/>
        <PostList v-bind:posts="posts"/>
    </div>

</template>

<script>
import PostList from '../components/PostList.vue';
import AlbumList from '../components/AlbumList.vue';
import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
    name: 'UserView',
    components: {
        PostList,
        AlbumList,
    },

    data() {
        return {
            posts:[],
            albums:[],
            id:this.$route.params.id
        };
    },
   
    beforeMount() {
         
    },
    created() {
        
    },
    computed: mapGetters(["getStatus"]),

   async mounted() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.id)
        const posts = await res.data
        this.posts = posts
        const nextres = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + this.id)
        const albums = await nextres.data
        this.albums = albums
       
    },


  
};
</script>

<style lang="scss" scoped>

</style>