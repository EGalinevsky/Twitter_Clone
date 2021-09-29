import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Radio from '@material-ui/core/Radio';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControl from '@material-ui/core/FormControl';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
import { useStylesSignIn } from '../../pages/Signin';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalProps> = ({ title, children, visible = false, onClose }: ModalProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }
    return (
        <Dialog open={visible} onClose={onClose} >
            <DialogTitle id='form-dialog-title'>
                <IconButton onClick={onClose} color="secondary" aria-label="close" >
                    <CloseIcon style={{ fontSize: 26 }} color="primary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    )
}
