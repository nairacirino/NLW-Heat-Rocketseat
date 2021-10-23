var linksSocialMedia = {
    github: "nanacirino",
    instagram: "nairacirino",
    twitter: "nanacirino",
    youtube: "UCC6IgRj9zFmawRlhagSeIcA",
    facebook: "naira.cirino", 
}

function changeSocialMediaLinks () {
    for (let li of socialLinks.children) {
        let social = li.children[0].id 

        let link = li.children[0].href= `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos () {
    let url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userUrl.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGithubProfileInfos()
