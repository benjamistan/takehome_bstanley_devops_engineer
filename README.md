# PART 1
---
**u-service-1** is a simple node.js HTTP server which accepts JSON in the format `{ "message": "abcdefg" }`. It forwards the text onto a second HTTP server in **u-service-2** which reverses the content of `"message"`. 

u-service-2 then returns this reversed string, along with a randomly generated number between 0 and 1 to 8 decimal places, as JSON. 

This configuration implements synchronous communication between the microservices. A fuller implementation would create a third microservice event bus allowing asynchronous pub/sub messaging between the services. 


# PART 2
---
The services can be deployed using **Kubernetes** via the `infra/k8s` deployment yaml files. These create a Kubernetes *Deployment* and *Service* for each one specifying the container (registry is Docker Hub) and the ports exposed for each service. 



# PART 3
---
1. The solution architecture for this simple microservices application at scale could look like below. An **API Gateway** controls usage by clients. This feeds an **Elastic Load Balancer** which distributes API calls to multiple T2 **EC2 instances** hosting u-service-1 **ECS containers** within an **Autoscaling Group**. The u-service-1 microservice calls the u-service-2 microservice, also in an autoscaling group of T2 via request and response **SQS queues**. This will help to ensure maximum scalability and availability of the application as a whole.

![Solution Architecture](https://sureum-assets.s3.eu-west-2.amazonaws.com/takehome+task+AWS+architecture.png)

2a. For a full production CI/CD pipeline, the AWS **Code*** suite could be used. Two separate pipelines could be created with code commits via either **GitHub** or **CodeCommit** triggering builds in **CodeBuild**. These builds then pass to **CodeDeploy** which deploys them to ECS within the autoscaling groups as outlined above. For continuous delivery, manual approval stages could be added prior to deployment; for full continuous deployment, this would not be necessary and any commits to the main branches would be pushed to production automatically (build-stage testing permitting).

2b. Downtime would be managed by the Autoscaling group within AWS. For a second-level of warning against potential issues, AWS **CloudWatch** alarms could be established which feed an **SNS Topic** which will send email and/or SMS to the DevOps team for defined issues (e.g. CPU usage, number of healthy instances, etc). 


