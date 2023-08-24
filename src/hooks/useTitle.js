import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(()=> {
        document.title = `${title}-ToyGang`
    }
        
    
        ,[title])
}

export default useTitle;