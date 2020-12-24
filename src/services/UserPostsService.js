class UserPostsService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    async getPostByUserId(id){
        return await fetch(this.url + `?userId=${id}`)
            .then(value => value.json())
    }
}

export default UserPostsService;