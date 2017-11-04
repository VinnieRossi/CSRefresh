# CSRefresh
This project is an implementation of the blog engine I created with React. The underlying blog engine interprets React components, along with their given props in a .json format, and generates a blog!
It's basically using the json as the DOM tree, which I thought was pretty neat. It is currently retrieving this information via Firebase, allowing all of the blogs to be served dynamically, intead of existing as static files. 

# Why? 
Generally speaking, it doesn't really make sense to dynamically generate the blog. It's the same static content every time. It's just adding unnecessary complexity and load time.
This is true, but about halfway through deciding to make my own blog I got annoyed with the thought of having to manage multiple different static pages.
I am completely aware that this is a prime example of a page that should have very little javascript, but it was mostly for learning and experimenting with Firebase and React.

# How to use 
Make sure that you run `npm install` on both the client and server side to install the dependencies. Then you want to run `npm run start` at the client level in order to start the webpack dev server so that we can have hot reloading.

In order to test server stuff, you'll have to make sure that you run `npm run build` within the client project, which will create a minified and packaged build that the server will then serve. 

Once you've done that, navigate to the server level of the project and run `npm run start`. This will serve that bundled js file and all of the static assets within the build folder. You should now see the project and be able to test complete flows!

Note: In order to see any changes on the client side at this point you'll have to run another `npm run build` in order to rebuild the javascript/static files.
