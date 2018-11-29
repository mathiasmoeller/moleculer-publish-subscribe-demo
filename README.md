# moleculer-publish-subscribe-demo
Small docker-compose demo of a Moleculer.js Publish/Subscribe infrastructure using NATS.

## Why?
This project should show an issue in Moleculer.js. You can find the related ticket [here](https://github.com/moleculerjs/moleculer/issues/426).

## How to reproduce?
1. Check out the repository
1. Run `docker-compose up -build`

    You will now see that `moleculer-publisher` sends events to the NATS server.
Both subscribers (`moleculer-subscriber` and `nodejs-subscriber`) will receive these events and log them.
As the `nodejs-subscriber` subscribes to a wildcard it will also log all heartbeats from the `moleculer-publisher`.

1. Go to `docker-compose.yml` and comment out the `moleculer-subscriber`. 
1. Run `docker-compose up -build`
    
    You will now see that the `nodejs-subscriber` does still receive the heartbeat events from the `moleculer-publisher` but not the test event.
    
## What is the issue?
Moleculer will only publish events to the transporter (NATS in this case) if another Moleculer service is registered in the Service Registry of Moleculer. 
If not no events will be broadcasted (only heartbeats).
If you use Moleculer together with other frameworks they will not receive any events unless one of them is a Moleculer service.

## What should be improved?
It would be great to have an option that forces Moleculer to send events to the transporter no matter if another service is registered in the Service Registry or not. 
This is crucial to be able to use Moleculer in an diverse micro service environment.