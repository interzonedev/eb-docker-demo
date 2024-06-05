eb-docker-demo
==============

Demo project for deploying a Docker application to AWS Elastic Beanstalk.

Taken from https://sommershurbaji.medium.com/deploying-a-docker-container-to-aws-with-elastic-beanstalk-28adfd6e7e95

To build locally:
```
docker build -t boltgun69/eb-docker-demo .
```

To run locally:
```
docker run -d -p 8080:8080 --name eb-docker-demo boltgun69/eb-docker-demo
```

To stop local container:
```
docker stop eb-docker-demo
```

To deploy via the Elastic Beanstalk command line client:
```
eb init
eb create
eb open
```

To terminate the Elastic Beanstalk environment:
```
eb terminate
```

To make a request of the endpoint of the local container:
```
curl -i -X GET "http://localhost:8080/"
```
