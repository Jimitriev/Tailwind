import { useSelector } from "react-redux";

const Loading = () => {
    const [loading] = useSelector((state: any) => [state.uxuiReducer.loading]);

    return (
        <div>
            {
                loading ? "Loading..." : ""
            }
        </div>
    )
}

export default Loading;