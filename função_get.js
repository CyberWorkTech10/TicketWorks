fetch(url, {
    method: 'get',
}).then(function(result){
    return result.json()
}).then(function(data){

console.log("Data:", data);