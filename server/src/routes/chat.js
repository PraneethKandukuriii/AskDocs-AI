router.post("/", async(req,res)=>{

    try{

        const {question}=req.body;

        const answer = await askAI(question);


        res.json(answer);


    }catch(error){

        console.log(error.message);

        res.status(500).json({
            message:"AI service failed"
        });
    }

});