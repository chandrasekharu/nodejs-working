var http=require("http");
var fs=require("fs");

var server=http.createServer();

server.on("request", function(req,res){
    console.log("current directory is:"+__dirname);
    console.log("req:"+req.url);
    fs.readFile(__dirname+req.url,function(err,data){
        res.writeHead(200,{"content-type":"text/html","company-name":"intuitioninc"})
        console.log("After writing the header")
        if(err)
            {
                res.write("<h1>The file is not available</h1>");
            }
        else{
                console.log("writing the file contents to browser");
                res.write(data);
            }
        res.end();
    })
    console.log("after the readFile method"); 
    //res.end("<h1> checking for request object</h1>")
});
server.listen(8000); 