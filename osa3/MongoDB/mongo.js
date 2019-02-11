const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

if (process.argv.length === 3) {

    console.log('Puhelinluettelo:')

    const password = process.argv[2]

    const url =
        `mongodb+srv://Hegelator:${password}@test-kmsub.mongodb.net/people?retryWrites=true`


    mongoose.connect(url, { useNewUrlParser: true })

    const personSchema = new mongoose.Schema({
        name: String,
        nro: Number,
    })



    const Person = mongoose.model('Person', personSchema)

    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.nro)
        })
        mongoose.connection.close()
    })

} else if (process.argv.length === 4) {
    console.log("Anna tietoina lisättävän henkilön nimi ja puh.nro.")


} else if (process.argv.length === 5) {
    const password = process.argv[2]

    const url =
        `mongodb+srv://Hegelator:${password}@test-kmsub.mongodb.net/people?retryWrites=true`

    mongoose.connect(url, { useNewUrlParser: true })

    const personSchema = new mongoose.Schema({
        name: String,
        nro: Number,
    })

    const Person = mongoose.model('Person', personSchema)

    const person = new Person({
        name: process.argv[3],
        nro: process.argv[4]

    })

    person.save().then(response => {
        console.log(`Lisätään ${process.argv[3]} numero ${process.argv[4]} luetteloon`);
        mongoose.connection.close();

    })
}




