

const route = async ({params}) => {
    const {name} = params
   const response = await fetch(`http://api.github.com/users/${name}`)
   
   return response.json()
}

export default route;