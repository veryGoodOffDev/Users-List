<template>
  <div>
    <CarouselItem v-bind:photos="this.getAllPhotos" v-bind:album="album"/>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import { mapGetters, mapActions } from "vuex";
// import axios from 'axios'
export default {
  name: "CarouselVue.vue",
    data() {
    return {
      // albumId: this.album.id,
    };
  },
  computed: mapGetters(["getAllPhotos"]),
  methods: {
    ...mapActions(["fetchPhotos"])
    
    },
  props: ["album"],
  components: {
    CarouselItem,
  },
  mounted() {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + this.albumId + "&_limit=5")
    // const photos = await res.data
    // this.photos = photos
    // console.log(this.photos)
    this.fetchPhotos(this.album.id);
  },

};
</script>
