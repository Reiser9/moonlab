import React from "react";

import "./index.scss";

type Props = {
    data: {
        title: string;
        value: string;
    }[];
};

const Stats: React.FC<Props> = ({ data }) => {
    return (
        <div className="stats">
            {data.map((data, id) => (
                <div className="stat" key={id}>
                    <p className="statTitle">{data.title}</p>

                    <div className="statText">{data.value}</div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
