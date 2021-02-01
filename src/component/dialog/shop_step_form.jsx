import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LocationEditByMap from '../contents/location_edit_by_map';
import ShopInfoEdit from './shop_info_edit';
import ShopSignEdit from './shop_sign_edit';
import validate from '../../service/validate'
import useForm from '../../service/use_form';
import UseRepository from '../../service/user_repository';

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

export default function ShopStepForm({shop_data, FileInput}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstStep, setFirstStep] = React.useState(true);
  const [secondStep, setSecondStep] = React.useState(false);
  const [thirdStep, setThirdStep] = React.useState(false);
  
  const { values, errors, submitting, handleChange, handleSubmit, locationChange } = useForm({
    initialValues: shop_data,
    onSubmit: (values) => {
      userRepository.saveShop(values);
    },
    validate,
  })

  const maxSteps = 3;

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
  }

  useEffect(()=>{
    //console.log(shop_data);
  },[shop_data]);

  return (
    
    <div >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div className={clsx({ [classes.hide]: !firstStep })}>
                  <LocationEditByMap  location_data={shop_data} locationChange={locationChange}/>
              </div> 
              <div className={clsx({ [classes.hide]: !secondStep })} >
                  <ShopInfoEdit shop_data={shop_data} handleChange={handleChange}/>
              </div> 
              <div className={clsx({ [classes.hide]: !thirdStep })}>
                  <ShopSignEdit shop_data={shop_data} FileInput={FileInput} handleChange={handleChange}/>
              </div>
          </form>    

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