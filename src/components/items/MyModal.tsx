import { Box, IconButton, Modal } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "../../theme";
import ClearIcon from '@mui/icons-material/Clear';
import SingleCard from "./SingleCard";

const UseStyles = makeStyles({
    container: {
        width: "40vw",
        [theme.breakpoints.down("md")]: {
            width: '100vw'
        },
        position: "absolute",
        left: '0',
        right: '0',
        margin: 'auto',
        outline: 'none',
    },
});

interface MyModalProps {
    open: boolean
    close: any
    content: JSX.Element
    title: string
}

function MyModal(props: MyModalProps): JSX.Element {
    const classes = UseStyles();

    return (
        <Modal
            open={props.open}
            onSubmit={() => { props.close() }}
        >
            <Box
                className={classes.container}
                sx={{
                     width: '50vw',
                    [theme.breakpoints.down("sm")]: { width: '100vw' }
                }}
            >
                <IconButton  
                size="large"
                color="primary" 
                onClick={props.close}
                >
                    <ClearIcon />
                </IconButton>
                <SingleCard 
                title={props.title} 
                content={props.content} 
                />
            </Box>
        </Modal>

    )
}

export default MyModal;