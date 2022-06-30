//username: task-app
//pass:IWUVycCXUgujYbeS
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
// require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://task-app:<IWUVycCXUgujYbeS>@cluster0.ddxed.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

async function run() {
    try {
        await client.connect();
        const taskApp = client.db(task_app).collection('task')
    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})