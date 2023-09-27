import {TextField, IconButton, Stack, Container, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';

const Search = ():JSX.Element=>{
    const [query, setQuery]  = useState("");
    const [show , setShow] = useState(false);
    const [json, setJson] = useState<result>();

    const startSearch = ()=>{

        fetch("https://ec2-3-27-85-42.ap-southeast-2.compute.amazonaws.com/tag/"+query).then((response)=>response.json()).then((json)=>{setJson(JSON.parse(json)); setShow(true);});
    }

    type imageID = {
        id : string
    }

    type result = {
        results : imageID[]
    }

    const ResultRow = ():JSX.Element=>{

        return(
            <Container>
                <Stack direction="column" spacing={2} overflow="auto" maxWidth="650px">
                    {json?.results.map((image, index)=>(<Box key={index}>
                        <img crossOrigin="anonymous" src={"https://ec2-3-27-85-42.ap-southeast-2.compute.amazonaws.com/images/"+image.id} width="200px"/>
                    </Box>))}
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