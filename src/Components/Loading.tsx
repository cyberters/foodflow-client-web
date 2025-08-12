import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimateBounceHead from "./AnimateBounceHead"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const Loading = () => {
    return (
        <div className="w-full bg-brand-warm/30 py-2 px-3 flex animate-pulse rounded-md justify-center">
            <div className="mx-auto">
                <AnimateBounceHead label="Ładowanie">
                    <FontAwesomeIcon icon={faCircle}/>
                </AnimateBounceHead>
            </div>
        </div>
    )
}

export default Loading