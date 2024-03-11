
        
const moviename = document.getElementById('moviename');
const apiKey = 'fa1c9c03';
       

        
async function displayMovieDetails() {

        if(moviename.value != '') {
            try {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${moviename.value}`); // {}
                    const data = await response.json(); // {}
                    console.log(data);
    
                    //display movie details in page
                    if (data.Response === "True") {
                        // Movie entry exists
                        
                        movieDetails.innerHTML = `<div class="card" style="width:100%">
                       <img src="${data.Poster}" class="card-img-top movieimage" alt="..." >
                       <div class="card-body">
                       <h5 class="card-title mb-3 fw-bold">${data.Title}</h5>
                       <p class="card-text"><span>Release date:-</span> ${data.Released}</p>
                       <p class="card-text"><span>Actors:-</span> ${data.Actors}</p>
                       <p class="card-text"><span>Plot:-</span> ${data.Plot}</p>
                       <p class="card-text" id="rating"><span>Rating:-</span> 
                       ${rating(data.Ratings)}</p>
                      
                       </div>
                       </div>`

                       function  rating(rate)  {
                         let ratingsList = '';
                         rate.map(sources=> {
                            ratingsList+= `${sources.Source} :- ${sources.Value}<br>`
                         });
                         return `<div id="ratingDetails">${ratingsList}</div>`;
                       }

                    } else {
                        // Movie entry does not exist
                        alert("Movie not found!!");
                        movieDetails.innerHTML ='';
                    }
  
            } catch (error) {
                    console.log('Error: ',error);
                    throw error;
                }
        } else {
                alert("Please fill missing fields");
        }
}
           
   