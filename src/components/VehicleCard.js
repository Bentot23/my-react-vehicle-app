import React, {useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ListSubheader from '@mui/material/ListSubheader';
// import AddIcon from '@mui/icons-material/Add';
// import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';

const VehicleCard = ({vehicles}) => {
    const {id, brand, model, price, description, exteriorUrl, interiorUrl} = vehicles;
    // const [isFav, setIsFav] = useState(false)
    const [showFront, setShowFront] = useState(true)
    const [infoClick, setInfoClick] = useState(false)

    // const handleFav = () => {
    //     setIsFav((isFav) => !isFav)
    //     // clickHandler(vehicles)
    // }
    const handleClick = () => {
        setShowFront((showFront) => !showFront)
    }
    const handleInfo = () => {
        setInfoClick((infoClick) => !infoClick)
    }

  return (
    <ImageList 
        style = {{
            display: "inline-block",
            
            width: "20%",
            height: "100%",
        }}
        // sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}
        // // variant="masonry" cols={3} gap={8}
        sx={{
            width: 500,
            height: 450,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
          }}
          rowHeight={400}
          gap={1}
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
            sx={{
                background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={brand}
            subtitle={model}
            actionIcon={
                <>
                <IconButton
                    sx={{ 
                        color: 'rgba(255, 255, 255, 0.54)',
                        marginTop: '10px',
                        marginBottom: '10px',
                        textAlign: 'match-parent'
                    }}
                    // aria-label={`info about ${description}`}
                    onClick={handleInfo}
                >
                    <InfoIcon  />
                        {infoClick ? 
                            <ListSubheader 
                                style={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        color: 'white',
                                        overflow: 'visible',
                                
                                }}
                                component="div">
                                    {description}
                            </ListSubheader> : 
                            `$${price}`
                        }
                </IconButton>
                    {/* <button onClick={handleFav} > */}
                        {/* {isFav ? <DownloadDoneOutlinedIcon/> : <AddIcon />} */}
                        {/* <AddIcon /> */}
                    {/* </button> */}
                </>
            }
        />
    </ImageListItem>
    </ImageList>
  )
}

export default VehicleCard