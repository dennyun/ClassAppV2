// Imports
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { FormHelperText} from "@material-ui/core";
import { Grid, Avatar, Link} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from "react-router-dom";
import {login} from "../../../actions/accountActions";

import { useDispatch } from "react-redux";

// Styles NavBar - Material ui
const useStyles = makeStyles({
    grid:{
        height: '15vh'
    }
})

function Form() {
    const classes = useStyles();
    const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch()

    // async function handleLogin(){
    //     try {
    //         await dispatch(login(email, password));
    //         navigate('/');
    //     } catch (error) {
    //         setErrorMessage(error.response.data.message);
    //     }
    // }

    return( 
        <div>
            <div className="paper">
                <Grid className={classes.grid} align='center'>
                    <Avatar className='avatarStyle'><LockOutlined /></Avatar>
                    <h2 className="login-box">Entrar</h2>
                </Grid>

                  <Formik 
                  initialValues={{
                    email: '', 
                    password: ''
                  }} 
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email('Favor informar um email válido')
                      .max(255)
                      .required('Favor informar o email'),
                    password: Yup.string()
                      .max(255)
                      .required('Favor informar o password'),
                  })}
                  onSubmit={async (values, {
                    setErrors, setStatus, setSubmitting
                  }) => {
                    try {
                      await dispatch(login(values.email, values.password));
                      navigate('/');
                  } catch (error) {
                    const message =
                    (error.response && error.response.data.message) ||
                    'Alguma coisa aconteceu';
  
                    setStatus({ success: false });
                    setErrors({ submit: message });
                    setSubmitting(false);
                  }
                  }}>
                    {({ errors, handleChange, handleSubmit, isSubmitting, values, touched }) => (
                      <form noValidate onSubmit={handleSubmit}>
                          <div className='wrap-input'>
                              <input 
                              className={values.email !== '' ? 'has-value input' : 'input'} 
                              type='email' 
                              name="email" 
                              value={values.email} 
                              onChange={handleChange} 
                              error={Boolean(errors.email)}
                              helperText={errors.email}
                              />
                              <span className='focus-input' data-placeholder='Email'> </span>
                          </div>
                          
                          {errors.email ? <div className="error"> {errors.email} </div> : null}

                          <div className="grow"></div>
                          
                          <div className='wrap-input'>
                              <input 
                              className={values.password !== '' ? 'has-value input' : 'input'} 
                              type='password' 
                              name="password" 
                              value={values.password} 
                              onChange={handleChange}
                              error={Boolean(errors.password)}
                              helperText={errors.password}
                              />
                              <span className='focus-input' data-placeholder='Password' type='password' > </span>
                          </div>

                          {errors.password ? <div className="error"> {errors.password} </div> : null}

                          <div className="grow"></div>

                          <div className='container-btn'>
                              <button className='btn' type="submit" disabled={isSubmitting}> Entrar </button>
                          </div>
                        
                          {
                              errors.submit &&
                              <FormHelperText error>
                                  {errors.submit}
                              </FormHelperText>
                          }
                        
                          <div className="text">
                              <Link href="#" underline="none" variant="body1">
                                  {'Esqueceu sua senha?'}
                              </Link>
                          </div>

                        
                        <div className="text2"> 
                            <span> Não tem uma conta?</span>
                            <Link href="/register" underline="none" variant="body1" sx={{marginLeft: '8px'}}>
                                {'Registra-se'}
                            </Link>
                        </div>
                      </form>
                    )}
                  </Formik>
            </div>
        </div>

    )
}

export default Form;