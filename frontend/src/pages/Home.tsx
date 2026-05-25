import '../styles/pages.css';
import '../styles/common_styles.css';
import '../styles/homepage.css';
import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../assets/profile_placeholder.jpg';

export interface Teammate {
	name: string,
	role: string,
	study: string,
	img_src: string
};

const team_info: Teammate[] = [
	{
		name: "Vikas Gowda",
		role: "Lead",
		study: "",
		img_src: profilePlaceholder,
	},
	{
		name: "Connor Hill",
		role: "Programmer",
		study: "Computer Science",
		img_src: profilePlaceholder,
	},
	{
		name: "Andy Zheng",
		role: "Programmer",
		study: "Computer Science",
		img_src: profilePlaceholder,
		
	},
	{
		name: "Deris O'Malley",
		role: "Programmer",
		study: "Computer Science",
		img_src: profilePlaceholder,
	},
	{
		name: "Genensis BautistaSanchez",
		role: "Editor",
		study: "Computer Science",
		img_src: profilePlaceholder,
	},
];

const Home = () => {
	const navigate = useNavigate();

	const navigate_to_bio = (name: string) => {
		navigate(`/researcher-bio/${name.replace(/\s/g, '')}`);
	}

    return (
		<div className="page_container">
			<div className="top_section">
				<h1>Data Privacy + Deep Learning</h1>

				<div className='top_section_background'></div>
			</div>

			<div className='page_sub_section'>
				<h2>Our Team</h2>
				<div className="team_container">
					{team_info.map((teammate) => (
						<div className='teammate_card' key={teammate.name}>
							<img src={teammate.img_src} className='profile_image'/>

							<button onClick={() => navigate_to_bio(teammate.name)} className='bio_navigate_button'>Bio</button>

							<div className="team_card_text_container">
								<p className='text teammate_name'>{teammate.name}</p>
								<p className="text">{teammate.role}</p>
								<p className="text">{teammate.study}</p>
							</div>
						</div>
					))}
				</div>	
			</div>
		</div>
    )
}

export default Home;