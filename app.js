// console.log(window.document);
//const li = document.querySelector('ul li:first-child');
// console.log(ul.textContent);
// ul.setAttribute('hidden', 'hidden');
// ul.removeAttribute('hidden');
// console.log(ul.getAttribute('class'));
// console.log(ul.classList.remove('color'));
// console.log(getComputedStyle(li).color);
// const newLi = document.createElement('li');
// newLi.innerHTML = "bonjour le monde";
// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// ul.append(li.cloneNode(true));
// console.log(ul.contains(li));
// ul.prepend(newLi)
// const div = document.createElement('div');
// div.innerHTML = "bonjour les amis";
// ul.insertAdjacentElement('beforebegin', div);
//document.querySelector('ul').appendChild(newContent);

/**
 * @param {{title:string, body: string}} post
   @return {HTMLElement}
*/

function createArticleWithText(tagName,content){
    const element = document.createElement(tagName);
    element.innerText = content;
    return element
}
function createArticle(post) {
    const article = document.createElement('article');
    // const h2 = document.createElement('h2');
    // h2.innerText = post.title;
    article.append(createArticleWithText('h2',post.title));
    // const p = document.createElement('p');
    // p.innerText = ;
    article.append(createArticleWithText('p',post.body));
    return article;

}
async function main() {
    const wrapper = document.querySelector('#lastposts');
    const load = document.createElement('p');
    load.innerText = "chargement ...";
    wrapper.append(load);
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                Accept: 'application/json'
            }

        })
        if (!r.ok) {
            console.error("erreur due au serveur");
        }
        const posts = await r.json();
        load.remove();
        for (let post of posts) {
            wrapper.append(createArticle(post));
        }
    }
    catch(e){
        load.innerText = "impossible de charger les articles"
        load.style.color = 'red'
        return
    }
}

main();