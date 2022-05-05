import { Card, CardContent, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

interface SingleCardProps {
    title: string,
    content: any
}

const UseStyles = makeStyles({
    card: {
        width: '100%',
        marginBottom: theme.spacing(5),
    },
    title: {
        paddingBlock: theme.spacing(2)
    },
})

function SingleCard(props: SingleCardProps): JSX.Element {
    const classes = UseStyles();
    return (
        <Card className={classes.card}>
            <Typography
                className={classes.title}
                variant="h6"
                align="center"
            >
                {props.title}
            </Typography>

            <Divider />

            <CardContent
                sx={{ paddingInline: theme.spacing(4) }}
            >
                {props.content}
            </CardContent>
        </Card>

    );
}

export default SingleCard;