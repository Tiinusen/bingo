export default {
    created() {
        console.log("created");
    },
    data(){
        return {
            ApplicationID: process.env.GOOGLE_CAST_APPLICATION_ID || ''
        }
    },
    methods: {
        hello: function () {
            console.log("hello", arguments);
        }
    }
};