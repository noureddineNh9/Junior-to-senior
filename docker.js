/* 

* containers are a lightweight alternative to the full machine virtualization or virtual machines.

* containers that use the host operating system they don't have their own operating system like we have with virtual machines.
* They use the host operating system. And because of that they need just a few seconds and your container application is up and running 
* with darker containers we're able to have a fast and easy access to run these small single applications 

* 




inside the node project:

> touch Dockerfile
   #FROM node:NODE_VERSION
   #
   #CMD ["/bin/bash"]
> docker build -t myfirstcontainer
> docker run -it myfirstcontainer
   .your are inside the container

> docker ps //show containers

> docker run -it -p 3000:3000 myfirstcontainer //run in specific port 




*/
