async function fetchRequest(name, page) {
  const axios = require('axios').default;
  try {
    const images = await axios.get(
      `https://pixabay.com/api/?key=26762966-8ed2dcb76b4efb10f9cc7c58f&q=${name}&image_type=photo&per_page=12&page=${page}`
    );
    
    return images.data.hits
    
  } catch (error) {
    Promise.reject(new Error(`Не правильный запрос ${name}`));
  }

}

export default fetchRequest;
