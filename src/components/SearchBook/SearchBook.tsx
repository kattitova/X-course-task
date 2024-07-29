import { FaSearch } from "react-icons/fa";
import "./SearchBook.css";

type propsType = {
    searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchValue: string,
}

export default function SearchBook({ searchHandle, searchValue } : propsType) {
    return (
        <div className="search-wrapper">
            <input
                onChange={ searchHandle }
                className="search-input"
                placeholder="Search book by name"
                value = { searchValue }
            />
            <button className="search-button">
                <FaSearch />
            </button>
        </div>
    );
}