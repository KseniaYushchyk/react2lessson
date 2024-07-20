const baseURL= 'https://jsonplaceholder.typicode.com';
const urls  = {
    usersUrls: {
        all: '/users',
        oneById: (id: number) => baseURL + '/users/' + id
    }
}

export {baseURL, urls}