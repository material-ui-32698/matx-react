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

export default function AccountList() {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "Account Management", path: "/account-management/account-list" }, { name: "Account List" }]} />
            </Box>
            <SimpleCard title="List of Accounts">
                <AccountPaginationTable />
            </SimpleCard>
        </Container>
    );
}
