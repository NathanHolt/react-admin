import { Box, useTheme, Typography, AccordionDetails } from "@mui/material";
import { tokens } from '../../theme'
import { mockFAQ } from '../../data/mockData'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Header from '../../components/Header'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            {mockFAQ.map((question) => (
                <Accordion key={question.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography color={colors.greenAccent[500]} variant='h5'>
                            {question.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </Box>
    )
}

export default FAQ;