import { Button, ButtonGroup, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import { AdminAxios } from "../../../../axios";
import Company from "../../../../model/Company";
import { DeleteCompany, GetCompanies } from "../../../../redux/selector";
import { theme } from "../../../../theme";
import notify from "../../../../utils/Notify";
import MyModal from "../../../items/MyModal";
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import AddCompanyForm from "../../../forms/AddCompanyForm";
import UpdateCompanyForm from "../../../forms/UpdateCompanyForm";

const UseStyles = makeStyles({
    tableButtons: {
        display: 'flex',
        flexDirection: 'column',
    },
    addCompany: {
        display: 'flex',
        justifyContent: 'end',
        marginBlock: theme.spacing(3),
    }
});


function CompanyTable(): JSX.Element {
    const classes = UseStyles();
    const [companies, setCompanies] = useState<Company[]>(GetCompanies());
    const [addCompanyOpen, setAddCompanyOpen] = useState<boolean>(false);
    const [updateCompanyOpen, setUpdateCompnayOpen] = useState<boolean>(false);
    const [companyToUpdate, setCompanyToUpdate] = useState<Company>(new Company())
    const columns = ["", "name", "email", "active coupons", ""]

    const deleteCompany = (companyId: number) => {
        AdminAxios.deleteCompany(companyId)
            .then(() => {
                DeleteCompany(companyId)
                notify.success("successfully deleted")
                setCompanies(GetCompanies())
            })
            .catch(err => { notify.error(err.response.data) })
    }

    return (
        <div>
            <div className={classes.addCompany}>
                <Button
                    onClick={() => setAddCompanyOpen(true)}
                    startIcon={<AddBusinessRoundedIcon fontSize="large" />}
                    size="large"
                    sx={{
                        fontFamily: 'Kanit',
                        color: theme.palette.secondary.dark,
                        "&:hover": {
                            bgcolor: theme.palette.secondary.dark,
                            color: theme.palette.primary.contrastText
                        }
                    }}
                >
                    <Typography
                        variant='subtitle1'
                        fontWeight={theme.typography.fontWeightMedium}
                    >
                        add company
                    </Typography>
                </Button>
            </div>

            <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
                <TableHead>
                    <TableRow sx={{ bgcolor: theme.palette.primary.main, borderBottom: theme.shadows }}>
                        {columns.map(
                            column =>
                                <TableCell align="center">
                                    <Typography variant="h6"> {column} </Typography>
                                </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companies.map(company =>
                        <TableRow key={company.id}>
                            <TableCell >
                                <img src={company.image} height="100px" width="100px" />
                            </TableCell>
                            <TableCell align="center">
                                <Typography> {company.name} </Typography>
                            </TableCell >
                            <TableCell align="center">
                                <Typography> {company.email} </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography > {company.coupons.length} </Typography>
                            </TableCell>
                            <TableCell className={classes.tableButtons} align="center">
                                <ButtonGroup
                                    orientation="vertical"
                                >
                                    <Button
                                        fullWidth
                                        onClick={() => {
                                            setUpdateCompnayOpen(true)
                                            setCompanyToUpdate(company)
                                        }}
                                    >
                                        update
                                    </Button>
                                    <Button
                                        fullWidth
                                        onClick={() => deleteCompany(company.id as number)}
                                    >
                                        delete
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <MyModal
                title="Add New Company"
                open={addCompanyOpen}
                close={() => setAddCompanyOpen(false)}
                content={<AddCompanyForm />}
            />
            <MyModal
                title="Update Company"
                open={updateCompanyOpen}
                close={() => setUpdateCompnayOpen(false)}
                content={<UpdateCompanyForm company={companyToUpdate} />}
            />
        </div>

    )
}

export default CompanyTable;