import './search-box.style.css';

const SearchBox = ({ onChangeHandler, placeHolder, className }) => {
    return (
        <input 
        className={className} 
        type='search' 
        placeholder={placeHolder} 
        onChange={(e) => onChangeHandler(e)}
        />
    );
}
 
export default SearchBox;