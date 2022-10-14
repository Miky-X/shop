import DirectoryItem from "../directory_item/directoryItem_component";

import { DirectoryContainer } from "./directory_style";

const  categories = [
    {
        id: 1,
        title: 'snowboard jackets',
        imageUrl: 'https://www.ridestore.com/images/H0907_01_8BavI7p.jpg?w=525&dpr=2',
        route: 'shop/snowboard jackets'
    },
    {
        id: 2,
        title: 'snowboard pants',
        imageUrl: 'https://www.ridestore.com/images/H1272_01_bXUliGa.jpg?w=525&dpr=2',
        route: 'shop/snowboard pants'
    },
    {
        id: 3,
        title: 'snowboard',
        imageUrl: 'https://static.supersklep.pl/1351926-undefined.jpg?w=960',
        route: 'shop/snowboard'
    },
    {
        id: 4,
        title: 'snowboard goggles',
        imageUrl: 'https://ridestore.imgix.net/catalog/product/E/8/E8303_1.jpg?fit=max&w=525&q=70&dpr=2&usm=15&auto=format',
        route: 'shop/snowboard goggles'
    },
    {
        id: 5,
        title: 'accessories',
        imageUrl: 'https://www.ridestore.com/images/H1069_01_BAYn4Zo.jpg?w=525&dpr=2',
        route: 'shop/accessories'
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
