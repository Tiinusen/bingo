export default {
    data(){
        return {
            ApplicationID: process.env.VUE_APP_GOOGLE_CAST_APPLICATION_ID || ''
        }
    },
};