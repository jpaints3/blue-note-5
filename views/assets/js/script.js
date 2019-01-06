//function getDataFromTwitter(){
//    var apiKey = ''
//    var url = 'https://api.twitter.com/1.1/search/tweets.json'
    
//    fetch(url, {
//        headers: {
//            'user-key': apiKey,
//            'Accept' :'application/json'
//        }
//    })
//    .then( function(data) { return data.json() })
//    .then( function(json) {
//        console.log(json)
//    })
//    .catch( function(error){
//        console.log(error)
//    })
//}


function getDataFromYoutube(){
    var apiKey = ''
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json)
    })
    .catch( function(error){
        console.log(error)
    })
}

function getDataFromSpotify(){
    var apiKey = ''
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json) 
    })
    .catch( function(error){
        console.log(error)
    })
}
