const express = require("express")
const app = express()
const fetch = require("node-fetch")
const bodyParser = require("body-parser");
const cors = require("cors")
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
const urlPost = ("https://accounts.zoho.eu/oauth/v2/token?refresh_token=1000.3dbdad6937dc0800c4dcc662cd14d173.86efb18e337989bebb3ff4c05582c94c&client_id=1000.NQL17JHK3Y62Y178TO0E3FQC6MBQJV&client_secret=5d04ad135862e7313377484af55efa1f41c1f49a39&grant_type=refresh_token")
const urlGet = "https://creator.zoho.eu/api/v2/hostienda1/Product-Catalog/report/Product_Details";
app.use(cors())
app.get
const peticion = fetch(urlPost,{
      method: 'POST',
      redirect: 'follow'
    });
    peticion
    .then((ans)=>{return ans.json()})
    .then((resp)=>{
      const reslt = resp.access_token;
      return app.get("*", async (req,res)=>{
        const response = await fetch(urlGet,{
        method: "GET",
        headers:{
            'Authorization':`Zoho-oauthtoken ${reslt}`,
          }})
          const result = await response.json()
          const test = result.data
         test.map(function(product){
                if (true){
                 product.Product_Images[0] = "https://creator.zoho.eu" + product.Product_Images[0].display_value
                return product.Product_Images[0]
                }
              })
          
   
          res.json(test)
          

          
        })
      })
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})