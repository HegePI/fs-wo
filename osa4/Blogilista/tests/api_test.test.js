const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
describe('Api testejä', () => {
    test('blogit tulee JSON -muodossa', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('id eikä _id tunniste', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            expect('id').toBeDefined();


    })
})

afterAll(() => {
    mongoose.connection.close()
})