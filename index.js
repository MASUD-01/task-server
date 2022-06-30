//username: task-app
//pass:DndWuKhdx4QriLQq

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
// require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://task-app:DndWuKhdx4QriLQq@cluster0.ddxed.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const userCollection = client.db('taskTodo').collection('todo');

        app.get('/task', async (req, res) => {
            const users = await userCollection.find().toArray();
            res.send(users);
        });

        app.post('/task', async (req, res) => {
            const product = req.body;
            const result = await userCollection.insertOne(product);
            console.log(result)
            res.send(result);
        })
    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World! 5hhh')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})