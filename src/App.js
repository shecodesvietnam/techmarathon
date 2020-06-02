import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import logo from './assets/logo-2020.png';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';
import logger from './services/logService';

logger.init();

function App() {
	return (
		<Fragment>
			<ToastContainer style={{ zIndex: 1000000 }} />
			<header className='header'>
				<div className='header__nav u-padding-top-small'>
					<div className='header__nav-box'>
						<div className='header__logo-box'>
							<a href='index.html' className='navigation__link'>
								<img src={logo} alt='SheCodes Logo' className='header__logo' />
							</a>
						</div>

						<div className='navigation'>
							<input
								type='checkbox'
								className='navigation__checkbox'
								id='navi-toggle'
							/>
							<label htmlFor='navi-toggle' className='navigation__button'>
								<span className='navigation__icon'>&nbsp;</span>
							</label>

							<nav className='navigation__nav-box'>
								<ul className='navigation__list u-padding-top-extra-small'>
									<li className='navigation__item'>
										<a href='#register' className='navigation__link'>
											Đăng ký tham gia
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className='header__tm-image-box'>
					<div className='heading__tm-text-box u-center-text'>
						<h1 className='heading-primary--main-white'>
							Bạn có đủ sức bền chạy theo công nghệ
						</h1>
						<p className='u-size-16 u-margin-top-medium'>
							<em>Lần đầu tiên xuất hiện tại SheCodes</em>
						</p>
					</div>
				</div>
			</header>
			<main>
				<article className='article-tm-about'>
					<div className='u-center-text u-margin-bottom-medium'>
						<h2 className='heading-secondary'>Giới thiệu</h2>
					</div>
					<div className='row'>
						<p className='paragraph u-size-20'>
							Trong những năm vừa qua, SheCodes Vietnam đã dần khẳng định được
							vị trí của mình trong việc kết nối và xây dựng cộng đồng phái nữ
							ngành Công nghệ thông tin tại Việt Nam - sáng tạo và vô cùng tài
							năng! Tech Marathon là dự án dạy Code được SheCodes Vietnam lập ra
							với mục tiêu đưa công nghệ thông tin đến gần hơn với các bạn, đặc
							biệt tới phái nữ.
						</p>
					</div>
				</article>
				<article className='article-progress'>
					<div className='row u-center-text'>
						<h2 className='heading-secondary--white'>
							Quy trình tạo ra lớp học
						</h2>
					</div>
					<div className='row'>
						<div className='col-1-of-5'>
							<div className='icon'>
								<i className='fas fa-heart feature__icon'></i>
							</div>
							<h3 className='heading-tertiary u-margin-bottom-medium'>
								Đồng cảm
							</h3>
						</div>
						<div className='col-1-of-5'>
							<div className='icon'>
								<i className='fas fa-pencil-alt feature__icon'></i>
							</div>
							<h3 className='heading-tertiary u-margin-bottom-medium'>
								Xác định vấn đề
							</h3>
						</div>
						<div className='col-1-of-5'>
							<div className='icon'>
								<i className='fas fa-lightbulb feature__icon'></i>
							</div>
							<h3 className='heading-tertiary u-margin-bottom-medium'>
								Hình thành ý tưởng
							</h3>
						</div>
						<div className='col-1-of-5'>
							<div className='icon'>
								<i className='icon-basic-webpage-img-txt feature__icon'></i>
							</div>
							<h3 className='heading-tertiary u-margin-bottom-medium'>
								Tạo mẫu thử
							</h3>
						</div>
						<div className='col-1-of-5'>
							<div className='icon'>
								<i className='icon-basic-todolist-pen feature__icon'></i>
							</div>
							<h3 className='heading-tertiary u-margin-bottom-medium'>
								Thử nghiệm
							</h3>
						</div>
					</div>
				</article>
				<article className='article-features article-features--special'>
					<div className='special-features'>
						<div className='row u-center-text'>
							<h2 className='heading-secondary'>Điểm nổi bật</h2>
						</div>
						<div className='row u-margin-bottom-medium'>
							<h3 className='heading-tertiary u-margin-bottom-small'>
								1. Lớp học ấm cúng, giá cả phải chăng
							</h3>
							<p className='paragraph'>
								Ngày nay, Web Programming là một kỹ năng quan trọng để bạn kinh
								doanh, tiếp cận nhiều người, xây dựng thương hiệu cá nhân qua
								viết, thiết kế, trình bày dự án, … từ đó tăng lợi thế cạnh tranh
								trên thị trường tuyển dụng. Hẳn các bạn trẻ trong quá trình phát
								triển bản thân từng ước có một nơi để cất lên tiếng nói của mình
								với nhiều người hơn, website chính là một hình thức đó.
							</p>
							<p className='paragraph'>
								499.000VND cho một khóa học lập trình web là ưu đãi từ SheCodes
								với các học viên với mong muốn đem công nghệ tiếp cận nhiều hơn.
								Trong khuôn khổ Tech Marathon - khóa học code cho newbie theo
								dạng mentoring step-by-step, bạn sẽ:
							</p>
							<ul className='u-size-16 feature-list'>
								<li>
									Có sản phẩm là 1 website cá nhân sau khi hoàn thành khóa học.
								</li>
								<li>
									Được hướng dẫn các tiếp cận khi muốn tạo ra một website, không
									đơn thuần là học syntax của HTML và CSS.
								</li>
								<li>
									Được hỗ trợ 1 - 1, giải đáp, viết code trong suốt quá trình
									học.
								</li>
								<li>
									Được nhận chứng nhận từ SheCodes khi hoàn thành project cuối
									khóa.
								</li>
								<li>
									Được hướng dẫn để học lên mức khó hơn của các ngôn ngữ lập
									trình.
								</li>
								<li>
									Trò chuyện, định hướng cùng những người có kinh nghiệm về sự
									nghiệp bản thân trong ngành lập trình.
								</li>
							</ul>
						</div>
						<div className='row u-margin-bottom-big'>
							<h3 className='heading-tertiary u-margin-bottom-small'>
								2. Sắp xếp hình thức học đa dạng
							</h3>
							<p className='paragraph'>
								Không chỉ có giờ học trên lớp, Tech Marathon còn đan xen hoạt
								động như:
							</p>
							<ul className='u-size-16 feature-list'>
								<li>Q&A: Hỏi đáp</li>
								<li>Giờ chữa bài và định hướng tư duy</li>
								<li>Group học tập online</li>
								<li>
									Tương tác trong giờ học: hình ảnh, âm thanh, công nghệ. Biết
									đâu học xong bạn lại rinh được vài tips, trang web hay ho có
									thể ứng dụng trong công việc của mình nhỉ.
								</li>
							</ul>
							<p className='paragraph'>
								Ngoài ra, các bạn được cung cấp tài liệu, bài giảng trước khi
								đến lớp. Hãy sắp xếp thời gian và chuẩn bị một tâm thế sẵn sàng,
								tự tin nhất tham gia lớp học nhé.
							</p>
						</div>
						<div className='row u-margin-bottom-big'>
							<h3 className='heading-tertiary u-margin-bottom-small'>
								3. Đội ngũ hỗ trợ thân thiện
							</h3>
							<p className='paragraph'>
								Không phải những chuyên gia trong ngành hay giảng viên cao siêu
								mà là những học sinh, sinh viên - thành viên của SheCodes sẽ đi
								cùng các bạn. Họ là những người bạn tầm tuổi bạn, từng trải qua
								và vượt qua những cản trở y như bạn, ở đây đồng lòng mong muốn
								chia sẻ kinh nghiệm cho phái nữ.
							</p>
						</div>
						<div className='row u-margin-bottom-medium'>
							<h3 className='heading-tertiary u-margin-bottom-small'>
								4. Chú trọng vào chất lượng hơn số lượng
							</h3>
							<p className='paragraph'>
								Trong 6 tiếng ngắn ngủi, bạn không thể nhồi nhét ngay lập tức
								quá nhiều kiến thức, công cụ lập trình vì bạn … sẽ quên ngay
								thôi. SheCodes chú trọng:
							</p>
							<ul className='u-size-16 feature-list'>
								<li>
									Ai cũng có thể hiểu được, nhất là các bạn chưa có nhiều kinh
									nghiệm về code;
								</li>
								<li>
									Ứng dụng trực quan, bạn học làm web nên bạn học xong sẽ code
									ra một trang web!
								</li>
							</ul>
						</div>
						<div className='row u-margin-bottom-big'>
							<h3 className='heading-tertiary u-margin-bottom-small'>
								5. Learning path sau khi kết thúc khóa học
							</h3>
							<p className='paragraph'>
								Bạn hoang mang trong quá nhiều thông tin, bạn sợ học trước quên
								sau không biết để làm gì? Chúng mình đã chuẩn bị những chỉ dẫn
								cần thiết giúp bạn tự học, lựa chọn công nghệ, và lúc nào cũng
								sẵn sàng giúp đỡ trong khả năng khi bạn cần. Đảm bảo các cô gái
								không bị bỏ lại phía sau!
							</p>
						</div>
					</div>
				</article>
				<article className='article-form' id='register'>
					<Form />
				</article>
				<article className='article-contact'>
					<div className='row'>
						<div className='u-center-text'>
							<h2 className='heading-secondary--white'>
								Mọi thắc mắc vui lòng liên hệ
							</h2>
						</div>
					</div>
					<div className='row u-center-text'>
						<h3 className='heading-tertiary u-margin-bottom-extra-small'>
							Ms. Nguyễn Vũ Ngân Hà
						</h3>
						<address className='contact__address'>
							<a
								href='mailto:hanguyen.shecodes@gmail.com'
								className='contact__link'
							>
								hanguyen.shecodes@gmail.com
							</a>
							<a href='tel:+840356640776' className='contact__link'>
								0356640776
							</a>
						</address>
					</div>
				</article>
			</main>
			<footer className='footer u-center-text'>
				<div className='footer__logo-box'>
					<img src={logo} alt='SheCodes Logo' />
				</div>
				<div className='row u-margin-bottom-small u-margin-top-big'>
					<div className='col-1-of-2'>
						<nav className='footer__navigation'>
							<ul className='footer__list'>
								<li className='footer__item'>
									<a
										href='https://staffs.shecodesvietnam.tech/'
										className='navigation__link'
									>
										Đội ngũ
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://contact.shecodesvietnam.tech/'
										className='navigation__link'
									>
										Liên hệ
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://about.shecodesvietnam.tech/'
										className='navigation__link'
									>
										Giới thiệu
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://sponsors.shecodesvietnam.tech/'
										className='navigation__link'
									>
										Nhà tài trợ
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://faqs.shecodesvietnam.tech/'
										className='navigation__link'
									>
										FAQs
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='col-1-of-2'>
						<div className='footer__social-media u-margin-bottom-medium'>
							<p>Follow us</p>
							<ul className='footer__social-media-list'>
								<li className='footer__item'>
									<a
										href='https://www.facebook.com/shecodesvietnam/'
										className='navigation__link'
									>
										<i className='fab fa-facebook'></i>
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://www.instagram.com/shecodes.vietnam/?hl=en'
										className='navigation__link'
									>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
								<li className='footer__item'>
									<a
										href='https://www.linkedin.com/company/shecodeshackathon/'
										className='navigation__link'
									>
										<i className='fab fa-linkedin'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className='footer__copyright'>
					Thiết kế và phát triển với{' '}
					<span role='img' aria-label='copyright'>
						&#x1F496;
					</span>{' '}
					bởi SheCodes Hà Nội
				</p>
			</footer>
		</Fragment>
	);
}

export default App;
