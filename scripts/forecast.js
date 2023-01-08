const key = 'AMGh8bOA8JCx5A3eHHqwaV5IBmPOuldm';

// get weather information
const getWeather = async (id) =>  {
  // apply API-endpoint add build query (add parameters and api_key) 
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  // fetch promise-object and jsonify to data 
  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data);
  return data[0];

}


// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data[0]);
  // RETURN of asynchronous function passes promise-object
  return data[0];

};

getCity('Löffingen').then(data => {
    return getWeather(data.Key);
  }).then (data => {
    console.log(data);
  })
  .catch(err => console.log(err));

// getWeather("172133");