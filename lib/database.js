const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_NAME } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pjeso.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;

async function connectDB() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('[database] conectada con exito')
        }).catch((e) => {
            console.error('Hubo un error al conectarse con la DB');
            console.error(e);
        });
}

module.exports = connectDB;