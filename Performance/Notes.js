/*
 
* Image file formats
   JPG is for complex images with lots of colors dosn't support transparent images
   GIF
   SVG (Vecor graphics)


* When we open up Google Chrome and we type in "website.com" we request from the server a few things 
* we can optimize this process and minimize our files and then we can also limit the number of files that we deliver


# Critical Rendering Path
   The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen.

    
   if you put your scripts or the script tags at the bottom of the page. They'll be loaded last.
   In other words something can show up on the browser faster.
   You users don't have to wait for a script to finish downloading before they see something in your application.
   And you also want to load your style tags as soon as possible so that CSS document object can be created as soon as possible.
   And remember in order for us to create the render tree.

   - CSS
      > Load only what is needed 
      > Above the fold loading
         the styles that is not important we can loaded when the page is loaded 
           :<script type="text/javascript">
               const loadStyleSheet = (src) => {
                  if (document.createStylesheet) {
                     document.createStylesheet(src);
                  } else {
                     const stylesheet = document.createElement("link");
                     stylesheet.href = src;
                     stylesheet.type = "text/css";
                     stylesheet.rel = "stylesheet";
                     document.getElementsByTagName("head")[0].appendChild(stylesheet);
                  }
               };
               window.onload = function () {
                  loadStyleSheet("./style3.css");
               };
            </script>;

      > Media attributes
         / <link rel="stylesheet" href="" media="only screen and (min-width: 500px)"></link>

      > Less specificity
         / bad
         .header .nav .item .link a.important {
            ...
         }

         / good
         a.important {
            ...
         }
   - Javascript 
      javascript is probably the worse because it can access and change both the DOM and the CSSOM.
      This means that once a script tag in the HTML is discovered the DOM construction is paused and the script is requested from the server.
      So no matter what we're doing in the HTML,when we see a script file we need to go and requested, once the script is loaded.
      It can't be executed before all the CSS is fetched as well, and the CSSOM is constructed
      after the CSSOM is constructed, Javascript is executed and yes as you can imagine Javascript can and may access the DOM as well as the
      CSSOM and it can alter it. 
      And only once that is done can the page finally be rendered by going to the rendered tree, layout and paint. 
      And that's why we called javascript a parser blocking. 

      > Load Scripts asynchronously
         / <script async> Add them to anything that doesn't affect the DOM or the CSS document object model. 
         So async should be used for pretty much all external scripts that require no knowledge of our code

      > Defer Loading of scripts 
         / <script defer> it's going to wait until a HTML is completely parsed and then start executing.

      > Minimize DOM manipulation 
         / <script src="./script1.js"></script>
         / <script src="./script2.js"></script>
         / <script src="./script3.js"></script>

         result : 
            this is script 1
            this is script 2
            this is script 3
            DOM fully loaded and parsed
            All resources finished loading!
         
      > Avoid long running Javascript 
         
*/
