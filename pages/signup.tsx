import { useState } from 'react';
import type { NextPage } from 'next'  
import Link from 'next/link';
import { InputComponent } from '../components/InputComponent'; 
import MetaComponents from '../components/MetaComponents'
import FooterComponent from '../components/FooterComponent' 


const SignUp: NextPage = () => {
  const intialValues = { name: "", company: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({name: '', company: '', email:'', password: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values: { name?: string; company?: string; email: any; password: any; }) => {
    let errors = {
      name:     '',
      company:  '',
      email:    '',
      password: ''
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Cannot be blank";
    }

    if (!values.company) {
      errors.company = "Cannot be blank";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } 

    return errors;
  };
 
  
  return (
    <div className="container">
      <MetaComponents/> 

      <main className="main">         
        <div>
          <h1>Sign Up</h1> 
          <form onSubmit={handleSubmit} noValidate>
            <InputComponent
                label="Name"
                type="text"
                name="name"
                id="name"
                placeholder="Please input Your Name"
                value={formValues.name}
                onChange={handleChange}
                error={formErrors.name}
              />
            <InputComponent
              label="Company"
              type="text"
              name="company"
              id="company"
              placeholder="Please input Your Company"
              value={formValues.company}
              onChange={handleChange}
              error={formErrors.company}
            /> 
            <InputComponent
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Please input Your Email"
              value={formValues.email}
              onChange={handleChange}
              error={formErrors.email}
            />
            <InputComponent
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Please input Your Password"
              value={formValues.password}
              onChange={handleChange}
              error={formErrors.password}
            /> 
            <button type="submit">Sign Up</button>
            <div className='nextpart'>
              If you already have an account, <Link href='/signin'>SignIn</Link>
            </div>
          </form>          
        </div>
      </main>

      <FooterComponent/>
    </div>
  )
}

export default SignUp
