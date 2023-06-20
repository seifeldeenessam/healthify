import Button from '@/components/button';
import IDoctor from '@/types/doctor';
import { ArrowSquareOut } from '@phosphor-icons/react';
import Image from 'next/image';
import './styles.css';

type Props = {
	doctor: IDoctor;
};

export default function DoctorTile({ doctor }: Props) {
	return (
		<div className='doctor-tile'>
			<div className="image">
				<Image src={`/assets/images/users/${doctor.image}`} alt={`Dr. ${doctor.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
			</div>
			<div className="details">
				<h6>{doctor.name}</h6>
				<small>{doctor.specialization}</small>
			</div>
			<Button style={{ theme: 'primary', shape: 'circular', bordered: false, small: true }} content={<ArrowSquareOut />} href={`/doctors/${doctor.id}`} />
		</div>
	);
}
