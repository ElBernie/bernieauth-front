import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { useMutation } from 'react-query';
import axios from '../../utils/axios.util';
import { AxiosError } from 'axios';

/**
 * SCHEMA AND TYPE DEFINITIONS
 */
const registerFormSchema = z
	.object({
		email: z
			.string({
				required_error: 'REGISTER_EMAIL_REQUIRED',
			})
			.email({ message: 'REGISTER_EMAIL_FORMAT' }),
		password: z
			.string({ required_error: 'REGISTER_PASSWORD_REQUIRED' })
			.min(8, { message: 'REGISTER_PASSWORD_SIZE' }),
		passwordConfirmation: z
			.string({ required_error: 'REGISTER_PASSWORD_CONFIRMATION_REQUIRED' })
			.min(8, { message: 'REGISTER_PASSWORD_SIZE' }),
		firstName: z
			.string({ required_error: 'REGISTER_FIRSTNAME_REQUIRED' })
			.trim()
			.nonempty({
				message: 'REGISTER_FIRSTNAME_REQUIRED',
			}),
		name: z.optional(z.string()),
	})
	.partial()
	.refine((values) => values.password === values.passwordConfirmation, {
		path: ['passwordConfirmation'],
		message: 'REGISTER_PASSWORD_DIFFERENT',
	});
type RegisterForm = z.infer<typeof registerFormSchema>;

const Register = () => {
	const { t } = useTranslation();

	const { mutate, isLoading, data, error } = useMutation({
		mutationFn: (data: RegisterForm) => {
			delete data.passwordConfirmation;
			return axios.post(
				`${import.meta.env.VITE_AUTH_SERVER_URL}/auth/register`,
				data
			);
		},
		onError: (error: AxiosError) => {
			if (error.response?.status == 409) {
				setError('email', { message: 'REGISTER_EMAIL_ALREADY_IN_USE' });
			}
		},
	});

	const {
		register: registerInput,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<RegisterForm>({
		resolver: zodResolver(registerFormSchema),
		mode: 'onChange',
	});

	const register = (data: RegisterForm) => mutate(data);

	return (
		<div className='bg-sky-600  flex flex-col justify-center items-center grow'>
			<h1 className='text-3xl font-bold text-white drop-shadow'>
				Register an account
			</h1>

			<form
				onSubmit={handleSubmit(register)}
				className='container  mx-auto flex w-4/12 max-lg:w-full flex-col bg-white  rounded-md p-5 m-5 shadow-white drop-shadow-lg '
			>
				<div className='flex max-md:flex-col justify-between  gap-x-5'>
					<fieldset className='flex flex-col py-4 basis-6/12  '>
						<span>
							{t('forms.register.firstName')}
							<span className='text-red-500 text-sm'>*</span>
						</span>

						<input
							className={`form-input ${errors.firstName && 'border-red-500'}`}
							type='text'
							{...registerInput('firstName')}
							autoComplete='given-name'
							placeholder={t('forms.register.placeholder.firstName') as string}
						/>
						<p className='text-red-500'>
							{errors.firstName?.message &&
								t(`validation:${errors.firstName.message}`)}
						</p>
					</fieldset>
					<fieldset className='flex flex-col py-4 basis-6/12'>
						{t('forms.register.name')}
						<input
							className={`form-input ${errors.name && 'border-red-500'}`}
							type='text'
							{...registerInput('name')}
							autoComplete='family-name'
							placeholder={t('forms.register.placeholder.name') as string}
						/>
						<p className='text-red-500'>
							{errors.name?.message && t(errors.name.message)}
						</p>
					</fieldset>
				</div>
				<fieldset className='flex flex-col py-4'>
					<label>
						{t('forms.register.email')}
						<span className='text-red-500 text-sm'>*</span>
					</label>
					<input
						className={`form-input ${errors.email && 'border-red-500'}`}
						type='email'
						{...registerInput('email')}
						autoComplete='email'
						placeholder={t('forms.register.placeholder.email') as string}
					/>
					<p className='text-red-500'>
						{errors.email?.message && t(`validation:${errors.email.message}`)}
					</p>
				</fieldset>
				<fieldset className='flex flex-col py-4'>
					<label>
						{t('forms.register.password')}
						<span className='text-red-500 text-sm'>*</span>
					</label>
					<input
						className={`form-input ${errors.password && 'border-red-500'}`}
						type='password'
						{...registerInput('password')}
						autoComplete='new-password'
						placeholder={t('forms.register.placeholder.password') as string}
					/>
					<p className='text-red-500'>
						{errors.password?.message &&
							t(`validation:${errors.password.message}`)}
					</p>
				</fieldset>
				<fieldset className='flex flex-col py-4'>
					<label>
						{t('forms.register.passwordConfirmation')}
						<span className='text-red-500 text-sm'>*</span>
					</label>
					<input
						className={`form-input ${
							errors.passwordConfirmation && 'border-red-500'
						}`}
						type='password'
						{...registerInput('passwordConfirmation')}
						autoComplete='new-password'
						placeholder={
							t('forms.register.placeholder.passwordConfirmation') as string
						}
					/>
					<p className='text-red-500'>
						{errors.passwordConfirmation?.message &&
							t(`validation:${errors.passwordConfirmation.message}`)}
					</p>
				</fieldset>

				{error && <p>{JSON.stringify(error)}</p>}
				{data && <p>{JSON.stringify(data)}</p>}
				<button type='submit' className='my-4'>
					{t('forms.register.submit')}
				</button>
			</form>
		</div>
	);
};
export default Register;
