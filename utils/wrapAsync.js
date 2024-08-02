module.exports=(fn)=>{
    return (req,res,Next)=>{
        fn(req,res,Next).catch(Next);
    }
}