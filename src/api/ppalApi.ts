import axios from "axios"

const apiPpal = axios.create({baseURL: "http://localhost:8083/api",});

apiPpal.interceptors.request.use(async (config) => {
  config.headers['Authorization'] = await cookieValue('token');
  return config;
});

async function cookieValue(name:string) {
  const value:string   = `; ${document.cookie}`;
  const parts:string[] = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return 'Bearer ' + parts.pop()?.split(';').shift();
  }
}
  
export default apiPpal

