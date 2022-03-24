const blogs = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
        id: 1,
         name: 'Mr. Duck',time: '12:00',
         comments: [{comment_name:'lksdjf',comment: 'sldkf',comment_time: '12:00'}],
         blog_name: 'lskdjfjlsakdjf',
         blog:'Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are members of the same family. Divided among several subfamilies, they are a form taxon; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species), since swans and geese are not considered ducks. Ducks are mostly aquatic birds, and may be found in both fresh water and sea water.'
        },

    {
        id: 2,
        name: 'Mr. Cat',time: '12:00',
        comments: {comment_name:'lksdjf',comment: 'sldkf',comment_time: '12:00'},blog_name: 'lskdjfjlsakdjf',
        blog:'The cat (Felis catus) is a domestic species of a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries.',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg'
    },

    {
        id: 3,
        name: 'Mr. Dog',
        time: '12:00',
        comments: {comment_name:'lksdjf',comment: 'sldkf',comment_time: '12:00'},
        blog_name: 'lskdjfjlsakdjf',
        blog:'Due to their long association with humans, dogs have expanded to a large number of domestic individuals[10] and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.[11] Over the millennia, dogs became uniquely adapted to human behavior, and the human-canine bond has been a topic of frequent study.',
        image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
    },
    {
        id: 4,
        name: 'Mr. Tiger',time: '12:00',
        comments: {comment_name:'lksdjf',comment: 'sldkf',comment_time: '12:00'},
        blog_name: 'lskdjfjlsakdjf',
        blog:'The tiger was first scientifically described in 1758 and once ranged widely from the Eastern Anatolia Region in the west to the Amur River basin in the east, and in the south from the foothills of the Himalayas to Bali in the Sunda Islands. Since the early 20th century, tiger populations have lost at least 93% of their historic range and have been extirpated from Western and Central Asia, the islands of Java and Bali, and in large areas of Southeast and South Asia and China. Today, the tigers range is fragmented, stretching from Siberian temperate forests to subtropical and tropical forests on the Indian subcontinent, Indochina and Sumatra.',
        image: 'https://www.treehugger.com/thmb/pIMNT6xOQOziMz5C9gZIv3S3Ue4=/1414x1414/smart/filters:no_upscale()/tiger-bandhavgarh-np-india-01-7452a370026f452b88d973bd0d0eec9b.jpg'},
    {
        id: 5,
        name: 'Mr. Lion',
        time: '12:00',
        comments: {comment_name:'lksdjf',comment: 'sldkf',comment_time: '12:00'},
        blog_name: 'lskdjfjlsakdjf',
        blog:'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lions pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not.',
        image: 'https://i.ytimg.com/vi/6joIGh5iVGw/maxresdefault.jpg'
    }
    
];
//getting current time
const formatAMPM =(date) =>{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
}
//showing all blogs
const showAllData = () => {
    const blogContainer = document.getElementById('show-all-blogs');
    blogs.forEach(blog => {
        const div = document.createElement('div');
        div.classList.add('col-12','col-md-6','col-lg-4',);
        div.innerHTML = `
        <article class="mx-auto mt-5 article-additional-style">
        <section>
            <div class="user-header d-flex align-items-center">
                <div class="img-container">
                    <img src="${blog.image}" width="70px" height="70px" class="rounded-circle" alt="blogers image">
                </div>
                <div class="user-description ms-2">
                    <p class="m-0">${blog.name}</p>
                    <time>${blog.time}<span>AM</span></time>
                </div>
                <div class="ms-auto me-2">
                    <span onclick="likedBlog('${blog.id}')"><i class="fa-solid fa-heart"></i></span>
                    <span onclick="dislikedBlog('${blog.id}')"><i class="fa-solid fa-heart-crack"></i></span>  
                </div>
            </div>
            <div class="blog-container">
                <h2>${blog.blog_name}</h2>
                <div style="word-break:break-all">
                    ${blog.blog}
                </div>
            </div>
        </section>
        <section>
            <a class="drop-comment" data-bs-toggle="collapse" href="#collapseExample-${blog.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                comments <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="collapse" id="collapseExample-${blog.id}">
                <div id="comment-${blog.id}-container" class="overflow-auto" style="color: black;height:150px;background-color: white">
                    <div id="myComments-${blog.id}" class="comments bg-info p-2 rounded-3 m-3">
                        <div class="d-flex align-items-center">
                            <h6>${blog.comments.comment_name}</h6>
                            <time class="ms-3" style="font-size: 14px;margin-top:-6px">${blog.comments.comment_time}</time>
                        </div>
                        <p>${blog.comments.comment}</p>
                    </div>

                </div>
                <div class="mt-3">
                    <input style="width:80%" id="${blog.id}-comment" type="text">
                    <button class="btn btn-warning" onclick="addComment('${blog.id}-comment','comment-${blog.id}-container')">Add comment</button>
                </div>
            </div>
        </section>
    </article>
        `;
        blogContainer.appendChild(div)
    });
}
showAllData();

const addComment = (comment,commentContainer) => {
    const commContainer = document.getElementById(commentContainer);
    const comm = document.getElementById(comment);
    const div = document.createElement('div');
    div.className='comments bg-info p-2 m-3 rounded-3';
    div.innerHTML = `
    <div class="d-flex align-items-center">
        <h6>Mir Jakariya</h6>
        <time class="ms-3" style="font-size: 14px;margin-top:-6px">${formatAMPM(new Date())}</time>
    </div>
    <p>${comm.value}</p>
    `;
    commContainer.appendChild(div);
}

const likedBlog =(blogId)=>{
    const likedBlogContainer = document.getElementById('liked-blogs');
    const liked = blogs.find(blog => blog.id==Number(blogId));
 
    const div = document.createElement('div');
    div.classList.add('col-12','col-md-6','col-lg-4',);
    div.innerHTML = `
    <article class="mx-auto mt-5 article-additional-style">
    <section>
        <div class="user-header d-flex align-items-center">
            <div class="img-container">
                <img src="${liked.image}" width="70px" height="70px" class="rounded-circle" alt="blogers image">
            </div>
            <div class="user-description ms-2">
                <p class="m-0">${liked.name}</p>
                <time>${liked.time}<span>AM</span></time>
            </div>
            <div class="ms-auto me-2">
                <span onclick="likedBlog('${liked.id}')"><i class="fa-solid fa-heart"></i></span>
                <span onclick="dislikedBlog('${liked.id}')"><i class="fa-solid fa-heart-crack"></i></span>  
            </div>
        </div>
        <div class="blog-container">
            <h2>${liked.blog_name}</h2>
            <div style="word-break:break-all">
                ${liked.blog}
            </div>
        </div>
    </section>
    `;
    likedBlogContainer.appendChild(div);
}
