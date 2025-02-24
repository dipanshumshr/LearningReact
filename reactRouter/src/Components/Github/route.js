
const githubLoader = async () => {
       const response = await fetch(`http://api.github.com/users/dipanshumshr`)
       return response.json()
    }


export default githubLoader