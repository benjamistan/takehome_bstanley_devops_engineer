# Very Simple Microservices
This was completed as part of a take-home coding challenge for a role I am applying for. 

## u-service-1 
This is a simple HTTP server which accepts JSON in the format `{ "message": "abcdefg" }`. It forwards the text onto a second HTTP server in *u-service-2* which reverses the content of `"message"`. 

## u-service-2
This service then returns this reversed string, along with a randomly generated number between 0 and 1 to 8 decimal places, as JSON. 
