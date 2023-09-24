import {TextField, IconButton, Stack, Container, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import dummy1 from "../dummy/p00001.jpg";
import dummy2 from "../dummy/p00010.jpg";
import dummy3 from "../dummy/p00012.jpg";

const Search = ():JSX.Element=>{
    const [query, setQuery]  = useState("");
    const [show , setShow] = useState(false);

    const startSearch = ():void=>{
        alert(query);
        setShow(true);
    }

    const ResultRow = ():JSX.Element=>{

        return(
            <Container>
                <Stack direction="column" spacing={2} overflow="auto" maxWidth="650px">
                    <Box>
                        <img src={dummy1} width="200px"/>
                    </Box>
                    <Box>
                        <img src={dummy2} width="200px"/>
                    </Box>
                    <Box>
                        <img src={dummy3} width="200px"/>
                    </Box>
                </Stack>
            </Container>
        );
    }

    return(
        <Container>
                <Stack direction="row" alignItems="center"> 
                    <TextField label="Input keyword" variant="standard" sx={{marginLeft:2, marginRight:2,marginBottom:2, maxWidth:"350px"}} onChange={(e)=>setQuery(e.target.value)}></TextField>
                    <IconButton sx={{ p: '10px' }} onClick={startSearch}>
                        <SearchIcon/>
                    </IconButton>
                </Stack>
                {show ? <ResultRow/> : ""}
        </Container>
    );
}

export default Search;