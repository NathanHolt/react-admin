import { Box } from "@mui/material";
import Header from '../../components/Header'
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your Dashboard' />
            </Box>
            <ProgressCircle />
        </Box>
    )
}

export default Dashboard;