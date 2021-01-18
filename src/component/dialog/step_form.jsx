import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ShopEdit from './shop_edit';

const useStyles = makeStyles((theme) => ({
  
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
  }
}));

export default function StepForm({shop_data}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstStep, setFirstStep] = React.useState(true);
  const [secondStep, setSecondStep] = React.useState(0);
  const [thirdStep, setThirdStep] = React.useState(0);
  const [fourthStep, setFourthStep] = React.useState(0);
  const [fifthStep, setFifthStep] = React.useState(0);

  const maxSteps = 5;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
    setCurrentForm(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentForm(activeStep -1);
  };

  const setCurrentForm = (activeStep) => {
    (activeStep === 0) ? setFirstStep(true)  : setFirstStep(false);
    (activeStep === 1) ? setSecondStep(true)  : setSecondStep(false);
    (activeStep === 2) ? setThirdStep(true)  : setThirdStep(false);
    (activeStep === 3) ? setFourthStep(true)  : setFourthStep(false);
    (activeStep === 4) ? setFifthStep(true)  : setFifthStep(false);
  }

  return (
    <div className={classes.root}>

      <ShopEdit shop_data={shop_data}/>

      <MobileStepper
        className = {classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />

    </div>
  );
}