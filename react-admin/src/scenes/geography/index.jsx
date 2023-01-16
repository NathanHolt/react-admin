import { Box, useTheme } from "@mui/material";
import { tokens } from '../../theme'
import Header from '../../components/Header'
import GeoMap from "../../components/GeoMap";

const Geography = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='MAP' subtitle='Simple Geo Map' />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
                <GeoMap />
            </Box>
        </Box>
    )
}

export default Geography;