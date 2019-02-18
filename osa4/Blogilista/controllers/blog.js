const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')




blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs.map(b => b.toJSON()))
})

blogRouter.post('/', async (request, response, next) => {
    const body = request.body

    console.log(body.user)

    const user = await User.findById(body.user)

    console.log(user)

    const newBlog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id

    })

    try {
        const savedBlog = await newBlog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    } catch (exception) {
        next(exception)
    }
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