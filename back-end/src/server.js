import express from 'express';
import path from 'path';
const { MongoClient } = require('mongodb');

async function start(){
        const url = `mongodb://localhost:27017/vue_ecommerce`;
        const client = new MongoClient(url);
        
        await client.connect();
        const db = client.db('vue_ecommerce');

        const app = express();
        app.use(express.json());

        app.use('/images', express.static(path.join(__dirname, '../assets')));

        app.get('/api/products', async(req,res) => {
            const products = await db.collection('products').find({}).toArray();
            res.send(products);
        })

        async function populateCartIds(ids){
            return Promise.all(ids.map(id => db.collection('products').findOne({id})))   

        }

        app.get('/api/users/:userId/cart', async(req,res) => {
            const user = await db.collection('users').findOne({id : req.params.userId});
            const populatedCart = await populateCartIds(user.cartItems)
            res.json(populatedCart)
        })
        app.get('/api/products/:productId', async(req,res) => {
            const productId = req.params.productId;    
            const product = await db.collection('products').findOne({ id : productId });
            res.json(product);
        })

        app.post('/api/users/:userId/cart', async(req,res) => {
            const userId = req.params.userId;
            const productId = req.body.id;
            await db.collection('users').updateOne({id : userId},{
                $addToSet : {cartItems : productId}
            })
            const user = await db.collection('users').findOne({id : req.params.userId});
            const populatedCart = await populateCartIds(user.cartItems)
            res.json(populatedCart)
        })

        app.delete('/api/users/:userId/cart/:productId', async(req,res) => {
            const userId = req.params.userId;
            const productId = req.params.productId;
            await db.collection('users').updateOne({id : userId},{
                $pull : {cartItems : productId}
            })

            const user = await db.collection('users').findOne({id : req.params.userId});
            const populatedCart = await populateCartIds(user.cartItems)
            res.json(populatedCart)

        })
        app.listen(8000, () => {
            console.log("Server is running on port 8000")

        })
}
start();