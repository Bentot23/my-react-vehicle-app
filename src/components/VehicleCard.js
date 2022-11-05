import React, {useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
import Box from '@mui/material/Box';


const VehicleCard = ({vehicles}) => {
    const {id, brand, model, yearModel, description, exteriorUrl, interiorUrl} = vehicles;
    const [isFav, setIsFav] = useState(false)
    const [showFront, setShowFront] = useState(true)
    const [infoClick, setInfoClick] = useState(false)

    const handleFav = () => {
        setIsFav((isFav) => !isFav)
        // clickHandler(vehicles)
    }
    const handleClick = () => {
        setShowFront((showFront) => !showFront)
    }
    const handleInfo = () => {
        setInfoClick((infoClick) => !infoClick)
    }

  return (
    <Box style = {{display: "inline"}}>
    <ImageList 
        variant="masonry" cols={3} gap={8}
    >   
    <ImageListItem 
        key={id}
        >
        <img
            onClick={handleClick}
            src={`${showFront ? exteriorUrl : interiorUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${showFront ? exteriorUrl : interiorUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={description}
            loading="lazy"
        />
        <ImageListItemBar
            title={brand}
            subtitle={model}
            actionIcon={
                <>
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    // aria-label={`info about ${description}`}
                    onClick={handleInfo}
                >
                    <InfoIcon  />
                        {infoClick ? description : yearModel}
                    </IconButton>
                    <button onClick={handleFav} >
                        {isFav ? <DownloadDoneOutlinedIcon/> : <AddIcon />}
                        {/* <AddIcon /> */}
                    </button>
                </>
            }
        />
    </ImageListItem>
    </ImageList>
    </Box>
  )
}

export default VehicleCard