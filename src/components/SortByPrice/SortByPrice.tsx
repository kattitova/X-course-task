type propsType = {
    selectHandle: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    selectValue: string,
}

export default function SortByPrice( { selectHandle, selectValue } : propsType ) {
    return (
        <select 
            onChange={ selectHandle }
            value = { selectValue }
        >
            <option value="">Select price</option>
            <option value="1">up to $15</option>
            <option value="2">$15 - $30</option>
            <option value="3">$30+</option>
        </select>
    );
}