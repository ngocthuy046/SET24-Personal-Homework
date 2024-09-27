import { useState } from 'react';

const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div >
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable 
                products={products} 
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan="2" id="category-header">
                {category}
            </th>
        </tr>
    )
}
function ProductRow({ product }) {
    const name = product.stocked ? product.name : 
        <span style={{ color: 'lightgray' }}>
            {product.name}
        </span>;
    const price = product.stocked ? product.price : 
    <span style={{ color: 'lightgray' }}>
        {product.price}
    </span>;

    return (
        <tr id="product-row">
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category} 
                    key={product.category}
                />
            )
        }
        rows.push(
            <ProductRow 
                product={product} 
                key={product.name}
            />
        )
        lastCategory = product.category;
    })
    return (
        <div id="product-table">
            <h2>Result Table</h2>
            <table id="table-view">
                <thead id="table-header">
                    <tr id="table-header-row">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody id="table-body">{rows}</tbody>
            </table>
        </div>
    )
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <div id="search-bar">
            <h2>Search Bar</h2>
            <form id="search-form">
                <input
                    id="search-input"
                    type="text" 
                    value={filterText}
                    placeholder="Search..."
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label id="checkbox">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </div>
    )
}


export default function SideBar() {
    return (
        <div class="sidebar">
            <h1>Product Sidebar</h1>
            <FilterableProductTable products={products} />
        </div>
    )
}