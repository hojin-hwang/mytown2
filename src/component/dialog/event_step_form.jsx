import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import EventType from './event_type';
import EventEdit from './event_edit';
import validate from '../../service/validate'
import useForm from '../../service/use_form';
import UseRepository from '../../service/user_repository';
import Snackbar from '@material-ui/core/Snackbar';


const userRepository = new UseRepository();

const useStyles = makeStyles((theme) => ({
root : {
padding : "1em",
},
default : {
display:"none",
},
currentStep : {
display:"block",
backgroundColor : "pink",
},
stepper : {
position: "fixed",
bottom: 0,
right: 0,
left: 0,
},
hide: { display: 'none',}
}));

export default function EventStepForm({eventData, FileInput,setFormClose}) {
const classes = useStyles();
const theme = useTheme();
const [activeStep, setActiveStep] = useState(0);
const [firstStep, setFirstStep] = useState(true);
const [secondStep, setSecondStep] = useState(false);
const [eventPic, setEventPic] = useState(true);
const [success_open, setSuccessOpen] = useState(false);
    
const { values, errors, submitting, handleChange, handleSubmit } = useForm({
initialValues: eventData,
onSubmit: (values) => {
userRepository.saveEvent(values);
    if (submitting)
    {
        setSuccessOpen(true);
        setTimeout(() => {
            setFormClose();
        }, 1500);
    }
},
validate,

})

const maxSteps = 2;

const handleNext = (event_type) => {
setActiveStep((prevActiveStep) => prevActiveStep + 1);
setCurrentForm(activeStep + 1);

const event_pic = (event_type === 't')? false : true;
setEventPic(event_pic);

};

const handleBack = () => {
setActiveStep((prevActiveStep) => prevActiveStep - 1);
setCurrentForm(activeStep -1);

};

const setCurrentForm = (activeStep) => {
(activeStep === 0) ? setFirstStep(true) : setFirstStep(false);
(activeStep === 1) ? setSecondStep(true) : setSecondStep(false);
}

const handleClose = () => {
    setSuccessOpen(false);
};    

return (

    <div>

        <Snackbar open={success_open} message="정상적으로 등록되었습니다" autoHideDuration={2000} onClose={handleClose} />

        <form id="shop_event_form" className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className={clsx({ [classes.hide]: !firstStep })}>
            <EventType handleNext={handleNext} />
        </div>
        <div className={clsx({ [classes.hide]: !secondStep })}>
            <EventEdit eventData={eventData} FileInput={FileInput} handleChange={handleChange} eventPic={ eventPic } />
        </div>
        </form>



    <MobileStepper className={classes.stepper} steps={maxSteps} position="static" variant="dots" activeStep={activeStep}
        nextButton={ <Button size="small" onClick={handleNext} disabled={activeStep===maxSteps - 1}>
        Next
        {theme.direction === 'rtl' ?
        <KeyboardArrowLeft /> :
        <KeyboardArrowRight />}
        </Button>
        }
        backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep===0}>
            {theme.direction === 'rtl' ?
            <KeyboardArrowRight /> :
            <KeyboardArrowLeft />}
            Back
        </Button>
        }
        />

</div>
);
}