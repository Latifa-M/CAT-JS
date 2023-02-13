const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("Add the function you want to access after the API illustrated");
})

app.get('/add',(req,res)=>{
    const numbers=[1,4,6];
    let sum=0;
             for(let i = 0;i< numbers.length; i++){
                sum += numbers[i];
                }
                res.send(`the result is ${sum}`) 
             })
             app.get('/product',(req,res)=>{
                const set=[3,6,3]
                let product=1;
                for(let j =0;j< set.length ;j++){
                    product *= set[j] 
                }
                res.send(` The multiplicational  product is ${product}`)

                }
             )
app.listen(2430,(err)=>{
    console.log("successfully listening") 
})