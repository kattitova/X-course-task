type propsType = {
    searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchValue: string,
}

export default function SearchBook({ searchHandle, searchValue } : propsType) {
    return (
        <input
            onChange={ searchHandle }
            className="search-input"
            placeholder="Search book by name"
            value = { searchValue }
        />
    );
}