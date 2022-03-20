/* this function accesses the API and returns a json */
export default function fetchQuote() {
    console.log("Fetch Quote inside fetch quote")
    return fetch('src/test_qf.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }) // fetch a response from the api
        .then((response) => { 
            console.log("Response", response.json);
            let json = response.json(); // then assign the JSON'd response to a var
            return json; // return that bad boy
    });
}