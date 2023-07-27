import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://ivana:arsenal213@alura.gsjy7ev.mongodb.net/alura-node')

let db = mongoose.connection

export default db