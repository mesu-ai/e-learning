import { useEffect, useState } from 'react';

const useTopservice = () => {

    const [topservice,setTopservice]= useState([]);

    
    useEffect(()=>{
        fetch('./servicesdb.json')
        .then(res=>res.json())
        .then(data=>setTopservice(data.slice(0,6)))
        
    },[]);

    return [topservice,setTopservice];
};

export default useTopservice;