export async function getStoreApi(tipo_orden,limit) {
    try {
      const url = `http://127.0.0.1:8080/api/tiendas?campo=${tipo_orden}&limit=${limit}`;
      const reponse = await fetch(url);
      //console.log(reponse);
      const result = await reponse.json();
      
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
}