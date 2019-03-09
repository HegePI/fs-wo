const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, index) => {
    return sum + index.likes
  }

  return blogs.reduce(reducer, 0)


}

const favorite = (blogs) => {
  var index = 0

    for (var i = 0; i < blogs.length; i++) {
    if (blogs[index].likes < blogs[i].likes) {
      index = i
        }
  }
  const blog = blogs[index]
  JSON.stringify(blog)
  delete blog._id
  delete blog.__v
  delete blog.url

  return blog

}

module.exports = {
  dummy,
  totalLikes,
  favorite
}
