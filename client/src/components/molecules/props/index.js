import { appoinmentFormLabels, appoinmentFormLabels1, forgetPasswordLabels, loginLabels, signUpLabels } from '../../../constents/inputLevels'
import { appoinmentFormState, appoinmentFormState1, forgetPasswordState, loginState, signUpState } from '../../../constents/states'
import { StyledLink } from '../../atoms/Link/StyledLink'
import { loginSchema } from '../../organisms/schema/loginSchema'
import { forgetPasswordSchema, signUpschema } from '../../organisms/schema/signUpSchema'

const loginProps = (onSubmit) => {
  return {
    onSubmit,
    initialValues: structuredClone(loginState),
    validationSchema: loginSchema,
    title: 'Welcome back',
    labels: loginLabels,
    placeholder: loginLabels,
    buttonLabel: 'Submit',
    linkText: 'Sign-Up',
    linkTo: '/sign-up',
    extra: <StyledLink to={'/forget-password'}>{'Forget Password'}</StyledLink>,
  }
}
const registerProps = (onSubmit) => {
  return {
    onSubmit,
    initialValues: structuredClone(signUpState),
    validationSchema: signUpschema,
    title: 'Sign Up',
    labels: signUpLabels,
    buttonLabel: 'Submit',
    linkText: 'Login',
    linkTo: '/login',
  }
}
const forgetProps = (onSubmit) => {
  return { 
    onSubmit,
    initialValues:structuredClone(forgetPasswordState),
    validationSchema:forgetPasswordSchema,
    title:"Forget Password",
    labels:forgetPasswordLabels,
    buttonLabel:"Send Reset Link",
    linkText:"Back to Login",
    linkTo:"/login" }
}


const appoinmentForm1 = (onSubmit,formSubmitRef) => {
  return { 
    onSubmit,
    hideButton:true,
    version:"flat",
    initialValues:structuredClone(appoinmentFormState),
    // validationSchema:forgetPasswordSchema,
    // title:"Welcome back",
    labels:appoinmentFormLabels,
    // buttonLabel:"Send Reset Link",
    // linkText:"Back to Login",
    // linkTo:"/login" ,
    onExternalSubmit:(submitFunc) => (formSubmitRef.current = submitFunc),
    elementfun:(key, type, props)=>{
      props.size='small'
      props.labelflat=props.label
      props.placeholder=`Enter your ${props.label}`
      props.label=""
      props.sx={
        minWidth: '200px', 
        m:0.2,
        color: 'red',
        '& .MuiOutlinedInput-root': {
          borderRadius: '6px', 
        },
        '& .MuiInputBase-input': {
          fontSize: '0.7rem', 
          padding: '8px 12px', 
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.7rem',
        }
      }
      return { props, type }

    }
  }
}
const appoinmentForm2 = (onSubmit,formSubmitRef) => {
  return { 
    onSubmit,
    hideButton:true,
    version:"flat",
    initialValues:structuredClone(appoinmentFormState1),
    // validationSchema:forgetPasswordSchema,
    // title:"Welcome back",
    labels:appoinmentFormLabels1,
    // buttonLabel:"Send Reset Link",
    // linkText:"Back to Login",
    // linkTo:"/login" ,
    onExternalSubmit:(submitFunc) => (formSubmitRef.current = submitFunc),
    elementfun:(key, type, props)=>{
      props.size='small'
      props.labelflat=props.label
      props.placeholder=`Enter your ${props.label}`
      props.label=""
      props.sx={
        minWidth: '200px', 
        m:0.2,
        color: 'red',
        '& .MuiOutlinedInput-root': {
          borderRadius: '6px', 
        },
        '& .MuiInputBase-input': {
          fontSize: '0.6rem', 
          padding: '8px 12px', 
        },
        '& .MuiInputLabel-root': {
          fontSize: '0.7rem',
        }
      }
      return { props, type }

    }
  }
}



export { loginProps,registerProps,forgetProps,appoinmentForm1,appoinmentForm2 }
