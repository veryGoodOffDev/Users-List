<template>
    <li @click="openUserPage(user.id)">
      {{user.name }}
    </li>
</template>

<script>
export default {
    name: 'UserItem',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    components: {
        
    },

//     data() {
//         return {
//             posts:[]
//         };
//     },

//    async mounted() {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.user.id)
//         const posts = await res.data
//         this.posts = posts

//     },

    methods: {
        openUserPage(id) {
            this.$router.push(`/user/${id}`)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>