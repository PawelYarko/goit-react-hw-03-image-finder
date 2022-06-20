function fetchRequest(name,page){
    return  fetch(`https://pixabay.com/api/?key=26762966-8ed2dcb76b4efb10f9cc7c58f&q=${name}&image_type=photo&per_page=12&page=${page}`)
    .then(response =>{
        if(response.ok){
            console.log(name,page)
          return response.json();
        }
        return Promise.reject(
            new Error(`Не правильный запрос ${name}`)
        )
    })
}

export default fetchRequest;