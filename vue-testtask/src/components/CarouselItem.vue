<template>
  <carousel :autoplay="false" :nav="false" :dots="false">
    <!-- <button @click="() => console.log('click') ">Click</button> -->
    <CarouselItemSlide
      v-for="img of this.filteredPhotos(album.id)"
      :key="img.id"
      v-bind:img="img"

    />

    <!-- <img 
     :src="photo.thumbnailUrl" /> -->
    <!-- <img
      src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    /> -->

    <!-- <h1>{{album.title}}</h1> -->
    <!-- <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
     <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
     <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
     <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""> -->
  </carousel>
</template>

<script>
import CarouselItemSlide from "./CarouselItemSlide.vue";
import carousel from "vue-owl-carousel";
import { mapGetters } from "vuex";
export default {
  name: "CarouselItem",
  props:{
    photos:{
      type:Object||Array
    }, 
    album:{
      type:Object||Array
    }
  },

  computed:{
    ...mapGetters(["getAllPhotos", "filteredPhotos"]),
    // filteredPhotos() {
    //   return this.photos[1]
    // }
  },
  methods:{
    // getPhotos(id) {
    //   this.filteredPhotos(id)
    // }
  },

  mounted() {
    // this.fetchPhotos(this.albumId)
  },
  components: {
    CarouselItemSlide,
    carousel,
  },
//   props: {
//     photos: {
//       type: Array,
//     },
//   },

  data() {

    return {
        // photos:this.$store.getters.getAllPhotos,
      //   photos: [
      //     {
      //       id: 1,
      //       url: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     },
      //     {
      //       id: 2,
      //       url: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     },
      //     {
      //       id: 3,
      //       url: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     },
      //     {
      //       id: 4,
      //       url: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      //     },
      //   ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
