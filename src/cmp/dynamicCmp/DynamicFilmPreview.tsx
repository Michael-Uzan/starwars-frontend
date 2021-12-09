import React from 'react'
import { FilmPreview } from '../FilmPreview';
import { FilmShortPreview } from '../FilmShortPreview';

export const DynamicFilmPreview = (props: any) => {

    const DynamicCmp = (props: any): any => {
        switch (props.type) {
            case "short":
                return <FilmShortPreview {...props} />
            default:
                return <FilmPreview {...props} />;
                break;
        }
    };

    return (
        <div>
            <DynamicCmp {...props} />
        </div>
    )
}
