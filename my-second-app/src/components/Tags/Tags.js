import React, { Fragment } from 'react';
import AddTags from './AddTags/AddTags';
import SelectTags from './SelectTags/SelectTags';

const tags = () => {
    return (
        <Fragment>
            <SelectTags />
            <AddTags />
        </Fragment>
    )
}

export default tags;
