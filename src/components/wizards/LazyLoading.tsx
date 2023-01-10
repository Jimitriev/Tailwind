
import LoadingImage from "../../assets/images/simple-loading3.gif";

const LazyLoading = (props: {
    className?: string
}) => {
    return (
        <div className={`${props?.className}`}>
            <img className="w-full h-full" src={LoadingImage} alt='loading' />
        </div>
    )
}

export default LazyLoading;