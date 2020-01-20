<template>
  <div id="app">This is the Family Bingo Receiver App</div>
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
  created() {
    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js"
    );
    document.body.appendChild(script);
    window["__onGCastApiAvailable"] = isAvailable => {
      if (isAvailable) {
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId: this.ApplicationID,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
