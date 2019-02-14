const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const reducer = (sum, index) => {
        return sum + index.likes
    }

    return blogs.reduce(reducer, 0)


}

const favorite = (blogs) => {
    const reducer = (top, index) => {

        var index = 0;

        for (var i = 0; i < blogs.length; i++) {
            if (blogs[index].likes < blogs[i].likes) {
                index = i;
            }
        }
        const blog = blogs[index]
        console.log(blog)
        return blog
    }
}

module.exports = {
    dummy,
    totalLikes,
    favorite
}
