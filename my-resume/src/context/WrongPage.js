import { createContext, useEffect, useContext, useState } from "react";

const WrongPageContext = createContext();

export const WrongPageProvider = ({children}) => 
{
  const [page, setPage] = useState(true);
  const values = {
    page,
    setPage,
    } 
    useEffect(()=>{
      console.log(page)
      },[page]);


  return(<WrongPageContext.Provider value={values}>{children}</WrongPageContext.Provider>)

}
export const usePage = () => useContext(WrongPageContext);

