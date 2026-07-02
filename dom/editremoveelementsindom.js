/*{ <script>
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    function addOptiLanguage(langName){      this is optimize method
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')
</script> }*/
//ya sirf abi function banaye k kessy function k through easy ker skty

 
                                //Edit element in dom

/*const secondLang = document.querySelector("li:nth-child(2)")
//secondLang.innerHTML = "Mojo"
const newli = document.createElement('li') //optimize
newli.textContent = "Mojo"
secondLang.replaceWith(newli)*/


// another edit method
/*const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'
//remove elemnt in dom
const lastLang = document.querySelector('li:last-child')
lastLang.remove()*/


//NodeList is a collection (list) of DOM nodes returned by methods like querySelectorAll().
/*{ <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul> }*/
           //js my access krny hu tu 
/* const items = document.querySelectorAll("li");

 console.log(items);*/

              //loop k through access krny hu tu
/* const items = document.querySelectorAll("li");

 items.forEach(function(item) {
     console.log(item.innerText);
 }); */

