// khởi tạo danh sách  sản phẩm để bán

let products = [
    {
        name: "iphone5",
        price: 5000,
    },
    {
        name: "iphone6",
        price: 6000
    },
    {
        name: "iphone15",
        price: 12000
    }
]
document.write(JSON.stringify(products));
// tạo mảng giỏ hàng để chứa các sản phẩm
let shoppingCart = [];
// viết hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productName, price, quantity) {
    // console.log("đi mua hàng!");
    let nameProduct = prompt("mời nhập tên sản phẩm");
    // let flag=false;
    // for (let i = 0; i < products.length; i++) {
    //     if(products[i].name==nameProduct){
    //         // đi mua hàng!
    //         flag=true;
    //         break;
    //     }
    // }
    let findProduct = products.find((item, index, arr) => {
        return item.name == nameProduct;
    })
    // console.log("findProduct",findProduct);
    if (!findProduct) {
        console.log("không có");
    } else {
        // console.log("đi mua");
        /* 
            khi thêm sản phẩm vào giỏ hàng thì kiểm tra xem sản phẩm đã có
            trong giỏ hàng hay chưa nếu có thì tăng số lượng
            chưa có trong giỏ hàng thì thêm bình thường.
        */
        let findIndex = shoppingCart.findIndex((item) => {
            return item.name == nameProduct;
        })
        /* 
            findIndex = -1 chứng tỏ trong giỏ hàng chưa có
        */
        if (findIndex == -1) {
            shoppingCart.push({ ...findProduct, quantity: 1 });
        } else {
            // chứng tỏ trong giỏ hàng có rồi
            shoppingCart[findIndex].quantity = ++shoppingCart[findIndex].quantity;
        }
        console.log("giỏ hàng của bạn", shoppingCart);
    }
    // if(!flag){
    //     console.log("sản phẩm không có trong cửa hàng"); 
    // }else{
    //     console.log("đi mua hàng!");
    //     // kiểm tra xem sản phẩm có trong cửa hàng hay không
    // }
}
// viết hàm xóa sản phẩm trong giỏ hàng
function removeFromCart(productName) {
    // cho người nhập tên sản phẩm cần xóa
    let nameProduct= prompt("nhập tên sản phẩm muốn xóa");
    let findIndex= shoppingCart.findIndex((item)=>{
        return item.name==nameProduct
    })
    if(findIndex==-1){
        console.log("sản phẩm bạn muốn xóa không có trong giỏ hàng!");    
    }else{
        shoppingCart[findIndex].quantity-=1;
        console.log("giỏ hàng của bạn",shoppingCart);
        
    }
}
// hàm show sản phẩm trong giỏ hàng.
// function displayCart() {
//     if (!shoppingCart.length) {
//         document.write(JSON.stringify(products));
//         document.write("<br>");
//         document.write("không có sản phẩm trong giỏ hàng!");
//     } else {
//         document.write(JSON.stringify(products));
//         document.write("<br>");
//         document.write(JSON.stringify(shoppingCart));
//     }
// }
let numbers=[2,3,3,5,4,4,5,6,6];
numbers=[];
console.log("numbers",numbers);
