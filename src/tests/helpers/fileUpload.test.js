import { fileUpload } from "../../helpers/fileUpload"



describe('Pruebas en el fileUpload', () => {


    test(' debe de cargar un archivo y rotarnar el URL ', async()=> {


        //PROBLEMA CON EL FETCH POR BLOQUEO DEL CORS EN EL CASO DE LAS PRUEBAS

        
        const file = new File([],'goo.png'); 
        const url = await fileUpload(file);

        console.log(url)

        

    })
    
    
})
