
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Avatar, MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/accountActions"
import { useNavigate } from "react-router-dom";

function Account() {
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLogout = () => {
        handleClose();
        dispatch(logout());
        navigate('/');
    }

    return(
        <>
            <Avatar 
            className="avatar-header"
            ref={ref} 
            onClick={handleOpen} 
            alt="Remy Sharp" 
            src={account.user && account.user.avatar} 
            />

            {isAuthenticated ? (
                <Menu 
                    anchorEl={ref.current} 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} 
                    open={isOpen} 
                    onClose={handleClose}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={() => navigate(`/${account.user?.username}`)}> Perfil </MenuItem>
                    <MenuItem> Meus Posts </MenuItem>
                    <MenuItem> Minhas Conexões </MenuItem>
                    <MenuItem onClick={handleLogout}> Sair </MenuItem>
                </Menu>
                ) : (
                <Menu 
                    anchorEl={ref.current} 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} 
                    open={isOpen} 
                    onClose={handleClose}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={() => navigate('/login')}> Entrar </MenuItem>
                    <MenuItem onClick={() => navigate('/register')}> Registrar </MenuItem>
                </Menu>
                )}
        </>
    )
}

export default Account;