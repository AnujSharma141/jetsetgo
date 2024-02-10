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
import { Routes , Route, useNavigate} from 'react-router-dom'
import { search } from "./util/helpers";
import Footer from "./components/common/Footer";

function App() {
  const [isSearch, setIsSearch] = useState(false)
  const [isResult, setIsResult] = useState(false)
  const flights = useFlights()

  const [results, setResults] = useState([])
  const [display, setDisplay] = useState([])
  const [input , setInput] = useState({from: '', to: '', date: ''})

  const toast = useToast()
  const navigate = useNavigate();

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
      if(searchResults.length>0){ setResults({data:{result: searchResults}}); setDisplay({data:{result: searchResults}})}
      else {setResults(flights); setDisplay(flights) }
      
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
      navigate('/results')
    }
}

const inpuHandler = (e) => setInput({...input, [e.target.name]: e.target.value,})

  return (
    <ChakraProvider>
    <ResultContext.Provider value={{list: results, display: display, setResults}}>
      <Routes>
        <Route path="/" element={<><div className='app-layout'>
          {isSearch? <Search input={input} setInput={setInput} setIsResult={setIsResult} searchHandler={searchHandler} inputHandler={inpuHandler}  />
            : <Landing setIsSearch={setIsSearch}  />}
            <Footer/>
          </div></>} />
        <Route path="/results" element={<Results input={input} setInput={setInput} searchHandler={searchHandler} inputHandler={inpuHandler} /> } />
      </Routes>
      
    </ResultContext.Provider>
    </ChakraProvider>
  );
}

export default App;
