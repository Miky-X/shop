import DirectoryItem from "../directory_item/directoryItem_component";

import "./directory_style.scss";

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
