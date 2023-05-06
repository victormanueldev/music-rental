import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { LoaderButton } from '../../admin/components/LoaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';
import { Alerts } from '../../admin/components/Alerts';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), 'Email must have at least one @.'],
  password: [(value) => value.length >= 6, 'Password must be larger than 6 characters.'],
  displayName: [(value) => value.length >= 1, 'Name is required.']
};

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations);

  const isCheckingAuthentication = useMemo(() => {
    if (status === 'checking') return true;
    return false;
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };

  return (
    <AuthLayout>
      {!!errorMessage && <Alerts type="error" message={errorMessage}></Alerts>}
      <form className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-12">
          <label
            htmlFor="hs-validation-name-error"
            className="block text-sm font-medium text-gray-700">
            Display Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="hs-validation-name-error"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              className={`${
                !!displayNameValid && formSubmitted
                  ? 'focus:border-red-500 focus:ring-red-500 border-red-500'
                  : ''
              } mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
              aria-describedby="hs-validation-name-error-helper"></input>
            {!!displayNameValid && formSubmitted ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {!!displayNameValid && formSubmitted ? (
            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">
              {displayNameValid}
            </p>
          ) : null}
        </div>

        <div className="col-span-12">
          <label
            htmlFor="hs-validation-email-error"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="hs-validation-email-error"
              name="email"
              value={email}
              onChange={onInputChange}
              className={`${
                !!emailValid & formSubmitted
                  ? 'focus:border-red-500 focus:ring-red-500 border-red-500'
                  : ''
              } mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
              aria-describedby="hs-validation-email-error-helper"></input>
            {!!emailValid && formSubmitted ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {!!emailValid && formSubmitted ? (
            <p className="text-sm text-red-600 mt-2" id="hs-validation-email-error-helper">
              {emailValid}
            </p>
          ) : null}
        </div>

        <div className="col-span-12">
          <label
            htmlFor="hs-validation-password-error"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="hs-validation-password-error"
              name="password"
              value={password}
              onChange={onInputChange}
              className={`${
                !!passwordValid & formSubmitted
                  ? 'focus:border-red-500 focus:ring-red-500 border-red-500'
                  : ''
              } mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
              aria-describedby="hs-validation-password-error-helper"></input>
            {!!passwordValid && formSubmitted ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {!!passwordValid && formSubmitted ? (
            <p className="text-sm text-red-600 mt-2" id="hs-validation-password-error-helper">
              {passwordValid}
            </p>
          ) : null}
        </div>

        <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
          <button
            disabled={isCheckingAuthentication}
            type="submit"
            className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500 disabled:opacity-75 disabled:cursor-not-allowed"
            onClick={(e) => handleSubmit(e)}>
            <LoaderButton isLoading={isCheckingAuthentication}></LoaderButton>
            <span className="text-sm font-medium mr-4">Sign Up</span>
          </button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?{' '}
            <Link to="/auth/login">
              <a className="text-gray-700 underline">Log in</a>.
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};
