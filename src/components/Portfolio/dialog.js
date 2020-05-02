import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image from 'react-bootstrap/Image';


export default function ScrollDialog({data:{name, img1, img2, img3, img4}}) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button
                onClick={handleClickOpen('body')}
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}>
                See Gallery
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                {/* {data.name} */}
                <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <div style={{display:'flex'}}>
                
                <Image style={{padding:'10px'}} width="60%" height="100%" src={img1} rounded />
                <Image style={{padding:'10px'}} width="60%" height="100%" src={img2} rounded />
                {(img3) == '' || null ? null :
                <Image style={{padding:'10px'}} width="60%" height="100%" src={img3} rounded />
                }
                {(img4) == '' || null ? null :
                <Image style={{padding:'10px'}} width="60%" height="100%" src={img4} rounded />
                }
                </div>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
