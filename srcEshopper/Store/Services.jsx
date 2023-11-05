//MAINCATEGORY_API


export async function createMaincategoryAPI(data) {
    var respose = await fetch(`/maincategory`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getMaincategoryAPI() {
    var respose = await fetch(`/maincategory`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateMaincategoryAPI(data) {
    var respose = await fetch(`/maincategory/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteMaincategoryAPI(data) {
    var respose = await fetch(`/maincategory/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

//SUBCATEGORY_API


export async function createSubcategoryAPI(data) {
    var respose = await fetch(`/subcategory`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getSubcategoryAPI() {
    var respose = await fetch(`/subcategory`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateSubcategoryAPI(data) {
    var respose = await fetch(`/subcategory/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteSubcategoryAPI(data) {
    var respose = await fetch(`/subcategory/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}





//BRAND_API


export async function createBrandAPI(data) {
    var respose = await fetch(`/brand`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getBrandAPI() {
    var respose = await fetch(`/brand`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateBrandAPI(data) {
    var respose = await fetch(`/brand/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteBrandAPI(data) {
    var respose = await fetch(`/brand/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}



//PRODUCT_API


export async function createProductAPI(data) {
    var respose = await fetch(`/product`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getProductAPI() {
    var respose = await fetch(`/product`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateProductAPI(data) {
    var respose = await fetch(`/product/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteProductAPI(data) {
    var respose = await fetch(`/product/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}


//User_Api


export async function createUserAPI(data) {
    var respose = await fetch(`/user`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getUserAPI() {
    var respose = await fetch(`/user`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateUserAPI(data) {
    var respose = await fetch(`/user/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteUserAPI(data) {
    var respose = await fetch(`/user/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}


//Cart_Api


export async function createCartAPI(data) {
    var respose = await fetch(`/cart`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getCartAPI() {
    var respose = await fetch(`/cart`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateCartAPI(data) {
    var respose = await fetch(`/cart/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteCartAPI(data) {
    var respose = await fetch(`/cart/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}



//Wishlist_Api


export async function createWishlistAPI(data) {
    var respose = await fetch(`/wishlist`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getWishlistAPI() {
    var respose = await fetch(`/wishlist`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateWishlistAPI(data) {
    var respose = await fetch(`/wishlist/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteWishlistAPI(data) {
    var respose = await fetch(`/wishlist/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}


//Checkout_Api


export async function createCheckoutAPI(data) {
    var respose = await fetch(`/checkout`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getCheckoutAPI() {
    var respose = await fetch(`/checkout`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateCheckoutAPI(data) {
    var respose = await fetch(`/checkout/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteCheckoutAPI(data) {
    var respose = await fetch(`/checkout/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}




//Contact_Api


export async function createContactAPI(data) {
    var respose = await fetch(`/contact`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getContactAPI() {
    var respose = await fetch(`/contact`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateContactAPI(data) {
    var respose = await fetch(`/contact/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteContactAPI(data) {
    var respose = await fetch(`/contact/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}




//Newslatter_Api


export async function createNewslatterAPI(data) {
    var respose = await fetch(`/newslatter`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function getNewslatterAPI() {
    var respose = await fetch(`/newslatter`, {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}

export async function updateNewslatterAPI(data) {
    var respose = await fetch(`/newslatter/` + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respose.json()
}

export async function deleteNewslatterAPI(data) {
    var respose = await fetch(`/newslatter/` + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respose.json()
}








