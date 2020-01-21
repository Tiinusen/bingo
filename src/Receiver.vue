<template>
  <div id="app">
    This is the Family Bingo Receiver App
    <br />
    {{ text }}
  </div>
</template>

<script>
import GoogleCastButton from "@/components/GoogleCastButton.vue";
import GoogleCastConfig from "@/mixins/GoogleCastConfig";
import { mapState } from "vuex";

export default {
  name: "app",
  mixins: [GoogleCastConfig],
  components: {
    GoogleCastButton
  },
  computed: {
    ...mapState({
      text: state => state.text
    })
  },
  created() {
    this.$store.dispatch("initializeCast", {
      castInstance: cast.framework.CastReceiverContext.getInstance(),
      castType: "Receiver"
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
