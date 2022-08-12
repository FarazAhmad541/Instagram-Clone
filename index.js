const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postEl = document.getElementById('user-post')




function renderPosts(post){
    let userPosts = ''
    for(i = 0; i<post.length; i++){
        userPosts += `<section class="post" id="user-post">
                        <section class="user-info">
                            <img src="${post[i].avatar}" class="post-avatar" id="avatar">
                            <div class="user-data">
                                <p class="user-name" id="name">${post[i].name}</p>
                                <p class="user-location" id="location">${post[i].location}</p>
                            </div>
                        </section>
                        <img src="${post[i].post}" class="post-image" id="post-image">
                        <section class="interaction-section">
                            <img src="images//icon-heart.png" alt="like button" class="like-btn-${i} interaction-btn" onclick = "likeButton(${i})">
                            <img src="images/icon-comment.png" alt="comment button" class="comment-btn interaction-btn">
                            <img src="images/icon-dm.png" alt="share button" class="share-btn interaction-btn">
                        </section>
                        <section class="like-section">
                            <p class="number" id = "like-number-${i}">${post[i].likes}</p>
                            <p class="likes">Likes</p>
                        </section>
                        <section class="comment-section">
                            <p class="comment-name" id="user-name">${post[i].username}</p>
                            <p class="comment" id="comment">${post[i].comment}</p>
                        </section>
                    </section>`
    }
    return postEl.innerHTML = userPosts
}

renderPosts(posts);



function likeButton(id){
    let heartIcon = document.querySelector(`.like-btn-${id}`)
    let numberOfLikes = document.querySelector(`#like-number-${id}`)
    likes = posts[id].likes

    numberOfLikes.classList.toggle("likes-false")

    if(numberOfLikes.classList.contains("likes-false")){
        numberOfLikes.textContent = likes + 1;
        heartIcon.src = "images/red-heart-icon.png"
    }else{
        numberOfLikes.textContent = likes
        heartIcon.src = "images/icon-heart.png"
    }
}

