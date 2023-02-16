const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')
const findOrCreate = require('mongoose-findorcreate')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    state: {
        type: Boolean,
        default: true,
    },
    cart: [{
        _id: {type: Schema.Types.ObjectId, ref: "Product"},
        price: Number,
        title: String,
        amount: {type: Number, default: 1}
    }],
    history: [{type: Schema.Types.ObjectId, ref: "History"}]
})

UserSchema.pre("save", async function (next){
    if(this.password){
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
    }
    next()
})

UserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

UserSchema.plugin(findOrCreate)

module.exports = model("User", UserSchema)