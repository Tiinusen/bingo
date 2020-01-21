<template>
  <div id="app">
    <google-cast-button />
    <input :value="text" @input="updateText" />
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
  methods: {
    updateText(e) {
      this.$store.dispatch("updateText", e.target.value);
    }
  },
  created() {
    window["__onGCastApiAvailable"] = isAvailable => {
      if (isAvailable) {
        let instance = cast.framework.CastContext.getInstance();
        instance.setOptions({
          receiverApplicationId: this.ApplicationID,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });
        this.$store.dispatch("initializeCast", {
          castInstance: instance,
          castType: "Sender"
        });
      }
    };
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
