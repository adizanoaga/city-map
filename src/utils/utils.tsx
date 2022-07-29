interface CityData {
  id: number
  title: string,
  lat: string,
  long: string,
  content: string,
  image_url: string,
}

interface PostPutBody {
  title: string,
  content: string,
  lat: string,
  long: string,
  image_url: string
}

const API = {
  GET_LIST: () =>
    fetch('http://localhost:3000/api/v1/posts'),
  GET_SHOW: (id: string) =>
    fetch(`http://localhost:3000/api/v1/posts/${id}`),
  POST_CREATE: (id: string, data: PostPutBody) =>
    fetch(`http://localhost:3000/api/v1/posts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    ),
  PUT_UPDATE: (id: string, data: PostPutBody) =>
    fetch(`http://localhost:3000/api/v1/posts/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    ),
  DELETE_REMOVE: (id: string) =>
    fetch(`http://localhost:3000/api/v1/posts/${id}`,
      { method: 'DELETE' }
    )
}

export type { CityData, PostPutBody }
export { API }