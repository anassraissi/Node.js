# node.js

# socket
socket is a chanel between server and computer contains information to handel server with computer


# port 
>A program running on computer can listen for request sent to a particular port number.

>is the add information to the http a perpus to make the cmputer listen to a port only

exp 
>172.24.86.76:3000 => 3000 is the port number


`Responce headers   `
---
> Client =>  request +request headers  => server
>server => response data + response headers => client
## response headers
>Content-type : `text/plain` 

>Status : `Ok : 200`

## buffers and Streams
> A buffer is a temporary memory that a stream takes to hold some data until it is consumed.

>Streams work on a concept called buffer.

![alt text](https://cdn.codeforgeek.com/wp-content/uploads/2021/07/streams_buffers_in_nodejs_diagram-1024x457.png.webp
)

# streams
## writable streams:
> Allow node js to write data to a stream
## Readable streams:
> Allow node js to read data from a stream
## Readable streams:
> can Read and Write to a stream

## readable.pipe() methode

>The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable. 

Syntax:
```
readable.pipe( destination, options )
Parameters: This method accept two parameters as mentioned above and described below:
```

>destination: This parameter holds the destination of writing data.
options: This parameter holds the pipe options.
Return Value: It returns the stream.Writable destination, allowing for a chain of pipes if it is a Duplex or a Transform stream. Below examples illustrate the use of readable.pipe() method in Node.js: 










