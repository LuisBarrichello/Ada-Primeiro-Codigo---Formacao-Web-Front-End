const { JSDOM } = require('jsdom');

const dom = new JSDOM(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>
        <p>Hello world</p>
        <p>Hello world 1033</p>
        <p id="get-Element-By-Id">Hello world paragrafoId get-Element-By-Id</p>
        <div class="menu"></div>
        <a>link</a>
    </body>
    </html>
        `
    );

const document = dom.window.document;

const paragrafo = document.querySelector('p')/* querySelector - pega o primeiro que aparecer, aceita selectores de css */

console.log(paragrafo.innerHTML)
console.log(paragrafo.textContent)

paragrafo.textContent = `Hello world - Ada Tech`
console.log(paragrafo.textContent)

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos)

paragrafos.forEach(paragrafo => {
    console.log(`forEach: ${paragrafo.textContent}`)
})

const paragrafoFirst = document.querySelector('p:first-of-type')
console.log(paragrafoFirst)


const paragrafoId = document.getElementById('get-Element-By-Id')
console.log(paragrafoId.textContent)

const menu = document.getElementsByClassName('menu')

const linkClass = document.getElementsByTagName('a')
console.log(linkClass?.[0]?.getAttribute('href'))