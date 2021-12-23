const { connect } = require("mongoose")

const mongoLocalURI = "mongodb://localhost:27017/dxcDB";
const mongoCloudURI = "mongodb+srv://scott:MrIXpBuTz4KbkeVj@cluster0.e9xsq.mongodb.net/dxcDB?retryWrites=true&w=majority"

connect(mongoCloudURI)
    .then(conn => {
        console.log("Mongo Connected...")
    })
    .catch(err => {
        console.log(err)
        process.exit(1);
    })
