import { useEffect, useState, } from "react";
import Header from "../../components/header";
import "./memory.css";
import memory from "../../services/memory";
import trash from "../../assets/icons/trash-solid.svg";



const Memory= () => {
    const [memoryItem, setMemoryItem] = useState();

 
    useEffect(() => {
        // Este método é executado toda vez que a tela inicia.
        const parametros = window.location.search
        const urlsearch = new URLSearchParams(parametros)

        const memoryId = urlsearch.get("id");
        getMemory(memoryId)
    }, []);

    const getMemory = async (id) => {

        let response = await memory.getMemoryById(id);
        setMemoryItem(response)
    }

    const onDeleteMemory = async () => {

        let confirm = window.confirm("deseja realmente deletar a memoria?");

        if (confirm == false) return;

        let response = await memory.deleteMemory(memoryItem.id);

        if (response) {

            alert("memoria deletada com sucesso");
            window.location.href = "/home";
        }

    }

    return (
<>
    
<Header></Header>
<main className="app-main">
    <h1>{memoryItem?.title}</h1>

    <div className="buttons-container">
        <button onClick={onDeleteMemory}>
            <img src={trash} alt="Delete memory." />
        </button>
    </div>

    <div className="memory-item">
        <div className="images-container">
            
            {memoryItem?.images.map((image, index) => (
             <img key={index} src={image} alt="Image" />

            ))}
            
           
            



        </div>

        <p>{memoryItem?.description}</p>
    </div>
</main>

<footer className="app-footer">
    <p>Mnemosyne - Matheus Martins Figalo</p>
</footer>

    </>
    );
}

export default Memory;