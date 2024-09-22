import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import AccountPaginationTable from "./AccountPaginationTable";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
    }
}));

export default function AccountType() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "Account Management", path: "/account-management/account-type" }, { name: "Account Type" }]} />
            </Box>
            <SimpleCard title="List of Account Types">
                <AccountPaginationTable />
            </SimpleCard>
        </Container>
    );
}
