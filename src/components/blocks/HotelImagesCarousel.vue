<template>
    <div>
      <el-carousel trigger="click" height="150px" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../../assets/logo.png">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'hotel-images-carousel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
