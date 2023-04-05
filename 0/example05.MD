```mermaid
sequenceDiagram
	participant Server
	participant Browser
	participant User

	User ->> Browser : Opens Webpage
	Browser ->> Server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
	Note left of Browser : Status Code 200
	Browser ->> Server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
	Note left of Browser : Status Code 200


```
