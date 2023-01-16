import { Box } from "@mui/material";
import Header from '../../components/Header'
import StatBox from "../../components/StatBox";

const Dashboard = () => {

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your Dashboard' />
            </Box>
            <StatBox title='test' subtitle='Test' icon='test' increase='test' />
        </Box>
    )
}

export default Dashboard;