import {serve} from 'bun'
serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response('Hello ice tea from bun', {status:200})
        }
        else if(url.pathname === '/ice-tea'){
            return new Response('from bun Ice tea is good option', {status: 200})
        }
        else{
            return new Response('from bun 404 Not Found', {status:404})
        }
    },
    port: 3001,
    hostname: '127.0.0.1',
})

console.log(`Bun server listening on`)