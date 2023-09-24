import { AppBar, IconButton, Typography, Link, Menu, MenuItem, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const TopBar  =():JSX.Element=>{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClose = (path : string) => {
        setAnchorEl(null);
        navigate(path);
      };
      const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const SearchIconClick= ()=>{
        navigate("/search");
      }

      const navigate = useNavigate();



    return(
      <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton onClick={handleMenu} size="large" edge="start" color="inherit" aria-label="menu" sx={{mr:2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>handleClose("/upload")}>upload</MenuItem>
                <MenuItem onClick={()=>handleClose("/search")}>search</MenuItem>
                <MenuItem onClick={()=>handleClose("/")}>login</MenuItem>
              </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit" >AppName</Link>
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit" edge="end" onClick={SearchIconClick}>
            <SearchIcon />
          </IconButton>
                </Toolbar>
            </AppBar>
             <Offset />
             </>
    )
}

export default TopBar;