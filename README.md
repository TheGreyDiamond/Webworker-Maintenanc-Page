# Webworker Maintenance Page
An easy (and free) way to implement a Maintenance page using Cloudflare Webworkers.

# Getting started
1. Prepare the webworker script. If you don't want to change any part of the website, you can skip this step. Make your changes to the html document, then Ctrl + A and Copy. Open the webworker file and replace everything between the \` symbols.
2. Create a Cloudflare Webworker.
<img src="https://github.com/TheGreyDiamond/Webworker-Maintenance-Page/blob/central/Guide/step1.png" alt="Step 1" width="800"/>
<img src="https://github.com/TheGreyDiamond/Webworker-Maintenance-Page/blob/central/Guide/step2.png" alt="Step 2" width="800"/>
<img src="https://github.com/TheGreyDiamond/Webworker-Maintenance-Page/blob/central/Guide/step3.png" alt="Step 3" width="800"/>
 Now replace the marked codeblock with the contents of the webworker file. Then hit `Save and Deploy` .
 3. Redirecting to the page.
  This is the last important step. If you don't want to move your server or change the server config you can just tell you server to redirect to the URL given on the cloudflare Worker page.
  
  (More ways coming soon, you can already take a look at the screenshots)
