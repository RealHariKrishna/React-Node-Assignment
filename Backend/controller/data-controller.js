import axios from "axios";

export const getData = async(req, res) => {
    try {
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result => {
        console.log(result.data,"res from api")
        return res.json(result.data)
    })
  }
   catch(err) {
    console.log(err,"err in getting data")
   }
 }

