<template>
    <li>
        {{album.title}}
        <Carousel v-bind:album="album"/>
    </li>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: 'AlbumItem',
    components: {
        Carousel,
    },
    props: {
        album: {
            type: Object || Array,
        }
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

</style>