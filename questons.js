// Part I
// - What is HTTP? Hypertext transfer protocol - protocol used to send requests and information between network nodes
// - What is a URL? Uniform Resource Locator - identifier used to locate a resource on the network, and also include attributes
// - What is DNS? Domain Name System - maps an IP address to a domain name.
// - What is a query string? - a string included in the URL to send attributes with the request.
// - What are two HTTP verbs and how are they different? - GET - to receive information, POST - to send information that will be saved and change the saved data.
// - What is an HTTP request? - request sent from a client device to a server - requests a web page content
// - What is an HTTP response? - response from a server to a request sent from a client.
// - What is an HTTP header? Give a couple examples of request and response headers you have seen. - request a specific language for the page or content type - HTML
// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? - the domain name is converted to an IP address, an HTTP request is sent to the server, a request is received by the client

// Part II
// Site IP: 172.67.198.173
// Pirate Joke

// (base) rumenivanov@Rumens-MacBook-Pro web % curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate" 
// {"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"},{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."}],"search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}
