/*

* Injection
   __example (sql injection) -->  ';DROP TABLE tab ; --'  ,  'or 1=1--'

   __ example put this in input --> <img scr='/' onerror='alert("aze")' /> 
   > p.innerHTML = inputValue  __bad

   > var textNode = document.createTextNode(inputValue) 
   > p.appendChild(textNode)  __better


   - Sanitize input 
   - Parametrize Queries
   - Knex.js or other ORMS 

* 3rd Party Libraries

* Logging

* HHTPS Everywhere 
   example websites : letsencrypt.org, cloudflare

* XSS & CSRF   
   > Sanitize input 
   > No eval() 'javascript function'
   > No document.write()
   > Content Security Policy
   > Secure + HTTPOnly Cookies (javascript can't access to the cookies)

* Code Secrets
   use process.env
   you can add '.env' file in your create-react-app 
   in this file:
      PRIVATE_KEY = 'secret . . . '
   to use :  process.env.PRIVATE_KEY 

* Secure Headers

* Access Control

* Data Management

* Don't trust anyone 

* Authentication










*/
