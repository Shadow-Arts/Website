const exp=require("express")
const { ObjectId } = require("mongodb")
const verifyToken = require("../Middlewares/verifyToken");

const userApp = exp.Router()

const {createAccount,login} = require('./Util')
let expressAsyncHandler = require("express-async-handler")

//middleware
let usersCollection 
let artsCollection
// let ordersCollection
let eventsCollection
let coursesCollection
let messagesCollection

userApp.use((req,res,next)=>{
    usersCollection = req.app.get('usersCollection')
    artsCollection = req.app.get('artsCollection')
    // ordersCollection = req.app.get('ordersCollection')
    eventsCollection = req.app.get('eventsCollection')
    coursesCollection = req.app.get('coursesCollection')
    messagesCollection = req.app.get('messagesCollection')
    next()
})
// Sign Up (Register a new user)
userApp.post("/auth/signup", expressAsyncHandler(createAccount));

// Login (Sign in (Authenticate user))
userApp.post("/auth/login", expressAsyncHandler(login));

// User Routes

// Get user profile
userApp.get("/users/:username", verifyToken , expressAsyncHandler(async(req, res)=>{
    const profile = await usersCollection.findOne({username:req.params.username})
    res.send({message:'User\'s Profile',payload:profile})
}));

// Update user profile
userApp.put("/users/:username", verifyToken ,expressAsyncHandler( async(req, res) => {
    const updatedProfile = req.body
    await usersCollection.updateOne({ username: req.params.username },{$set:{...updatedProfile}})
    res.send({message:"Profile Changes Successful"})
}));

// // Get user’s cart
// userApp.get("/users/cart", verifyToken ,expressAsyncHandler( async(req, res) => {
//     const user = await usersCollection.find({username:req.body.username}).toArray()
//     res.send({message:'User\'s Cart',payload:user.cart})
// }));

// // Add item to cart 
// userApp.post("/users/cart", verifyToken ,expressAsyncHandler( async(req, res) => {
//     const { username, artId , quantity } = req.body
//     await usersCollection.updateOne({ username },{$addToSet: {cart: { artId, quantity: quantity || 1 },},});
//     res.send({message:'Added Item to cart'})
// }));

// // Remove item from cart(soft delete)
// userApp.put("/users/cart/:id", verifyToken ,expressAsyncHandler( async(req, res) => {
//     const art = req.body;
//     await usersCollection.updateOne({username : art.username ,"cart._id":new ObjectId(req.params.id)},{$set:{"cart.$.deleted" : true}})
//     res.send({message:'Removed item from cart'})
// }));

// // Get user’s order history
// userApp.get("/users/orders", verifyToken ,expressAsyncHandler( async(req, res) => {

// }));

// // Order Routes
// userApp.post("/orders", verifyToken ,expressAsyncHandler( async(req, res) => {}));
// userApp.get("/orders/:id", verifyToken ,expressAsyncHandler( async(req, res) => {})); // Track Order

// Artwork Routes

// Get Gallery
userApp.get("/gallery",expressAsyncHandler( async(req, res) => {
    const gallery = await artsCollection.find({deleted:false}).toArray()
    res.send({message:'Retreived Gallery',payload:gallery})
}));

// Get single artwork details
userApp.get("/gallery/:id",expressAsyncHandler( async(req, res) => {
    const art = await artsCollection.findOne({_id:new ObjectId(req.params.id)})
    res.send({message:'Art',payload:art})
}));

// Like an artwork
userApp.put("/gallery/:id/like", verifyToken ,expressAsyncHandler( async(req, res) => {
    const art = req.body
    const updated = art.like ? {$inc : {likes : 1}} : {$inc : {likes : -1}}
    await artsCollection.updateOne({_id:new ObjectId(req.params.id)},updated)
    res.send({message: art.like ? 'Liked the Art' : 'Unliked'})
}));

// Events Routes

// Get all events
userApp.get("/events",expressAsyncHandler(async (req, res) => {
    const currentDate = new Date();
    const events = await eventsCollection.find({ deleted: false }).toArray();

    // events based on date
    const pastEvents = events.filter(event => new Date(event.endDate) < currentDate);
    const currentEvents = events.filter(event => new Date(event.startDate) <= currentDate && new Date(event.endDate) >= currentDate);
    const upcomingEvents = events.filter(event => new Date(event.startDate) > currentDate);

    res.send({message: "All Events",pastEvents,currentEvents,upcomingEvents});
}));


// Get event details
userApp.get("/events/:id",expressAsyncHandler( async(req, res) => {
    const event = await eventsCollection.findOne({_id:new ObjectId(req.params.id)})
    res.send({message:'Event details',payload:event})
}));

// Courses Routes

// Get all courses
userApp.get("/courses",expressAsyncHandler( async(req, res) => {
    const courses = await coursesCollection.find({deleted:false}).toArray()
    res.send({message:'All courses',payload:courses})
}));

// Get course details
userApp.get("/courses/:id",expressAsyncHandler( async(req, res) => {
    const course = await coursesCollection.findOne({_id:new ObjectId(req.params.id)})
    res.send({message:'Course details',payload:course})
}));

// Help & Collaboration Routes

// Submit help requests
userApp.post("/helpQueries",expressAsyncHandler( async(req, res) => {
    const message = req.body
    await messagesCollection.insertOne(message) 
    res.send({message:'Message sent successfully'})
}));


module.exports = userApp