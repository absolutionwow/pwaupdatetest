const cacheName = "cache-pwajson";

//Når websitet indlæses, cache ressourcer i listen //

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(["/pwaupdatetest/", "/pwaupdatetest/index.html", "/pwaupdatetest/morten.png", "/pwaupdatetest/nina.png", "/pwaupdatetest/olivia.png", "/pwaupdatetest/javascript.js", "/pwaupdatetest/members.json"])
        })
    )
})

self.addEventListener("fetch", function(event){
    event.respondWIth(fetch(event.request).catch(()=>
    caches.open(cacheName).then(cache=>cache.match(event.request))
    ))
})

console.log("update 2")