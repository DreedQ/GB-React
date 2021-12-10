import AppBar from '@mui/material/AppBar';
function HeaderMenu() {

    return(
        <AppBar position="static" color="primary" sx={{
            display: 'flex',
            p: 3,
            m: 1,
            height: 50,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <span>Messenger</span>
        </AppBar>
    )
}
export default HeaderMenu