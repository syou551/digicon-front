import {Container, FormControl, TextField, Box, Button, Paper, Stack} from '@mui/material';
import {useState, memo} from 'react';

const Search = ():JSX.Element=>{
    type image = {
        imageData : string | null,
    }

    const [image, setImage] = useState<image>({imageData: null,});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    function onFileChange(files : FileList | null) {
        if ((files as FileList)?.length  > 0) {
            const file = (files as FileList)[0];
            const reader = new FileReader();
            reader.onload = (f) => {
                setImage({ imageData: f.target?.result as string})
            };
            reader.readAsDataURL(file)
        } else {
            setImage({ imageData: null })
        }
    }

    const upload = ():void=>{
        alert(title + "," + description + "," + tag);
    }

    const addtag = (word : string):void=>{
        const newTags = tags?.slice();
        newTags?.push(word);
        setTags(newTags);
        setTag("");
    }

    return(
        <Container>
            <FormControl>
                <TextField label="Title" onChange={(e)=>setTitle(e.target.value)} sx={{marginBottom: 1}}/>
                <TextField label="description" multiline maxRows={6} onChange={(e)=>setDescription(e.target.value)} sx={{marginBottom: 1}}/>
                <TextField label="Tag" value = {tag} onChange={(e)=>setTag(e.target.value)} sx={{marginBottom: 1}}/>
                <Button color="primary" variant="outlined" sx={{marginBottom: 1}} onClick={()=>addtag(tag)}>add tag</Button>
                <Stack direction="row" sx={{marginBottom: 1}}>{tags?.map((tag,index)=><Paper key={index} sx={{margin: 0.5}}>{"#"+tag}</Paper>)}</Stack>
                <input type="file" accept="image/*" onChange={(e) => {onFileChange(e.target.files)}} />
                <Button color="primary" variant="contained" sx={{marginTop: 1}} onClick={upload}>Upload</Button>
            </FormControl>
            <Box overflow="auto" sx={{marginTop: 1}}>
            <img src={image.imageData ?? ''} width="400px" />
            </Box>

        </Container>
    );
}

export default memo(Search);