import axios from 'axios'

const axiosAPI = axios.create({
  baseURL:'https://pixabay.com/api/',
  method:'get',

  params:{
    key:'26762966-8ed2dcb76b4efb10f9cc7c58f',
    image_type:'photo',
    per_page: '12'
  },
});

async function fetchRequest(name, page) {

  try{
    const {
      data:{hits},
    } = await axiosAPI('',{params: {q: name, page } });
    return hits;
  }catch (error) {
    Promise.reject(new Error(`Не правильный запрос ${name}`));
  }
}

export default fetchRequest;
