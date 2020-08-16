import axios from 'axios';

export async function getPhotoLinks(type) {
    const response = await axios.get(`http://localhost:8080/${type}`, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }})
    return response.data
   }

