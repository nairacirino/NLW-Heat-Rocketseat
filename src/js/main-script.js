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

changeSocialMediaLinks();
