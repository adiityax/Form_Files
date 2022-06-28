import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import ResponsiveAppBar from './Appbar.tsx';
import { useForm } from "react-hook-form";


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
    <ResponsiveAppBar />
    <Container  component="main" maxWidth="xs" sx = {{padding: '2vw'}}>
      <div>
        <Typography  component="h1" variant="h5" sx = {{fontFamily: 'serif'}}>
          Personal Details
        </Typography>
        <form style = {{ border: 'solid black 1px ', padding: '4vw'}} onSubmit = { handleSubmit(onSubmit) }>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={12} sm={6}>
            <input className='name-btn'{...register("firstname", { required: true, maxLength: 20 })} autoComplete="firstname" placeholder='First Name' onChange={handleChange('firstName')} value={values.firstName}/>
              {/* <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              /> */}
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
            <input className='name-btn'{...register("lastname", { required: true, maxLength: 20 })} autoComplete="lastname" placeholder='Last Name' onChange={handleChange('lastName')} value={values.lastName}/>
              {/* <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              /> */}
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
            <input {...register("country", { required: true, maxLength: 20 })} autoComplete="country" placeholder='Country' onChange={handleChange('country')} value={values.country}/>

              {/* <TextField 
                placeholder="Country of Residence"
                label="Country of Residence"
                onChange={handleChange('country')}
                defaultValue={values.country}
                autoComplete="country"
                fullWidth
              /> */}
            </Grid>

            {/* level of education */}
            <Grid item xs={12}>
            <input {...register("levelofeducation", { required: true, maxLength: 20 })} autoComplete="levelofeducation" placeholder='Level of Education' onChange={handleChange('levelOfEducation')} value={values.levelOfEducation}/>
              {/* <TextField 
                placeholder="Level of Education"
                label="Level of Education"
                onChange={handleChange('levelOfEducation')}
                defaultValue={values.levelOfEducation}
                autoComplete="Level of Education"
                fullWidth
              /> */}
            </Grid>
            <br />
            <div className='button-submit'>
            <input type="submit" sx = {{background: 'rgb(46, 48, 118)'}} />
            </div>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx = {{background: 'rgb(46, 48, 118)'}}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx = {{background: 'rgb(46, 48, 118)'}}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  )
}

export default PersonalDetails