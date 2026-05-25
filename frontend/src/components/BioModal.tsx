import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BioModal = () => {
    const { name } = useParams();

    useEffect(() => {
        
    }, []);

    return (
        <div className="bio_modal">
            
        </div>
    )
}

export default BioModal;