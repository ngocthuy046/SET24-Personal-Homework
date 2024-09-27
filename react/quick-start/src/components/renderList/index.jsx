const products = [
    {
        title: "Product 1",
        id: 1
    },
    {
        title: "Product 2",
        id: 2
    },
    {
        title: "Product 3",
        id: 3
    }
]

export default function RenderList() {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    )

    return (
        <div class="render-list">
            <h1>Render List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
        
    )
}