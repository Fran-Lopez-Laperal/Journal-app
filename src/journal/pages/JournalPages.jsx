import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views'
// import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPages = () => {
  return (
    <>
      <JournalLayout>

        {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dicta obcaecati, totam in quis pariatur repellendus eum assumenda,
          sapiente aliquid reprehenderit numquam incidunt nulla, rerum suscipit
          a voluptate dolores ex voluptatem.
        </Typography> */}
        {/* <NothingSelectedView/> */}
        <NoteView/>
        
        <IconButton
        size='large'
        sx={{
          color:'white', 
          backgroundColor:'error.main',
          ':hover': {backgroundColor:'error.main', opacity:0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        >
      <AddOutlined  sx={{fontSize:30}}  />
        </IconButton>

      </JournalLayout>

    </>
  )
}
