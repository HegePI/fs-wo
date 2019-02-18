const blogRouter = require('express').Router()
const Blog = require('../models/blog')




blogRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs.map(blog => blog.toJSON()))
        })
})

blogRouter.post('/', (request, response, next) => {
    const body = request.body

    const newBlog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes

    })

    newBlog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(error => next(error))
})

blogRouter.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndDelete(request.params.id)
        response.status(204).end
    } catch (exception) {
        next(exception)
    }
})

module.exports = blogRouter