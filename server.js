import express from "express";
import path from 'path'
import { fileURLToPath } from "url";
import cors from 'cors'

const app = express()
// to allow users to use the api locally
app.use(cors())
// to serve all the static files like main.js and css
app.use(express.static("frontend"))

const PORT = 8000
// to use __dirname since we have to give path like unix
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Procfile must be saved with utf-8 encoding if you're using windows

const arr = {
    'piyush': {
        "id": 1,
        "first_name": "Piyush",
        "last_name": "Gaur",
        "gender": "Male",
        "address": "Ald"
    },
    'gigi': {
        "id": 2,
        "first_name": "Gigi",
        "last_name": "Goldup",
        "gender": "Agender",
        "address": "Verba"
    },
    "darn":
    {
        "id": 3,
        "first_name": "Darn",
        "last_name": "Iglesiaz",
        "gender": "Male",
        "address": "Shitong"
    },
    "charin":
    {
        "id": 4,
        "first_name": "Charin",
        "last_name": "Shapira",
        "gender": "Female",
        "address": "Riangbao"
    },
    "edgar":
    {
        "id": 5,
        "first_name": "Edgar",
        "last_name": "Corbett",
        "gender": "Genderqueer",
        "address": "San Francisco"
    },
    "jamey":
    {
        "id": 6,
        "first_name": "Jamey",
        "last_name": "Brickdale",
        "gender": "Male",
        "address": "Khagrachhari"
    },
    "crista":
    {
        "id": 7,
        "first_name": "Crista",
        "last_name": "Aberhart",
        "gender": "Polygender",
        "address": "Serra da Silveira"
    },
    "electra":
    {
        "id": 8,
        "first_name": "Electra",
        "last_name": "O'Lyhane",
        "gender": "Female",
        "address": "Panamá"
    },
    "jenifer":
    {
        "id": 9,
        "first_name": "Jenifer",
        "last_name": "Adamiak",
        "gender": "Female",
        "address": "Tacoma"
    },
    "unknown":
    {
        "id": 0,
        "first_name": "xx",
        "last_name": "xx",
        "gender": "xx",
        "address": "xx"
    }
}

// get homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend', 'index.html'))
})
// get the names if someone enters directly to url
app.get('/api/:name', (req, res) => {
    const sName = req.params.name.toLowerCase()
    if (arr[sName]) {
        res.json(arr[sName])
    } else {
        res.json(arr['unknown'])
    }
})


// listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`running on ${PORT}`)
})