import React from "react";
import "./case-studies-filters.less";
import { Headline3 } from "../../../typography/Headlines/Headlines";
import Paragraph from "../../../typography/Paragraph/Paragraph";

export function CaseStudiesFilters(props) {
    const filterType = ["Rich media", "Video", "3D", "HTML5"];

    const filterCategory = [
        "Gaming",
        "FMCG",
        "Automotive",
        "Beauty",
        "Kids",
        "Technology",
    ];

    return (
        <div className="filters">
            <Headline3>Filters</Headline3>
            <div className="filters-rows">
                <div className="filters-row">
                    <Paragraph small>Choose type:</Paragraph>
                    <div className="checkboxes">
                        {filterType.map((ft, idx) => (
                            <div className="checkbox" key={idx}>
                                <input
                                    value={ft}
                                    id={ft}
                                    onChange={props.onFilterChange}
                                    type="checkbox"
                                />
                                <label htmlFor={ft}>{ft}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filters-row">
                    <Paragraph small>Choose category:</Paragraph>
                    <div className="checkboxes">
                        {filterCategory.map((fc, idx) => (
                            <div className="checkbox" key={idx}>
                                <input
                                    value={fc}
                                    id={fc}
                                    onChange={props.onFilterChange}
                                    type="checkbox"
                                />
                                <label htmlFor={fc}>{fc}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
