var posts=["2023/10/29/ap/","2023/10/29/arch/","2023/10/29/cg1/","2023/10/29/dp/","2023/10/29/dp2/","2023/10/29/ee/","2023/10/29/cg2/","2023/10/29/id1/","2023/10/29/hello-world/","2023/10/29/dr/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};