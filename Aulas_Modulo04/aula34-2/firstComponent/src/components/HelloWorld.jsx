const books = ['O Hobbit','Harry Potter','Nárnia']


function HelloWorld(){

    const chosenBook = Math.random()>0.5 ? books[0] : books[1]

    return(
        <div>
            <h1>Hello World, sou o Edu</h1>
            <p>Ou o Jaques, depende</p>
            <p>{chosenBook}</p>
        </div>
    )
}

export default HelloWorld