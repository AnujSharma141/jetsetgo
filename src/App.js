import { useState } from "react";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import './style/globals.css'
import { Box, ChakraProvider, Text, useToast } from '@chakra-ui/react'
import Results from "./pages/Results";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import ResultContext from "./core/results";
import useFlights from "./hooks/useFlights";
import { search } from "./util/helpers";

function App() {
  const [isSearch, setIsSearch] = useState(true)
  const [isResult, setIsResult] = useState(true)
  const flights = useFlights()

  const [results, setResults] = useState([])
  const [display, setDisplay] = useState([])
  const [input , setInput] = useState({from: '', to: '', date: ''})

  const toast = useToast()

  const searchHandler = () =>{
    if(input.from === '' || input.to === '' || input.date === '')
    toast({
        duration: 3000,
        isClosable: true,
        render: () => (
            <Box display='flex' flexDir='row' alignItems='center' bg='gray.200' mb='3vh' border='1px solid #D1D1D1' color='black' p='2vh 4vh' borderRadius='10vh'>
               <AiOutlineInfoCircle color="red" /> <Text ml='1vh' >Please fill the details.</Text> 
            </Box>
          ),
      })
    else {
      const searchResults = search(input, flights.data.result) 
      if(searchResults.length>0) setResults({data:{result: searchResults}}) 
      else setResults(flights)
      setDisplay(flights)
      toast({
        duration: 3000,
        isClosable: true,
        render: () => (
            <Box display='flex' flexDir='row' alignItems='center'  bg='gray.200' mb='3vh' border='1px solid #D1D1D1' color='black' p='2vh 4vh' borderRadius='10vh'>
              {searchResults.length > 0?<>
              <IoIosSearch/><Text ml='1vh' >{searchResults.length +' Results Found.'}</Text></>: 
              <>
              <IoIosSearch color="red"/><Text ml='1vh' >{'No flight found. Showing available flights.'}
              </Text></>}
            </Box>
          ),
      })
      setIsResult(true)
    }
}

const inpuHandler = (e) => setInput({...input, [e.target.name]: e.target.value,})

  return (
    <ChakraProvider>
    <ResultContext.Provider value={{list: results, display: display, setResults}}>
    <div className='app-layout'>
      
        {isResult? <Results input={input} setInput={setInput} searchHandler={searchHandler} inputHandler={inpuHandler} /> :
          isSearch? <Search input={input} setInput={setInput} setIsResult={setIsResult} searchHandler={searchHandler} inputHandler={inpuHandler}  />
          : <Landing setIsSearch={setIsSearch}  />}

          <footer className='footer'>
            <a style={{textDecoration: 'underline'}} href="https://github.com/AnujSharma141/jetsetgo">Github Link</a>
            <span>by <a style={{textDecoration: 'underline'}} href="https://anujsharma.online/"> Anuj Sharma</a> </span> 
        </footer>
    </div>
    </ResultContext.Provider>
    </ChakraProvider>
  );
}

export default App;
