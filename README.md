# fouc-stencil

Demonstrates how to prevent a Flash of Unstyled Content for components which contain enclosed
DOM elements.

1.  npm install
2.  npm start.
3.  Note the FOUC
4.  Uncomment the &lt;style&gt; block in <head> of src/index.html
5.  Reload the page - voila!

The :not(.hydrated) rules have to be in a static CSS style or file, they cannot be dynamically rendered by Stencil. More discussion about this can be found at https://bbellmyers.github.io/2020/09/27/fouc-stencil.html
