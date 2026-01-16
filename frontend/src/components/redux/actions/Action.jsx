const getProducts =()=>async(dispatch)=>{
    try {
        const data = await fetch("http://localhost:3000/getProducts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res =await data.json()
        dispatch({type:"SUCCESS_GET_PRODUCTS", payload: res})

    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS", payload: error.response})
    }
}
export default getProducts