import EyeClosedIcon from '@/public/assets/svgs/icons/regular/eye-closed.svg';
import EyeIcon from '@/public/assets/svgs/icons/regular/eye.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../../button';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
	setter: Dispatch<SetStateAction<any>>;
};

export default function PasswordInput({ name, placeholder, setter }: Props) {
	const [secured, setSecured] = useState<boolean>(true);

	return (
		<div className='password-input'>
			<input type={secured ? 'password' : 'text'} name={name} placeholder={placeholder} onChange={(e) => setter((prev: any) => ({ ...prev, [name]: e.target.value }))} />
			<Button style={{ theme: 'primary', shape: 'circular', outlined: false }} content={secured ? <EyeIcon /> : <EyeClosedIcon />} action={() => setSecured(current => !current)} />
		</div>
	);
}
