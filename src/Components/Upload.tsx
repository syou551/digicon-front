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

    const addtag = (word : string):void=>{
        const newTags = tags?.slice();
        newTags?.push(word);
        setTags(newTags);
        setTag("");
    }

    return(
        <Container>
            <FormControl>
                <TextField label="Title" value={title} onChange={(e)=>setTitle(e.target.value)} sx={{marginBottom: 1}}/>
                <TextField label="description" value={description} multiline maxRows={6} onChange={(e)=>setDescription(e.target.value)} sx={{marginBottom: 1}}/>
                <TextField label="Tag" value = {tag} onChange={(e)=>setTag(e.target.value)} sx={{marginBottom: 1}}/>
                <Button color="primary" variant="outlined" sx={{marginBottom: 1}} onClick={()=>addtag(tag)}>add tag</Button>
                <Stack direction="row" sx={{marginBottom: 1}}>{tags?.map((tag,index)=><Paper key={index} sx={{margin: 0.5}}>{"#"+tag}</Paper>)}</Stack>
                <form action={(tags.length != 0) ? "https://ec2-3-27-85-42.ap-southeast-2.compute.amazonaws.com/uploadwithtag/"+tags[0]: "https://ec2-3-27-85-42.ap-southeast-2.compute.amazonaws.com/upload/"} method="POST" encType="multipart/form-data">
                <input type="file" name='file' accept="image/*" onChange={(e) => {onFileChange(e.target.files)}} />
                <Button color="primary" variant="contained" sx={{marginTop: 1}} type='submit'>Upload</Button>
                </form>
            </FormControl>
            <Box overflow="auto" sx={{marginTop: 1}}>
            <img src={image.imageData ?? ''} width="400px" />
            </Box>

        </Container>
    );
}

export default memo(Search);