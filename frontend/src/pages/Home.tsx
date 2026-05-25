import '../styles/pages.css';
import '../styles/common_styles.css';
import { useNavigate } from 'react-router-dom';

export interface Teammate {
	name: string,
	role: string,
	study: string,
	img_src: string
}

const team_info: Teammate[] = [
	{
		name: "Vikas Gowda",
		role: "Programmer",
		study: "",
		img_src: "",
	},
	{
		name: "Connor Hill",
		role: "Programmer",
		study: "Computer Science",
		img_src: "",
	},
	{
		name: "Andy Zheng",
		role: "Programmer",
		study: "Computer Science",
		img_src: "",
		
	},
	{
		name: "Deris O'Malley",
		role: "Programmer",
		study: "Computer Science",
		img_src: "",
	},
	{
		name: "Genensis BautistaSanchez",
		role: "Editor",
		study: "Computer Science",
		img_src: "",
	},
]

const Home = () => {
	const navigate = useNavigate();

	const navigate_to_bio = (name: string) => {
		navigate(`/${name.replace(/\s/g, '')}`);
	}

    return (
		<div className="page_container">
			<h1>Data Privacy + Deep Learning</h1>

			<h2>Our Team</h2>
			<div className="team_container">
				{team_info.map((teammate) => (
					<div className='teammate_card'>
						<img src={teammate.img_src} />

						<button onClick={() => navigate_to_bio(teammate.name)} className='bio_navigate_button'></button>

					</div>
				))}
			</div>
		</div>
    )
}

export default Home;