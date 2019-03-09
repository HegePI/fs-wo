const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  try {
    const authorization = request.get('authrization')
    console.log(authorization)
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      return authorization.substring(7)
    }
  } catch (exception) {
    console.log('Persiilleen män')
    return null
  }
}

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(b => b.toJSON()))
})

blogRouter.post('/', async (request, response, next) => {

  const body = request.body
  console.log(body)

  console.log(request.headers)

  const token = getTokenFrom(request)
  console.log(token)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const newBlog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id

    })

    console.log(newBlog)

    const savedBlog = await newBlog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
    console.log(response)
  } catch (exception) {
    next(exception)
  }
})

blogRouter.put('/:id', async (request, response, next) => {
  const blog = request.body.blog

  console.log(blog)
  const id = blog.user.id
  delete blog.user
  blog.user = id
  blog.likes = blog.likes + 1
  console.log(blog)

  try {
    await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    console.log('Onnistui')
  } catch (exception) {
    next(exception)

  }
})

blogRouter.delete('/:id', async (request, response, next) => {

  try {
    console.log(`Poistetaan blogi id:llä ${request.params.id}`)
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end
  } catch (exception) {
    console.log('Jokin meni pieleen')
    next(exception)
  }
})

blogRouter.post('/:id/comments', async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    const commentedBlog = { blog, comments: [...blog.comments, request.body.comment] }
    await Blog.findByIdAndUpdate(request.params.id, commentedBlog)
    response.status(204).end

  } catch (exception) {
    console.log('Jokin meni pieleen')
    next(exception)
  }
})

module.exports = blogRouter