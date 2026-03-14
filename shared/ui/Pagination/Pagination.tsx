import cn from "classnames";

import "./index.scss";

type Props = {
    withPage?: boolean;
};

const Pagination: React.FC<Props> = ({ withPage = false }) => {
    return (
        <div className="paginationContent">
            <p className="paginationPages">
                {withPage && (
                    <>
                        Page <span>1</span> of <span>350</span>
                    </>
                )}
            </p>

            <div className="pagination">
                <button className={cn("paginationButton", "auto")}>
                    Previous
                </button>
                <button className={cn("paginationButton", "active")}>1</button>
                <button className="paginationButton">2</button>
                <button className="paginationButton">3</button>
                <button className="paginationButton">4</button>
                <button className="paginationButton">5</button>
                <button className={cn("paginationButton", "auto")}>Next</button>
            </div>

            <div></div>

            {/* <div className="paginationArrows">
                <button className="paginationArrow">
                    <ArrowLeft />
                </button>

                <button className="paginationArrow">
                    <ArrowRight />
                </button>
            </div> */}
        </div>
    );
};

export default Pagination;
