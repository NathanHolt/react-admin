import { Box, useTheme } from "@mui/material";
import { tokens } from '../../theme'
import Header from '../../components/Header'

const Geography = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='DASHBOARD' subtitle='Welcome to your Dashboard' />
        </Box>
    )
}

export default Geography;