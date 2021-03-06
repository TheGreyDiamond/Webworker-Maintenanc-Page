addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>TheGreydiamond - Maintanance</title>
    <meta
      name="description"
      content="TheGreydiamond - Currently undergoing maintanance"
    />
    <meta name="author" content="TheGreydiamond" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        background-image: url("https://source.unsplash.com/qzgN45hseN0/1920x1080");
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: "Open Sans", sans-serif;
        color: white;
        transition: all 1s ease;
         margin: 0px;
      }

      .main {
        position: relative;
        top: 10vw;
        height: 100vh;
        width: 100vw;
       
      }

      .parent {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 40%;
        font-size: large;
        background-color: rgba(0, 0, 0, 0.37);
      }

  @media only screen and (max-width: 600px) {
  .parent {
        width: 90%;

      }
}

      .div1 {
        grid-area: 1 / 1 / 2 / 2;
        padding: 5%;
      }
      .div2 {
        grid-area: 2 / 1 / 3 / 2;
        padding: 5%;
      }
    </style>
  </head>
  <div class="main">
    <center>
      <h1>We are currently undergoing maintanance</h1>

      <div class="parent">
        <div class="div1">
          Wir ziehen gerade den Server um, weswegen die Website nicht erreichbar
          ist. Die Website sollte bald wieder online sein. Tut uns leid.
        </div>
        <div class="div2">
          We are currently moving the server to a diffrent hoster, this causes
          some downtime. The webpage should be back soon. We are sorry.
        </div>
      </div>
    </center>
  </div>

  <body></body>
</html>
`
  return new Response(html, {    headers: {      "content-type": "text/html;charset=UTF-8",    },  })
}