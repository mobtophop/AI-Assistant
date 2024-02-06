import React, {FC, useState} from 'react';
import {Block} from './Block';
import {UserNameInput} from '../UIComponents/FormComp/UserNameInput';
import {PasswordInput} from '../UIComponents/FormComp/PasswordInput';
import {FormButton} from '../UIComponents/FormComp/FormButton';
import {Text} from './Text';
import {ErrorMessage, Formik} from 'formik';
import {RegistrationSchema} from '../Validation/RegistrationSchema';

type FormType = 'Registration' | 'SignIn';
interface Props {
  formType: FormType;
  handleOnSubmit: any;
  handleTouchIDAuth?: any;
}

const initialFormValues = {
  email: '',
  password: '',
};

export const UIForm: FC<Props> = ({
  formType,
  handleOnSubmit,
  handleTouchIDAuth,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisible = () => {
    setIsPasswordVisible(value => !value);
  };

  const isRegistrationForm = formType === 'Registration';
  const isAuthForm = formType === 'SignIn';

  const buttonText = formType === 'Registration' ? 'REGISTRATION' : 'SIGN IN';
  const validation = isRegistrationForm ? RegistrationSchema : undefined;
  return (
    <Formik
      initialValues={initialFormValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleOnSubmit}
      validationSchema={validation}>
      {({
        handleSubmit,
        values,
        setErrors,
        setFieldValue,
        handleChange,
        errors,
      }) => {
        console.warn(errors);
        const handleEmailInput = (value: string) => {
          console.log('value');
          console.log(value);
          const updatedErrors = {...errors};
          delete updatedErrors.email;
          setErrors(updatedErrors);
          setFieldValue('email', value);
        };
        return (
          <Block alignItems={'center'}>
            <UserNameInput
              value={values.email}
              name={'email'}
              onChangeText={handleEmailInput}
            />
            {isRegistrationForm && (
              <ErrorMessage name="email">
                {msg => {
                  return <Text color={'red'}>{msg}</Text>;
                }}
              </ErrorMessage>
            )}
            <PasswordInput
              value={values.password}
              name={'password'}
              onChangeText={handleChange('password')}
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisible={togglePasswordVisible}
            />
            {isRegistrationForm && (
              <ErrorMessage name={'password'}>
                {msg => {
                  console.warn(msg);
                  console.warn(errors);
                  return <Text>{msg}</Text>;
                }}
              </ErrorMessage>
            )}
            <FormButton onPress={handleSubmit} buttonText={buttonText} />
            {isAuthForm && (
              <FormButton
                onPress={handleTouchIDAuth}
                buttonText={'Connect with TouchID'}
              />
            )}
            <Text fontSize={'11px'} marginTop={20}>
              2.3.19 (202012041745) - DEBUG
            </Text>
          </Block>
        );
      }}
    </Formik>
  );
};
