let http = require("http");
let fs = require('fs');
let path = require('path');

const server = http.createServer((request, response) => {
    let urlPath = request.url;

    if (urlPath === '/' || urlPath.toLowerCase() === '/home') {
        _sendWelcome(response);
    } else if (urlPath.toLowerCase() === '/image') {
        _readFile("image", (data) => {
            if (data) {
                _sendJpegImage(response, data);
            } else {
                _sendNotFound(response);
            }
        });
    } else if (urlPath.toLowerCase() === '/pdf') {
        _readFile("pdf", (data) => {
            if (data) {
                _sendPdfFile(response, data);
            } else {
                _sendNotFound(response);
            }
        });
    } else {
       _sendNotFound(response);
    }
});

const _readFile = (type, callBack) => {
    let fileName = "naruto.jpeg";

    if (type == "pdf") {
        fileName = "lesson.pdf"
    }

    let filePath = path.join(__dirname, "file", fileName);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callBack(null);
        }
        callBack(data);
    });
}


const _sendPdfFile = (response, data) => {
    response.writeHead(200, { 'Content-type': 'application/pdf' });
    response.end(data);
}

const _sendJpegImage = (response, data) => {
    response.writeHead(200, { 'Content-type': 'image/jpg' });
    response.end(data);
}

const _sendNotFound = (response) => {
    response.writeHead(404);
    response.end("Error 404: Page not found");
}

const _sendWelcome = (response) => {
    response.end("Welcome to my website");
}

server.listen(3000, () => {
    console.log('Server has started at port: 3000');
});