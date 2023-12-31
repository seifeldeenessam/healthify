"use client";

import { searchDoctors } from '@/app/api/users/route';
import MagnifyingGlassIcon from '@/public/assets/svgs/icons/regular/magnifying-glass.svg';
import XIcon from '@/public/assets/svgs/icons/regular/x.svg';
import IDoctor from '@/types/doctor';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../button';
import TextInput from '../inputs/text';
import DoctorTile from '../tiles/doctor';
import './styles.css';

export default function Header() {
	const [searching, setSearching] = useState(false);
	const [data, setData] = useState<{ term: string, results: IDoctor[]; message?: string; }>({ term: "", results: [], message: undefined });

	async function search(term: string) {
		const doctors: IDoctor[] | { message: string; } = await searchDoctors(term);
		if (Array.isArray(doctors)) {
			if (doctors.length > 0) {
				setData((prev: any) => ({ ...prev, results: doctors }));
			} else {
				setData((prev: any) => ({ ...prev, results: [] }));
			}
		} else {
			setData((prev: any) => ({ ...prev, message: doctors.message }));
		}
	}

	useEffect(() => {
		search(data.term);
		if (data.term === "") setData((prev: any) => ({ ...prev, message: undefined }));
	}, [data.term]);

	return (
		<header>
			<Link href={"/"}>
				<Image src={"/assets/svgs/logo.svg"} alt='Healthify' fill priority />
			</Link>
			<Button style={{ theme: 'primary', shape: 'circular', outlined: true }} content={searching ? <XIcon /> : <MagnifyingGlassIcon />} action={() => setSearching((prev) => prev = !prev)} />
			<aside className={searching ? "visible" : undefined}>
				<TextInput name='term' placeholder='Search for doctor names' setter={setData} />
				{data.results.length > 0
					? <ul id='search-results'>{data.results.map((result) => <DoctorTile doctor={result} key={result.id} />)}</ul>
					: data.message && <ul id='search-results'><span>{data.message}</span></ul>
				}
			</aside>
		</header>
	);
}