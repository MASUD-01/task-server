//username: task-app
//pass:DndWuKhdx4QriLQq

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
// require('dotenv').config();
const ObjectId = require('mongodb').ObjectId

//middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://task-app:DndWuKhdx4QriLQq@cluster0.ddxed.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const userCollection = client.db('taskTodo').collection('todo');
        const taskCompleted = client.db('taskTodo').collection('completed');

        app.get('/task', async (req, res) => {
            const users = await userCollection.find().toArray();
            res.send(users);
        });
        app.get('/completed', async (req, res) => {
            const users = await taskCompleted.find().toArray();
            res.send(users);
        });

        app.post('/task', async (req, res) => {
            const product = req.body;
            const result = await userCollection.insertOne(product);
            console.log(result)
            res.send(result);
        })
        app.post('/completed', async (req, res) => {
            const product = req.body;
            const result = await taskCompleted.insertOne(product);
            console.log(result)
            res.send(result);
        })

        app.delete('/task/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: ObjectId(id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
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