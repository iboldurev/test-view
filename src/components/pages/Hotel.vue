<template>
    <div>
      <nav-bar />
      <hotel-images-carousel />
      <p>etc...</p>
    </div>
</template>

<script>
import NavBar from '../blocks/NavBar'
import HotelImagesCarousel from '../blocks/HotelImagesCarousel'

export default {
  components: {
    HotelImagesCarousel,
    NavBar
  },
  name: 'Hotel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
