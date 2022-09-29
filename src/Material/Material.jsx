import React from 'react';

import Button from '@mui/material/Button';

const styles = {
  color: '#61dafb',
  fontSize: 16 + 'px',
  marginBottom: 50 + 'px'
}
 function Material() {
  return (
    <>
    <h1 style={styles}>Learn React</h1>
    <Button variant="contained" href="https://mui.com/material-ui/react-button/">
      Material
    </Button>
    </>
  )
}
export default Material;