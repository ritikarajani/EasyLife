const express=require('express');
const app=express();
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('jquery',express.static(__dirname+'node_modules/jquery/dist'));

app.get("/",(req,res)=>{
      res.sendFile(__dirname+'/index.html')
});



app.get("/todo",(req,res)=>{
    res.sendFile(__dirname+'/todo.html')
});

app.get("/texteditor",(req,res)=>{
    res.sendFile(__dirname+'/texteditor.html')
});

app.get("/speechtext",(req,res)=>{
    res.sendFile(__dirname+'/speechtext.html')
});




app.get("/paint",(req,res)=>{
    res.sendFile(__dirname+'/paint.html')
});

app.get("/chatbot2",(req,res)=>{
    res.sendFile(__dirname+'/chatbot2.html')
});

app.get("/vidplayer",(req,res)=>{
    res.sendFile(__dirname+'/vidplayer.html')
});

app.get("/music2",(req,res)=>{
    res.sendFile(__dirname+'/music2.html')
});

app.get("/voicechanger",(req,res)=>{
    res.sendFile(__dirname+'/voicechanger.html')
});

app.get("/yourwaifu",(req,res)=>{
    res.sendFile(__dirname+'/yourwaifu.html')
});

app.get("/voicecommand",(req,res)=>{
    res.sendFile(__dirname+'/voicecommand.html')
});


app.get("/quiz",(req,res)=>{
    res.sendFile(__dirname+'/quiz.html')
});

app.get("/budget",(req,res)=>{
    res.sendFile(__dirname+'/budget.html')
});


app.get("/imdb",(req,res)=>{
    res.sendFile(__dirname+'/imdb.html')
});

app.get("/movie",(req,res)=>{
    res.sendFile(__dirname+'/movie.html')
});

app.get("/music",(req,res)=>{
    res.sendFile(__dirname+'/music.html')
});

app.get("/relaxer",(req,res)=>{
    res.sendFile(__dirname+'/relaxer.html')
});

app.get("/googlesearch",(req,res)=>{
    res.sendFile(__dirname+'/googlesearch.html')
});

app.get("/secretmessage",(req,res)=>{
    res.sendFile(__dirname+'/secretmessage.html')
});
app.get("/photoeditor",(req,res)=>{
    res.sendFile(__dirname+'/photoeditor.html')
});

app.get("/timer",(req,res)=>{
    res.sendFile(__dirname+'/timer.html')
});

app.get("/stonepaperscissors",(req,res)=>{
    res.sendFile(__dirname+'/stonepaperscissors.html')
});

app.get("/todolist",(req,res)=>{
    res.sendFile(__dirname+'/todolist.html')
});

app.get("/weather",(req,res)=>{
    res.sendFile(__dirname+'/weather.html')
});

app.get("/youtoob",(req,res)=>{
    res.sendFile(__dirname+'/youtoob.html')
});





app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+'/calculator.html')
});

app.get("/quiz",(req,res)=>{
    res.sendFile(__dirname+'/quiz.html')
});


app.get('*', function(req, res){
    res.sendFile(__dirname+'/404.html');
  });

app.listen(3000,()=>console.log("Server running on localhost:3000"));