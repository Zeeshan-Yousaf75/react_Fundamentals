function customRender(reactElement,container)
{

    //Menual way to create a DOM element from reactElement object
    // const domElement = document.createElement(reactElement.type)

    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute("hreh",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target) 

    // container.appendChild(domElement);


    //Dynamic way to create a DOM element from reactElement object
    const domElement = document.createElement(reactElement.type )

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) 
    {
        if(prop === 'children') containue;

        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)



}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
        children: 'Google Link'    
}
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);