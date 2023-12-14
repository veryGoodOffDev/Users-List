<template>
    <ul>
         <!-- <Carousel /> -->
        
        <PostItem
            v-for="post of posts"
            v-bind:post="post"
            :key="post.id"
        />
       
        
    </ul>
</template>

<script>
// import Carousel from './Carousel.vue';
import PostItem from './PostItem.vue';
export default {
    name: 'PostList',
    props:['posts', 'albums'],
    components: {
        PostItem,
        // Carousel,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import './postlist.scss'
</style>