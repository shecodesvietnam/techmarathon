import React, { useState } from 'react';
import { toast } from 'react-toastify';
import logger from './../services/logService';
import { save } from './../services/firebaseService';

function Form(props) {
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');
	const [school, setSchool] = useState('');
	const [fbLink, setFbLink] = useState('');
	const [question, setQuestion] = useState('');
	const [expectation, setExpectation] = useState('');

	const reset = () => {
		setName('');
		setDate('');
		setEmail('');
		setTel('');
		setSchool('');
		setFbLink('');
		setQuestion('');
		setExpectation('');
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await save({
				name,
				date,
				email,
				tel,
				school,
				fbLink,
				question,
				expectation,
			});
			reset();
			toast.success('Bạn đã đăng ký thành công');
		} catch (exc) {
			logger.log(exc);
			toast.error(
				'Hệ thống đang gặp trục trặc. Vui lòng thử lại hoặc liên hệ với chúng tôi'
			);
		}
	};

	return (
		<div className='row card'>
			<form className='form' onSubmit={handleSubmit}>
				<div className='row u-center-text'>
					<h2 className='heading-secondary'>Đăng ký tham gia lớp học</h2>
				</div>
				<div className='form__group'>
					<label htmlFor='name' className='form__label'>
						Họ tên{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='name'
						type='text'
						value={name}
						className='form__input'
						placeholder='Your answer'
						required
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='date-of-birth' className='form__label'>
						Ngày sinh{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='date-of-birth'
						type='date'
						value={date}
						className='form__input'
						placeholder='Ngày sinh'
						required
						onChange={(event) => setDate(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='email' className='form__label'>
						Địa chỉ email{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='email'
						type='email'
						value={email}
						className='form__input'
						placeholder='Your answer'
						required
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='phone' className='form__label'>
						Số điện thoại{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='phone'
						type='tel'
						value={tel}
						className='form__input'
						placeholder='Your answer'
						required
						onChange={(event) => setTel(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='school' className='form__label'>
						Trường học/Nơi bạn công tác{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='school'
						type='text'
						value={school}
						className='form__input'
						placeholder='Your answer'
						required
						onChange={(event) => setSchool(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='facebook-link' className='form__label'>
						Link facebook cá nhân{' '}
						<abbr title='required' aria-label='required'>
							*
						</abbr>
					</label>
					<input
						id='facebook-link'
						type='url'
						value={fbLink}
						className='form__input'
						placeholder='Your answer'
						required
						onChange={(event) => setFbLink(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='question' className='form__label'>
						Bạn có câu hỏi gì cho Tech Marathon không?
					</label>
					<input
						id='question'
						type='text'
						value={question}
						className='form__input'
						placeholder='Your answer'
						onChange={(event) => setQuestion(event.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='expectation' className='form__label'>
						Bạn mong được học hỏi điều gì nhất từ Tech Marathon?
					</label>
					<input
						id='expectation'
						type='text'
						value={expectation}
						className='form__input'
						placeholder='Your answer'
						onChange={(event) => setExpectation(event.target.value)}
					/>
				</div>
				<div className='form__group u-center-text u-margin-top-medium'>
					<button className='btn btn--primary'>Đăng ký</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
