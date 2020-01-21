export default {
    data(){
        return {
            ApplicationID: process.env.VUE_APP_GOOGLE_CAST_APPLICATION_ID || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
        }
    },
};