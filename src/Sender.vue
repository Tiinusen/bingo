<template>
  <div id="app">
    <google-cast-button />
  </div>
</template>

<script>
import GoogleCastButton from "@/components/GoogleCastButton.vue";
import GoogleCastConfig from "@/mixins/GoogleCastConfig";

export default {
  name: "app",
  mixins: [GoogleCastConfig],
  components: {
    GoogleCastButton
  },
  created(){
    this.hello();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
