// our-domain.com/new-meetup
import Head from 'next/head';
import { Fragment } from 'react';

import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();

	const addMeetupHandler = async (enteredMeetupData) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Not working');
		}

		const data = await response.json();

		console.log(data);

		router.push('/');
	};

	return (
		<Fragment>
			<Head>
				<title>Add a New Meetup</title>
				<meta
					name='description'
					content='Add your own meetups and create amazing networking opporunities'
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	);
};

export default NewMeetupPage;
