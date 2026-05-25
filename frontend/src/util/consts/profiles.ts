import profilePlaceholder from '../../assets/profile_placeholder.jpg';
import type { Teammate } from '../../pages/Home';

export interface Socials {
    github_link: string,
    linkedin_link: string,
}

export interface Profile {
    teammate_profile: Teammate,
    background_description: string,
    social_links: Socials
}

export const profile_bios = [
    {
		teammate_profile: {
            name: "Vikas Gowda",
            role: "Lead",
            study: "",
            img_src: profilePlaceholder
        }
        background_description,
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
]