import React from 'react';

const SearchBar = ({keyword,onKeywordChange}) => {
    return (
        <>
        <input className="p-2 rounded-lg bg-[#11161e] text-lg text-white active:outline-none" type="text" placeholder="Cari Catatan.." value={keyword}  onChange={(e) => onKeywordChange(e.target.value)}/>
        </>
    );
}

export default SearchBar;