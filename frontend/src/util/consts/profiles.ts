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

export interface ProfileBios {
    [key: string]: Profile
}

export const profile_bios: ProfileBios = {
    "genensisbautistasanchez": {
		teammate_profile: {
            name: "Vikas Gowda",
            role: "Lead",
            study: "",
            img_src: profilePlaceholder
        },
        background_description: "text text text",
        social_links: {
            github_link: "test",
            linkedin_link: "test"
        }
	},
    "vikasgowda": {
		teammate_profile: {
            name: "Vikas Gowda",
            role: "Research Lead",
            study: "",
            img_src: profilePlaceholder
        },
        background_description: "text text text",
        social_links: {
            github_link: "test",
            linkedin_link: "test"
        }
	},
	"connorhill": {
		teammate_profile: {
            name: "Connor Hill",
            role: "Research Programmer",
            study: "Computer Science",
            img_src: profilePlaceholder
        },
        background_description: "text text text",
        social_links: {
            github_link: "test",
            linkedin_link: "test"
        }
	},
	"andyzheng": {
		teammate_profile: {
            name: "Andy Zheng",
            role: "",
            study: "",
            img_src: profilePlaceholder
        },
        background_description: "text text text",
        social_links: {
            github_link: "test",
            linkedin_link: "test"
        }
	},
	"derisomalley": {
		teammate_profile: {
            name: "Vikas Gowda",
            role: "Lead",
            study: "",
            img_src: profilePlaceholder
        },
        background_description: "text text text",
        social_links: {
            github_link: "test",
            linkedin_link: "test"
        }
	},
}