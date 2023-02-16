import {createTheme} from "@mui/material/styles"
import grey from "@mui/material/colors/grey"
import cyan from "@mui/material/colors/cyan"

const theme = createTheme({
    palette: {
        primary:{
            main: grey[900]
        },
        secondary:{
            main: cyan[300]
        }
    }
})

export default theme