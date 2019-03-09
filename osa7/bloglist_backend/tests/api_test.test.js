const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
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
    expect('id').toBeDefined()


    })

  test('Lisätään POST -pyynnöllä', async () => {

    const blogitAlussa = await helper.blogsInDB()
    console.log(blogitAlussa.length)
    const newBlog = {
      title: 'supertest2',
      author: 'hegeluthor',
      url: 'moro moro',
      likes: 3,
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogitlopussa = await helper.blogsInDB()
    console.log(blogitlopussa.length)
    expect(blogitlopussa.length).toBe(blogitAlussa.length + 1)
  })
})

afterAll(() => {
  mongoose.connection.close()
})