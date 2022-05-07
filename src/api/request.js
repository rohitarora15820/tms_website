// export async function getRequest (url) 
//  {
//     var  response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             "Access-Control-Allow-Origin": "*",
//         }},
//         );
//     var  data = await response.json();
//     if(response.status !== 200) {
//         throw Error(data.message);
//     }
//     console.log(data);

//     return data;
//   }

export async function getUser() {
    try {
      const response = await fetch('https://demo.extensionerp.com/api/resource/Lead', {
        method: 'GET',
        headers: {
          accept: 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": true,

        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  
  
  

 export  async function postRequest (url, data) {
    var response=await  fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    var data = await response.json();
    if(response.status !== 200) {
        throw Error(data.message);
    }
    print(data);
    return data;


    }
