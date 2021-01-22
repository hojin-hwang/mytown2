import React, { memo, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            display: "flex",
            justifyContent: "center",
      },
      display: "flex",
      width: "100%"
    },
    input: {
      display: 'none',
    },
    button: {
        margin: theme.spacing(1),
    },
}));
  
const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event =>{
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        //console.log(uploaded);
        onFileChange({
            name:uploaded.original_filename,
            url:uploaded.url
        });
    }

    return ( 
        <div className={classes.root}>
            
            {/*<input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" 
                onChange={onChange}
            />*/}
            <input accept="image/*" ref={inputRef} onChange={onChange} className={classes.input} id="contained-button-file"
                multiple type="file" />
            {!loading &&
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="default" className={classes.button} startIcon={<CloudUploadIcon />}
                    onClick={onButtonClick}
                    > 새로운 가게 이미지를 선택하세요</Button>
                </label>
            }
        </div>
    );
});

export default ImageFileInput;