import {Box, Button} from '@mui/material';
import EasySeeSo from 'seeso/easy-seeso';
import {memo, useState} from 'react';

const Home = ():JSX.Element=>{

    const [Seeso,] = useState(new EasySeeSo());

    function afterInitialized () {
        console.log('sdk init success!')
    }

    function afterFailed () {
        console.log('sdk init fail!')
    }

    const setup = async () => {
        await Seeso.init("dev_dkaji3ofs1n9rkkjud8zmzhu5am8o8w2himj0rjk",afterInitialized, afterFailed);
        const started = await Seeso.startTracking(onGaze);
        if(started){
        console.log(`started tracking.`)
        }     

        Seeso.showImage();
    }

    const showDistance = ()=>{
        const distance = Seeso.getFaceDistance();
        console.log(distance);
        Seeso.stopTracking();
    }

    type gazeInformation = {
        x : number ,
        y : number ,
    }

    function onGaze (gazeInfo : gazeInformation) {
        const canvas = document.getElementById("output") as HTMLCanvasElement;
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                ctx.fillStyle = '#FF0000'
                ctx.clearRect(0, 0, canvas.width, canvas.height )
                ctx.beginPath();
                ctx.arc(gazeInfo.x, gazeInfo.y - 240, 10, 0, Math.PI * 2, true);
                ctx.fill();
      }

    setup();

    return(
        <>
            <Box>In this page, you can try EyeTracking by SeeSo</Box>
            <Box>You can search by text query and see reader eye motion when reading one</Box>
            <Button onClick={showDistance}>Stop Tracking</Button>
            <canvas id="preview"></canvas>
            <canvas id="output"></canvas>
        </>
    )
}

export default memo(Home);