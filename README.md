# CSRefresh
This project is an implementation of the blog engine I created with React. The underlying blog engine interprets React components, along with their given props in a .json format, and generates a blog!
It's basically using the json as the DOM tree, which I thought was pretty neat. It is currently retrieving this information via Firebase, allowing all of the blogs to be served dynamically, intead of existing as static files. 

# Why? 
Generally speaking, it doesn't really make sense to dynamically generate the blog. It's the same static content every time. It's just adding unnecessary complexity and load time.
This is true, but about halfway through deciding to make my own blog I got annoyed with the thought of having to manage multiple different static pages.
I am completely aware that this is a prime example of a page that should have very little javascript, but it was mostly for learning and experimenting with Firebase and React.
