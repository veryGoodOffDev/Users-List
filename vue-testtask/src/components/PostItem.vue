<template>
    <li>
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </li>
</template>

<script>
export default {
    name: 'PostItem',
    props:{
        post:{
            type:Object||Array,
            required:true,
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