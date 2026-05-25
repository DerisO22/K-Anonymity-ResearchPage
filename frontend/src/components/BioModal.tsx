import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Profile } from "../util/consts/profiles";
import { profile_bios } from "../util/consts/profiles";

const BioModal = () => {
    const { name } = useParams();
    const [ teammateData, setTeammateData ] = useState<Profile | null>();

    useEffect(() => {
        setTeammateData(profile_bios[name.toLowerCase()]);

        console.log(teammateData);
    }, []);

    return (
        <div className="bio_modal">
            
        </div>
    )
}

export default BioModal;