import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder = "Search..."
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value }) }
            />
            <MySelect
                defaultValue="sort by"
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort: sort }) }
                option={[
                    {value: 'title', name: 'sort by title'},
                    {value: 'body', name: 'sort by body'}
                ]}
            />
        </div>
    );
};

export default PostFilter;